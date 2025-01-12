import { T_CERTIFICATE, T_PROJECT } from "@types_def/index";
import { hasId } from "@utils/index";
import ToggleButton from "./ToggleButton";
import { useState } from "react";

type TabContentProps<T extends T_CERTIFICATE | T_PROJECT> = {
    items: T[];
    renderItem: (item: T) => React.ReactNode

}

const TabContent = <T extends T_CERTIFICATE | T_PROJECT>({ items, renderItem }: TabContentProps<T>) => {
    const [showAll, setShowAll] = useState<boolean>(false);
    const isMobile = window.innerWidth < 768;
    const initialItems = isMobile ? 4 : 6;
    
    const toggleShowMore = () => setShowAll(!showAll)
    const displayedItems = showAll ? items : items.slice(0, initialItems);

    return (
        <div className="container mx-auto flex-row justify-center items-center overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-3 gap-5">
                {displayedItems.map((item: T, index: number) => (
                    <div
                        key={hasId(item) ? item.id : index}
                        data-aos={index % 3 === 0 ? "fade-up-right" : index % 3 === 1 ? "fade-up" : "fade-up-left"}
                        data-aos-duration={index % 3 === 0 ? "1000" : index % 3 === 1 ? "1200" : "1000"}
                    >
                        {renderItem(item)}
                    </div>
                ))}
            </div>
            {items.length > initialItems && (
                <div className="mt-6 w-full flex justify-start">
                    <ToggleButton onClick={toggleShowMore} isShowingMore={showAll} />
                </div>
            )}
        </div>
    );
}

export default TabContent