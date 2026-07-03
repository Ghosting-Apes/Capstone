"use client";
import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";

const tabs = ['Timeline', 'World Map', 'Home', 'People', 'References', 'Contact'];
const routes: Record<string, string> = {
  "Home": "/", "World Map": "/map", "People": "/people",
  "References": "/bibliography", "Timeline": "/timeline", "Contact": "/contact"
};

export default function NavBar() {
  const router = useRouter();
  const pathName = usePathname();
  const [currentIndex, setCurrentIndex] = useState(2); // default to "Home"

  // Sync tab with URL on refresh
  useEffect(() => {
    const indexFromPath = tabs.findIndex(tab => routes[tab] === pathName);
    if (indexFromPath !== -1) {
      setCurrentIndex(indexFromPath);
    }
  }, [pathName]);

  const handleTabClick = (index: number) => {
    setCurrentIndex(index);
    router.push(routes[tabs[index]]);
  };

  return (
    <div className="flex flex-col items-center pt-4 gap-4">
      <div className="relative w-[720px] h-[140px] perspective-[1000px]">
        <div className="flex justify-center items-center gap-4 h-full">
          {tabs.map((tab, i) => {
            const relative = (i - currentIndex + tabs.length) % tabs.length;

            let className = "absolute w-[120px] h-[60px] flex items-center justify-center transition-all duration-500 ease-in-out";
            let transform = "";
            let opacity = 0;
            let zIndex = 0;

            if (relative === 0) {
              // Center
              transform = "translateZ(50px)";
              opacity = 1;
              zIndex = 5;
              className += " font-bold text-black";
            } else if (relative === 1) {
              // Right 1
              transform = "translateX(160px) rotateY(-15deg)";
              opacity = 1;
              zIndex = 4;
              className += " text-gray-600";
            } else if (relative === 2) {
              // Right 2
              transform = "translateX(320px) rotateY(-30deg)";
              opacity = 1;
              zIndex = 3;
              className += " text-gray-400";
            } else if (relative === tabs.length - 1) {
              // Left 1
              transform = "translateX(-160px) rotateY(15deg)";
              opacity = 1;
              zIndex = 4;
              className += " text-gray-600";
            } else if (relative === tabs.length - 2) {
              // Left 2
              transform = "translateX(-320px) rotateY(30deg)";
              opacity = 1;
              zIndex = 3;
              className += " text-gray-400";
            }

            return (
              <div
                key={tab}
                className={`${className} bg-white rounded-xl shadow-md cursor-pointer text-sm`}
                style={{
                  transform,
                  opacity,
                  zIndex,
                  pointerEvents: opacity > 0 ? 'auto' : 'none'
                }}
                onClick={() => handleTabClick(i)}
              >
                {tab}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
