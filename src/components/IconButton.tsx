import { motion } from "framer-motion";

type props = {
    Icon: React.ElementType;
    delay: number;
}
const IconButton = ({ Icon, delay }: props) => (
    <motion.div
        data-aos="fade-down"
        data-aos-delay={delay}
        className="relative group hover:scale-110 transition-transform duration-300"
    >
        <div className="absolute -inset-2 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full blur opacity-30 group-hover:opacity-75 transition duration-300" />
        <div className="relative p-2 sm:p-3 bg-black/50 backdrop-blur-sm rounded-full border border-white/10">
            <Icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-white" />
        </div>
    </motion.div>
);

export default IconButton