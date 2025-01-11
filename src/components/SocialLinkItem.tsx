import { T_SOCIAL_MEDIA_LINK } from "@types_def/app";
import { ExternalLink } from "lucide-react";
import { SocialIcon } from "react-social-icons";

const SocialLinkItem = ({ link }: { link: T_SOCIAL_MEDIA_LINK }) => (
    <a
        href={link.url}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-between p-4 rounded-lg 
                 bg-white/5 border border-white/10 overflow-hidden
                 hover:border-white/20 transition-all duration-500"
    >
        {/* Hover Gradient Background */}
        <div
            className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500
                   bg-gradient-to-r ${link.gradient}`}
        />

        {/* Icon and Text */}
        <div className="relative flex items-center gap-4">
            {/* Icon */}
            <div className="relative flex items-center justify-center">
                <div
                    className="absolute inset-0 opacity-20 rounded-md transition-all duration-500
                       group-hover:scale-110 group-hover:opacity-30"
                    style={{ backgroundColor: link.color }}
                />
                <div className="relative p-2 rounded-md">
                    <SocialIcon url={link.url} />
                </div>
            </div>

            {/* Text */}
            <div className="flex flex-col">
                <span className="text-lg font-bold pt-[0.2rem] text-gray-200 tracking-tight leading-none group-hover:text-white transition-colors duration-300">
                    {link.displayName}
                </span>
                <span className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                    {link.subText}
                </span>
            </div>
        </div>

        {/* External Link Icon */}
        <ExternalLink
            className="relative w-5 h-5 text-gray-500 group-hover:text-white
                   opacity-0 group-hover:opacity-100 transition-all duration-300
                   transform group-hover:translate-x-0 -translate-x-1"
        />
    </a>
);

export default SocialLinkItem