import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const useAOS = (options?: AOS.AosOptions) => {
    useEffect(() => {
        AOS.init(options);
    }, [options]);
};

export default useAOS