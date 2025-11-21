import Layout from "./layout/Layout";
import IntroSection from "./sections/IntroSection";
import ExperienceSection from "./sections/ExperienceSection";
import TechStackSection from "./sections/TechStackSection";
import ProjectsSection from "./sections/ProjectSection";
import ContactSection from "./sections/ContactSection";

function App() {
    return (
        <Layout>
            <IntroSection />
            <ExperienceSection />
            <TechStackSection />
            <ProjectsSection />
            <ContactSection />
        </Layout>
    );
}

export default App;
