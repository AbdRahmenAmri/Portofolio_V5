import { T_PROJECT } from "@types_def/index";
import TechBadge from "./TechBadge";


type TechBadgesProps = Pick<T_PROJECT, "technologies">
const TechBadges = ({ technologies }: TechBadgesProps) => {
  if (!technologies.length) return (<p className="text-sm md:text-base text-gray-400 opacity-50">No technologies added.</p>)

  return (
    <div className="flex flex-wrap gap-2 md:gap-3">
      {technologies.map((technologie, index) => (
        <TechBadge key={index} technologie={technologie} />
      ))}
    </div>

  );
};

export default TechBadges