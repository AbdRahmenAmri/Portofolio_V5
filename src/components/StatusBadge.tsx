import { Sparkles } from "lucide-react";
import { memo } from "react";

// Memoized Components
const StatusBadge = memo(() => (
    <div className="inline-block animate-float lg:mx-0" data-aos="zoom-in" data-aos-delay="400">
        <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-[#6366f1] to-[#a855f7] rounded-full blur opacity-30 group-hover:opacity-50 transition duration-1000"></div>
            <div className="relative px-3 sm:px-4 py-2 rounded-full bg-black/40 backdrop-blur-xl border border-white/10">
                <span className="bg-gradient-to-r from-[#6366f1] to-[#a855f7] text-transparent bg-clip-text sm:text-sm text-[0.7rem] font-medium flex items-center">
                    <Sparkles className="sm:w-4 sm:h-4 w-3 h-3 mr-2 text-blue-400" />
                    Ready to Innovate
                </span>
            </div>
        </div>
    </div>
));

export default StatusBadge