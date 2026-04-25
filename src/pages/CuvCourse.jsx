// layout
import Wrapper from "../layout/Wrapper";
import Layout from "../layout/Layout";
import Section from "../layout/Section";

// components
import ImageBox from "../components/project/ImageBox";
import ProjectOverview from "../components/project/ProjectOverview";
import ContentBox from "../components/project/ContentBox";
import BulletList from "../components/project/BulletList";

// cover
import TeamSpartaCover from "../assets/images/teamsparta_cover.png";

// code
import CodeBlock from "../components/CodeBlock/CodeBlock";

// table
import InfoTable from "../components/InfoTable/InfoTable";

// image
import CachingCpuUsage from "../assets/projects/cuvcourse/caching_cpu_usage.png";
import CachingTraffic from "../assets/projects/cuvcourse/caching_traffic.png";
import OptimizingSearch from "../assets/projects/cuvcourse/optimizing_search.webp";
import ErdImage from "../assets/projects/cuvcourse/erd.png";

const CuvCoursePage = () => {
    return (
        <Wrapper>
            <Layout>
                <Section title="수강신청 플랫폼">
                    <ProjectOverview
                        description={
                            <>
                                대학 수강신청 시스템의 대용량 트래픽 환경에서
                                발생하는 동시성 문제를 해결하고 성능을 최적화한
                                프로젝트입니다.
                            </>
                        }
                        metrics={[{ label: "데이터 일관성", value: "100%" }]}
                        goals={[
                            "동시성 문제 해결 및 데이터 일관성 보장",
                            "DB 부하 감소와 응답 속도 개선",
                            "캐싱 전략 설계 및 구현",
                            "강의 검색 시 결과를 빠르게 제공할 수 있도록 성능 최적화",
                            "Docker 기반 인프라 환경 구축을 통한 개발 생산성 및 배포 안정성 향상",
                            "Flyway를 활용한 DB 마이그레이션 관리로 안정적인 스키마 변경 및 버전 관리 달성",
                        ]}
                        imageSrc={TeamSpartaCover}
                        imageAlt="수강신청 플랫폼 서비스 개요"
                        info={[
                            "기간: 2025.08.26 ~ 2025.09.01",
                            "팀원: 백엔드 6명",
                            "역할: 동시성 문제 해결, 캐싱, 인프라 환경 구축",
                            "스택: Java 17, Spring Boot 3.x, MySQL 8.x, Redis, Redisson, JPA, Flyway, Docker",
                        ]}
                    />
                </Section>

                {/* 역할 */}
                <Section title="내가 맡은 기능">
                    <ContentBox>
                        <BulletList
                            items={[
                                "Redisson 기반 분산락 구현으로 동시성 문제 해결",
                                "Redis를 활용한 캐싱 기능 구현",
                                "쿼리 튜닝을 통한 강의 검색 최적화",
                                "Docker 기반 인프라 환경 구축",
                                "Flyway 활용한 DB 마이그레이션 관리",
                            ]}
                        />
                    </ContentBox>
                </Section>

                {/* 동시성 제어 */}
                <Section title="동시성 제어">
                    <ContentBox>
                        <CodeBlock language="java">
                            {`public CourseResponse registerCourse(long studentId, long lectureId) {
    log.debug("Lock type: {}", distributedLock.getType());

    Student student = studentJpaRepository.findById(studentId)
            .orElseThrow(() -> new BusinessException(CourseRegistExceptionEnum.STUDENT_NOT_FOUND));
    Lecture lecture = lectureJpaRepository.findById(lectureId)
            .orElseThrow(() -> new BusinessException(CourseRegistExceptionEnum.LECTURE_NOT_FOUND));
    CourseId courseId = CourseId.of(lecture, student);
    
    String lockKey = COURSE_REGIST_LOCK_KEY + lectureId;

    Course course = lockManager.executeWithLock(distributedLock, lockKey, () -> {
        if (courseJpaRepository.existsById(courseId)) {
            throw new BusinessException(CourseRegistExceptionEnum.ALREADY_REGISTERED);
        }
        return courseCreationService.createCourseIfAvailable(lecture, courseId);
    });

    return CourseResponse.from(course);
}`}
                        </CodeBlock>
                        <BulletList
                            items={[
                                "분산 락에 사용될 키 값을 지정",
                                "수강 신청이라는 하나의 트랜잭션 작업에 분산 락을 적용하여 여러 학생이 동시에 요청을 하더라도 지정된 정원을 초과하지 않도록 개선",
                            ]}
                        />
                    </ContentBox>
                </Section>

                {/* 캐싱 */}
                <Section title="캐싱">
                    <ContentBox>
                        <CodeBlock language="java">
                            {`public CourseResponse registerCourse(long studentId, long lectureId) {
    log.debug("Lock type: {}", distributedLock.getType());
    log.debug("Use Redis Cache: {}", true);

    Lecture lecture = lectureJpaRepository.findById(lectureId)
            .orElseThrow(() -> new BusinessException(CourseRegistExceptionEnum.LECTURE_NOT_FOUND));

    // redis에 키 없을 때만 (정원 - 신청 학생 수) 저장
    seatGate.ensureInitialized(lectureId, () ->
        Math.max(0, lecture.getCapacity()- lecture.getTotal())
    );

    // Fail-fast (좌석 획득 실패)
    if (!seatGate.tryAcquire(lectureId)) {
        throw new BusinessException(CourseRegisterExceptionEnum.CAPACITY_FULL);
    }

    try {

        // DB 저장 로직

    } catch (RuntimeException e) {
        // DB 등록 실패 시 좌석 보상
        seatGate.compensate(lectureId, lecture.getCapacity());
        throw e;
    }
}`}
                        </CodeBlock>
                        <BulletList
                            items={[
                                "cache-aside 전략을 채택하여 Redis에 키 값을 먼저 조회",
                                "없다면 DB의 값을 사용해 강의 정원에서 신청 학생 수를 뺀 값을 연산하여 Redis 캐시 초기화",
                                "Fail-fast 원칙을 적용하여 캐싱된 강의 정원 수를 먼저 계산하고, 초과 시 예외를 발생시키도록해 DB 접근 횟수 감소",
                                "DB 등록에 실패하더라도 Lua 스크립트로 작성된 캐시 롤백 로직을 실행하여 DB와 Redis 간의 데이터 일관성 유지 보장",
                            ]}
                        />
                    </ContentBox>
                    <ContentBox title="성능 개선">
                        <div className="grid gap-6 md:grid-cols-2 sm:grid-cols-2">
                            <div>
                                <p>
                                    <b>DB CPU 사용량 비교</b>
                                </p>
                                <br />
                                <ImageBox
                                    src={CachingCpuUsage}
                                    label="DB CPU 사용량 비교"
                                />
                                <br />
                                <p>
                                    <span className="text-red-300">4.39%</span>{" "}
                                    →{" "}
                                    <span className="text-lime-300">1.15%</span>{" "}
                                    로 약{" "}
                                    <span className="text-amber-300">73%</span>{" "}
                                    성능 향상
                                </p>
                            </div>
                            <div>
                                <p>
                                    <b>테스트 소요시간</b>
                                </p>
                                <br />
                                <ImageBox
                                    src={CachingTraffic}
                                    label="테스트 소요시간"
                                />
                                <br />
                                <p>
                                    <span className="text-red-300">19.2s</span>{" "}
                                    →{" "}
                                    <span className="text-lime-300">4.8s</span>{" "}
                                    으로 약{" "}
                                    <span className="text-amber-300">75%</span>{" "}
                                    속도 향상
                                </p>
                            </div>
                        </div>
                    </ContentBox>
                </Section>

                {/* 검색 최적화 */}
                <Section title="검색 최적화">
                    <ContentBox>
                        <CodeBlock language="java">
                            {`@Query(
    value = """
            SELECT * FROM lectures
            WHERE MATCH(lecture_title) AGAINST (:keyword IN NATURAL LANGUAGE MODE)
            ORDER BY MATCH(lecture_title) AGAINST (:keyword IN NATURAL LANGUAGE MODE) DESC, id DESC
        """,
    countQuery = """
            SELECT COUNT(*) FROM lectures
            WHERE MATCH(lecture_title) AGAINST (:keyword IN NATURAL LANGUAGE MODE)
        """,
    nativeQuery = true
)
Page<Lecture> searchTitleNatural(@Param("keyword") String keyword, Pageable pageable);`}
                        </CodeBlock>
                        <BulletList
                            items={[
                                "강의 테이블(lectures)에 ngram 방식의 Full Text Index 적용",
                                "사용자가 검색한 검색어의 연관도가 가장 높은 순으로 정렬될 수 있도록 NATURAL LANGUAGE MODE를 활용",
                            ]}
                        />
                    </ContentBox>
                    <ContentBox title="성능 개선">
                        <p>
                            <b>검색 소요 시간 비교</b>
                        </p>
                        <br />
                        <ImageBox src={OptimizingSearch} label="검색 최적화" />
                        <br />
                        <BulletList
                            title="강의 100만 건 기준"
                            items={[
                                <>
                                    Index가 적용된 BOOLEAN MODE의 경우{" "}
                                    <span className="text-blue-300">89ms</span>{" "}
                                    소요
                                </>,
                                <>
                                    채택한 NATURAL MODE의 경우{" "}
                                    <span className="text-lime-300">33ms</span>{" "}
                                    소요
                                </>,
                                <>
                                    Index가 적용되지 않은 LIKE 부분 포함 검색의
                                    경우{" "}
                                    <span className="text-red-300">376ms</span>{" "}
                                    소요
                                </>,
                                <>
                                    <span className="text-red-300">376ms</span>{" "}
                                    →{" "}
                                    <span className="text-lime-300">33ms</span>{" "}
                                    으로 약{" "}
                                    <span className="text-amber-300">91%</span>{" "}
                                    속도 향상
                                </>,
                            ]}
                        />
                    </ContentBox>
                </Section>

                {/* ERD */}
                <Section title="ERD 구성">
                    <ImageBox src={ErdImage} label="Cuv Course ERD" />
                </Section>
            </Layout>
        </Wrapper>
    );
};

export default CuvCoursePage;
