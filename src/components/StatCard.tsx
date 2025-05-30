import { ArrowUpRight, LucideIcon } from "lucide-react";
import { memo } from "react";

interface StatCardProps {
    icon: LucideIcon; // Type from lucide-react for icons
    color: string;    // CSS gradient classes
    value: number;    // Numeric value for the stat
    label: string;    // Label for the stat
    description: string; // Description for the stat
    animation: string; // AOS animation type
}

const StatCard = memo(({ icon: Icon, color, value, label, description, animation }: StatCardProps) => (
    <div data-aos={animation} data-aos-duration={1300} className="relative group">
        <div className="relative z-10 bg-gray-900/50 backdrop-blur-lg rounded-2xl p-6 border border-white/10 overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl h-full flex flex-col justify-between">
            <div className={`absolute -z-10 inset-0 bg-gradient-to-br ${color} opacity-10 group-hover:opacity-20 transition-opacity duration-300`}></div>

            <div className="flex items-center justify-between mb-4">
                <div className="w-16 h-16 rounded-full flex items-center justify-center bg-white/10 transition-transform group-hover:rotate-6">
                    <Icon className="w-8 h-8 text-white" />
                </div>
                <span className="text-4xl font-bold text-white">{value}</span>
            </div>

            <div>
                <p className="text-sm uppercase tracking-wider text-gray-300 mb-2">{label}</p>
                <div className="flex items-center justify-between">
                    <p className="text-xs text-gray-400">{description}</p>
                    <ArrowUpRight className="w-4 h-4 text-white/50 group-hover:text-white transition-colors" />
                </div>
            </div>
        </div>
    </div>
));

export default StatCard
