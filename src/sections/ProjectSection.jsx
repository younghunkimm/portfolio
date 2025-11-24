import Section from "../layout/Section";
import ZoomImage from "../components/image/ZoomImage";

import BrainStorming from "../assets/images/brain_storming.svg";

const ProjectsSection = () => {
    return (
        <Section title="Project">
            쿠폰팝 <a href="https://github.com/CouponPop"></a>
            2025.10.13 ~ 2025.11.18 | 팀원 4명 spring boot, MySQL ...
            <br />
            쿠폰 알림 서비스, 배치 서비스 설계 및 개발
            <br />
            <ZoomImage
                src={BrainStorming}
                alt="Brain Storming"
                className="mb-4 w-100"
            />
            <ZoomImage
                src={BrainStorming}
                alt="Brain Storming"
                className="mb-4 w-100"
            />
            <br />
            중복 알림 발송 방지를 위해 Redis를 활용한 멱등성 처리
            <br />
            FCM 알림이 특정 상황에서 중복 발송되는 문제 발생 재시도 로직이
            개입되거나 동일 이벤트가 여러 번 발행되면 같은 알림이 사용자에게
            여러 번 전달됨 문제의 핵심은 각 알림 이벤트를 고유하게 식별할 수
            있는 값이 없다는 점 - 발행 측에서 알림마다 고유한 식별자를 생성하지
            않음 - 수신 측에서는 이벤트가 중복인지 확인할 방법이 없음 - 결국
            재시도나 중복 발행이 모두 중복 알림 발송으로 이어짐
            <br />
            이를 해결하기 위해 Redis를 활용한 멱등성 처리 로직을 구현 - 알림
            이벤트가 발행될 때 고유한 식별자(Trace ID)를 생성 - 이 때, Trace
            ID는 알림을 식별할 수 있도록 고유한 값들을 조합하여 UUID로 변환하여
            사용
        </Section>
    );
};

export default ProjectsSection;
