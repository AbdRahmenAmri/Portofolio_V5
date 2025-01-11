import { AnimatePresence } from "framer-motion";
import WelcomeScreen from "./WelcomeScreen";
import DOMAIN from "@DATA/domain";
import Navbar from "@components/Navbar";
import AnimatedBackground from "@components/Background";
import About from "./About";
import ContactPage from "./Contact";
import Portofolio from "./Portofolio";
import Footer from "@components/footer";
import Home from "./Home";

type LandingPageProps = {
    showWelcome: boolean
    setShowWelcome: React.Dispatch<React.SetStateAction<boolean>>
}

const LandingPage = ({ showWelcome, setShowWelcome }: LandingPageProps) => {
    return (
        <>
            <AnimatePresence mode="wait">
                {showWelcome && (
                    <WelcomeScreen onLoadingComplete={() => setShowWelcome(false)} domainURL={DOMAIN.url} />
                )}
            </AnimatePresence>

            {!showWelcome && (
                <>
                    <Navbar />
                    <AnimatedBackground />
                    <Home />
                    <About />
                    <Portofolio />
                    <ContactPage />
                    <Footer />
                </>
            )}
        </>
    );
};


export default LandingPage