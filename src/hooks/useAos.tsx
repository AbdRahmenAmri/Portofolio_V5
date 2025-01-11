import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const useAOS = (options?: AOS.AosOptions) => {
    
    // Optimize AOS initialization
    useEffect(() => {
        AOS.init(options);
        window.addEventListener('resize', () => AOS.init(options));
        return () => window.removeEventListener('resize', () => AOS.init(options));
    }, [options]);
};

export default useAOS