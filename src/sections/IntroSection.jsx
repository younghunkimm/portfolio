import Section from "../layout/Section";

const IntroSection = () => {
    return (
        <Section title="Introduction">
            <p>
                안녕하세요!
                <br />
                저는 백엔드 개발자 <b>김영훈</b>입니다.
                <br />
                <br />
                3년간 PHP와 Laravel로 웹 서비스를 개발하며 실무를 익혔습니다.
                <br />
                현재는 더 구조적이고 확장성 높은 시스템을 만들기 위해
                <br />
                Java와 Spring이라는 새로운 도전에 몰입하고 있습니다.
                <br />
                새로운 언어도 두려워하지 않고, 꾸준히 배우며 성장하는
                <br />
                <b>“함께하고 싶은 개발자”</b> 를 지향합니다.
            </p>
        </Section>
    );
};

export default IntroSection;
