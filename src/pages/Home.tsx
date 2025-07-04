import { AboutMe } from "../components/AboutMe";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";
import { HeroSection } from "../components/HeroSection";
import { Navbar } from "../components/navbar";
import { ProjectSection } from "../components/ProjectSection";
import { SkillsSection } from "../components/SkillsSection";
import { StarBackground } from "../components/StarBackground";
import { ThemeToggle } from "../components/ThemeToggle";

export const Home = () => {
    return (<div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        {/* Theme Toggle */}
        <ThemeToggle />
        {/* Background Effect */}
        <StarBackground />
        {/* Navbar */}
        <Navbar />
        {/* Main Content */}
        <HeroSection />
        <AboutMe />
        <SkillsSection />
        <ProjectSection />
        <ContactSection />
        {/* Footer */}
        <Footer />
    </div>
    );
};
