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

const TodoApiPage = () => {
    return (
        <Wrapper>
            <Layout>
                <Section title="Todo API">
                    <ProjectOverview
                        description={<>test</>}
                        metrics={[
                            { label: "1", value: "1" },
                            { label: "2", value: "2" },
                            { label: "3", value: "3" },
                        ]}
                        goals={[
                            "모바일/웹 공통 알림 + 앱 종료/백그라운드에서도 푸시 보장",
                            "대량 이벤트에서도 중복 없는 알림(멱등성) + 안정적 재시도",
                            "성능 테스트로 병목을 드러내고 개선 포인트 도출",
                        ]}
                        imageSrc={TeamSpartaCover}
                        imageAlt="Todo API 서비스 개요"
                        info={[
                            "기간: 2025.10.13 ~ 2025.11.18",
                            "팀원: 백엔드 4명",
                            "역할: 알림/이벤트 설계 및 구현",
                            "스택: Java 17, Spring Boot 3.x, MySQL 8.x, Redis, RabbitMQ, FCM, Flyway, OpenFeign, Slack Webhook, K6, Prometheus, Grafana",
                            "배포/운영: AWS(ECS/ALB), Jenkins, Blue/Green",
                        ]}
                    />
                </Section>
            </Layout>
        </Wrapper>
    );
};

export default TodoApiPage;
