import Section from "../layout/Section";
import Certification from "../components/Certification";

const CertificationSection = () => {
    return (
        <Section title="Certification">
            <ul className="space-y-3">
                <Certification date="2026.06.12" title="정보처리기사" />
                <Certification date="2021.03.12" title="컴퓨터활용능력 1급" />
            </ul>
        </Section>
    );
};

export default CertificationSection;
