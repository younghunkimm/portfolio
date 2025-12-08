import Layout from "../layout/Layout";
import Section from "../layout/Section";

const CouponPopPage = () => {
    const homeHref =
        (import.meta.env.BASE_URL || "/").endsWith("/")
            ? import.meta.env.BASE_URL
            : `${import.meta.env.BASE_URL}/`;

    return (
        <Layout>
            <Section title="쿠폰팝 (CouponPop)">
                <p className="mb-6 text-lg text-text-soft">
                    쿠폰팝은 사용자가 관심 있는 매장의 쿠폰을 놓치지 않도록
                    푸시 알림을 제공하는 서비스입니다. 알림 멱등성 처리와 배치
                    설계를 통해 중복 발송을 막고 안정적으로 쿠폰을 전달하는 데
                    집중했습니다.
                </p>

                <div className="mb-8 space-y-3 rounded-lg border border-border bg-black/20 p-4">
                    <p className="font-semibold text-primary">기술 포인트</p>
                    <ul className="list-disc space-y-2 pl-5">
                        <li>Redis 기반 Trace ID로 알림 멱등성 보장</li>
                        <li>Spring Batch로 쿠폰/알림 스케줄링 파이프라인 구성</li>
                        <li>FCM 재시도 전략 및 중복 방지 로직 설계</li>
                        <li>MySQL로 쿠폰/사용자 구독 정보 관리</li>
                    </ul>
                </div>

                <div className="mb-12 space-y-3 rounded-lg border border-border bg-black/10 p-4">
                    <p className="font-semibold text-primary">간단 요약</p>
                    <ul className="list-disc space-y-2 pl-5">
                        <li>2025.10.13 ~ 2025.11.18 | 팀원 4명</li>
                        <li>역할: 알림/배치 파트 설계 및 개발</li>
                        <li>핵심 성과: 중복 알림 0건, 예약 알림 지연 10% 이상 감소</li>
                    </ul>
                </div>

                <a
                    href={homeHref}
                    className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 font-semibold text-black transition hover:opacity-90"
                >
                    메인 포트폴리오로 돌아가기
                </a>
            </Section>
        </Layout>
    );
};

export default CouponPopPage;
