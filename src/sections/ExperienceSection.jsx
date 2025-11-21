import Section from "../layout/Section";
import Experience from "../components/Experience";

const ExperienceSection = () => {
    return (
        <Section title="Experience">
            <ul className="space-y-3">
                <Experience
                    period="2025.06.30 ~ 2025.11.24"
                    topic="Team Sparta"
                    description="스프링 8기 수료"
                />
                <Experience
                    period="2022.05.09 ~ 2025.05.01"
                    topic="PGMLife"
                    description="ERP 고도화 및 유지보수 / 쇼핑몰 개발"
                />
            </ul>
        </Section>
    );
};

export default ExperienceSection;
