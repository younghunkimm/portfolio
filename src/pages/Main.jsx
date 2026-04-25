import Wrapper from "../layout/Wrapper";
import Layout from "../layout/Layout";
import IntroSection from "../sections/IntroSection";
import ExperienceSection from "../sections/ExperienceSection";
import TechStackSection from "../sections/TechStackSection";
import ProjectsSection from "../sections/ProjectSection";
import CertificationSection from "../sections/Certification";
import ContactSection from "../sections/ContactSection";

function Main() {
    return (
        <Wrapper>
            <IntroSection />
            <Layout>
                <ProjectsSection />
                <TechStackSection />
                <CertificationSection />
                <ExperienceSection />
                <ContactSection />
            </Layout>
        </Wrapper>
    );
}

export default Main;
