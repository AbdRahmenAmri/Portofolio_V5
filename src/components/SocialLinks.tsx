import { T_SOCIAL_MEDIA_LINK } from "@types_def/index";
import SocialLinkItem from "./SocialLinkItem";


const SocialLinks = ({ links }: { links: T_SOCIAL_MEDIA_LINK[] }) => {
  const primaryLink = links.find((link) => link.isPrimary);
  const otherLinks = links.filter((link) => !link.isPrimary);

  return (
    <div className="w-full bg-gradient-to-br from-white/10 to-white/5 rounded-2xl p-6 py-8 backdrop-blur-xl">
      <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
        <span className="inline-block w-8 h-1 bg-indigo-500 rounded-full"></span>
        Connect With Me
      </h3>

      <div className="flex flex-col gap-4">
        {/* Primary Link */}
        {primaryLink && <SocialLinkItem link={primaryLink} />}

        {/* Other Links in a Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {otherLinks.map((link) => (
            <SocialLinkItem key={link.name} link={link} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SocialLinks;
