import { T_PROJECT } from "@types_def/index";
import FeatureItem from "./FeatureItem";

type FeatureItemsProps = Pick<T_PROJECT, "features">

const FeatureItems = ({ features }: FeatureItemsProps) => {
    if (!features.length) return (<p className="text-gray-400 opacity-50">No features added.</p>)
    return (
        <ul className="list-none space-y-2">
            {features.map((feature, index) => (
                <FeatureItem key={index} feature={feature} />
            ))}
        </ul>

    );
};

export default FeatureItems