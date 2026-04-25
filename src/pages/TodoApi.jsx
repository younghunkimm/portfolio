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

// mermaid
import Mermaid from "../components/Mermaid/Mermaid";

// images
import PresignedUpload1 from "../assets/projects/todoapi/presigned_upload_1.png";
import PresignedUpload2 from "../assets/projects/todoapi/presigned_upload_2.png";
import PresignedUpload3 from "../assets/projects/todoapi/presigned_upload_3.png";
import PresignedUpload4 from "../assets/projects/todoapi/presigned_upload_4.png";
import PresignedDownload1 from "../assets/projects/todoapi/presigned_download_1.png";
import PresignedDownload2 from "../assets/projects/todoapi/presigned_download_2.png";
import PresignedDownload3 from "../assets/projects/todoapi/presigned_download_3.png";

const TodoApiPage = () => {
    return (
        <Wrapper>
            <Layout>
                <Section title="Todo API">
                    <ProjectOverview
                        description={
                            <>
                                회원 인증(JWT), 사용자 관리, Todo
                                관리(작성/목록/상세/검색), 파일 업로드(S3
                                Presigned URL), Todo 매니저 관리 등 실무 기능을
                                담은 Spring Boot 3 기반 서버 애플리케이션입니다.
                                <br />
                                <br />
                                GitHub Actions와 AWS 서비스들을 활용해 CI/CD
                                파이프라인을 설계하고, 배포 자동화하였습니다.
                                <br />
                                <br />
                                또한, Todo 도메인을 Java에서 Kotlin으로 전환하여
                                코드 간결성을 높였습니다.
                            </>
                        }
                        goals={[
                            "CI/CD 파이프라인 자동화",
                            "대용량 데이터 처리 최적화",
                            "조회 성능 개선",
                            "페이징 및 정렬 기능 최적화",
                            "Kotlin 전환 및 테스트 코드 작성",
                        ]}
                        imageSrc={TeamSpartaCover}
                        imageAlt="Todo API 서비스 개요"
                        info={[
                            "기간: 2025.08.18 ~ 2025.08.22",
                            "팀원: 개인 프로젝트",
                            "스택: Java 17, Spring Boot 3.x, MySQL 8.x, Kotlin, JPA",
                        ]}
                    />
                </Section>

                {/* 역할 */}
                <Section title="구현한 기능">
                    <ContentBox>
                        <BulletList
                            items={[
                                "GitHub Actions 기반 CI/CD 워크플로우 구성",
                                "EC2 자동 배포 및 무중단 배포 구현",
                                "JDBC Template 기반 Bulk Insert 구현",
                                "QueryDSL 도입으로 복잡한 검색 쿼리 동적 생성",
                                "로그용 AOP 기능 구현",
                                "서버 부하 없는 파일 업로드/다운로드 구현 (S3 + Presigned URL)",
                                "Java에서 Kotlin으로 Todo 도메인 전환",
                            ]}
                        />
                    </ContentBox>
                </Section>

                {/* CI/CD 파이프라인 아키텍쳐 */}
                <Section
                    title="CI/CD 파이프라인 아키텍쳐"
                    link="https://younghunkimm.github.io/posts/cicd-pipeline-1/"
                >
                    <ContentBox title="Flow Chart">
                        <Mermaid
                            chart={`
flowchart TB
    subgraph Dev [GitHub]
        A[Source Code]
        B[GitHub Actions CI CD Workflow]
    end

    subgraph Docker [Docker Hub]
        C[Private Repository]
    end

    subgraph AWS [AWS Cloud]
        subgraph IAM [IAM]
            R[OIDC Role]
        end
        D[SSM Parameter Store]
        E[SSM Document spring-plus-deploy]
        F[EC2 Instances - Spring Boot in Docker]
        G[ALB - Load Balancer]
    end

    H[Client or User]

    A --> B
    B -->|Assume Role OIDC| R
    R --> B

    B -->|Build and Push| C
    B -->|Trigger Deploy| E
    B -->|Get params| D

    E -->|Run Command| F
    C -->|Pull Image| F
    D -->|Env vars and secrets| F

    F --> G --> H
                            `}
                        />
                    </ContentBox>
                </Section>

                {/* Presigned URL */}
                <Section title="파일 업로드/다운로드 구현 (Presigned URL)">
                    <ContentBox title="업로드 절차">
                        <BulletList
                            title="1. 사용자가 파일 선택"
                            items={["브라우저/앱에서 업로드할 파일 선택"]}
                        />
                        <BulletList
                            title="2. 클라이언트 → 서버: Presigned URL 요청"
                            items={[
                                "filename, contentType 같은 메타데이터를 서버로 보냄",
                                "서버는 업로드할 경로(key)를 UUID 등으로 생성",
                            ]}
                        />
                        <BulletList
                            title="3. 서버: Presigned URL 생성 후 응답"
                            items={[
                                "URL 안에 권한/유효시간/버킷경로가 포함",
                                "동시에 key 값도 같이 응답해줄 수 있음 (클라가 서버에 다시 보내기 편하게)",
                            ]}
                        />
                        <BulletList
                            title="4. 클라이언트: Presigned URL로 직접 업로드"
                            items={[
                                "이 단계에서 파일이 S3로 바로 올라감",
                                "서버는 관여하지 않음",
                            ]}
                        />
                        <BulletList
                            title="5. 업로드 완료 후: 클라이언트 → 서버에 key 전송"
                            items={[
                                "서버는 이 key를 DB에 저장 (사용자 프로필 이미지)",
                            ]}
                        />
                    </ContentBox>
                    <ContentBox title="경로(key) 지정">
                        <BulletList
                            items={[
                                <>
                                    prefix: 로컬서버와 운영서버 폴더를 구분하기
                                    위해 각 환경의 application.yml 에 정의한
                                    값을 사용
                                    <CodeBlock language="java">
                                        {`// application-local.yml
storage:
    prefix: local`}
                                    </CodeBlock>
                                    <CodeBlock language="java">
                                        {`// application-prod.yml
storage:
  prefix: prod`}
                                    </CodeBlock>
                                </>,
                                "domain: FileDomain",
                                "userId: 로그인된 회원의 id",
                                "uuid: 보안성·확장성을 위한 고유 식별자",
                                "fileName: 파일명",
                            ]}
                        />
                    </ContentBox>
                    <ContentBox title="업로드 테스트">
                        <p>Presigned URL 발급 요청</p>
                        <ImageBox
                            src={PresignedUpload1}
                            label="Presigned Upload 1"
                        />
                        <p>S3에 직접 파일 업로드</p>
                        <ImageBox
                            src={PresignedUpload2}
                            label="Presigned Upload 2"
                        />
                        <p>S3 콘솔에서 업로드된 파일 확인</p>
                        <ImageBox
                            src={PresignedUpload3}
                            label="Presigned Upload 3"
                        />
                        <p>지정한 시간(10분) 후 Access Denied 응답 확인</p>
                        <ImageBox
                            src={PresignedUpload4}
                            label="Presigned Upload 4"
                        />
                    </ContentBox>
                    <ContentBox title="다운로드 테스트">
                        <p>Presigned URL 발급 요청</p>
                        <ImageBox
                            src={PresignedDownload1}
                            label="Presigned Download 1"
                        />
                        <p>URL을 통해 접속</p>
                        <ImageBox
                            src={PresignedDownload2}
                            label="Presigned Download 2"
                        />
                        <p>지정한 시간(10분) 후 Access Denied 응답 확인</p>
                        <ImageBox
                            src={PresignedDownload3}
                            label="Presigned Download 3"
                        />
                    </ContentBox>
                    <ContentBox title="요약">
                        <BulletList
                            items={[
                                "S3 Bucket명 과 key를 기준으로 Presigned URL을 발급하여 클라이언트가 임시 권한을 획득",
                                "클라이언트는 응답받은 Presigned URL로 직접 요청을 보내 객체를 업로드 및 다운로드",
                            ]}
                        />
                    </ContentBox>
                </Section>

                {/* Bulk Insert */}
                <Section title="Bulk Insert">
                    <ContentBox title="구현 내용">
                        <BulletList
                            items={[
                                <>
                                    <b>비동기 처리</b>: @async를 사용하여 API
                                    호출 시 즉시 응답하고, 실제 작업은
                                    백그라운드에서 수행
                                </>,
                                <>
                                    <b>Bulk Insert</b>: JPA 대신 JdbcTemplate의
                                    batchUpdate를 사용하여 DB 처리 성능 극대화
                                </>,
                                <>
                                    <b>분산 락</b>: 여러 서버 환경에서도 단
                                    하나의 작업만 실행되도록 보장
                                </>,
                                <>
                                    <b>청크 기반 메모리 관리</b>:
                                    OutOfMemoryError 방지를 위해 1,000개 단위의
                                    청크로 데이터를 분할 처리
                                </>,
                                <>
                                    <b>DB 부하 조절</b>: Thread, sleep을 이용한
                                    스로틀링(Throttling) 기능 추가
                                </>,
                                <>
                                    <b>실행 시간 측정</b>: StopWatch를 사용하여
                                    전체 작업 소요 시간을 로그로 기록
                                </>,
                                <>
                                    <b>닉네임 중복 방지</b>: UUID를 사용
                                </>,
                            ]}
                        />
                    </ContentBox>
                </Section>
            </Layout>
        </Wrapper>
    );
};

export default TodoApiPage;
