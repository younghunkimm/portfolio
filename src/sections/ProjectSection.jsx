import Section from "../layout/Section";
import ZoomImage from "../components/image/ZoomImage";

import BrainStorming from "../assets/images/brain_storming.svg";

const ProjectsSection = () => {
    const couponPopUrl = `${import.meta.env.BASE_URL}couponpop`;

    return (
        <Section title="Project">
            <p className="mb-3 text-lg font-semibold">
                쿠폰팝{" "}
                <a
                    href={couponPopUrl}
                    className="text-primary underline underline-offset-4 transition hover:text-primary/80 hover:no-underline"
                >
                    /couponpop
                </a>
            </p>
            <p className="mb-3 text-text-soft">
                2025.10.13 ~ 2025.11.18 | 팀원 4명 | Spring Boot, MySQL, Redis,
                FCM
            </p>
            <p className="mb-6">
                쿠폰 알림 서비스의 알림/배치 파트를 맡아 중복 발송 방지와 예약
                알림 스케줄링을 설계하고 개발했습니다.
            </p>
            <ZoomImage
                src={BrainStorming}
                alt="Brain Storming"
                className="mb-6 w-100"
            />
            <p className="mb-2">중복 알림 발송을 막기 위한 멱등성 처리:</p>
            <ul className="mb-4 list-disc space-y-2 pl-5">
                <li>알림 이벤트마다 Trace ID를 생성해 Redis에 저장</li>
                <li>동일 Trace ID가 이미 처리됐으면 추가 발송 차단</li>
                <li>재시도/중복 발행 시에도 한 번만 알림이 전달되도록 보장</li>
            </ul>
            <p className="text-text-soft">
                구독/쿠폰 데이터는 MySQL로 관리하고, 예약/주기 알림은 배치로
                처리해 지연을 최소화했습니다. test
            </p>
        </Section>
    );
};

export default ProjectsSection;
