"use client";
import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";

const tabs = ['Timeline', 'World Map', 'Home', 'People', 'References', 'Contact'];
const routes: Record<string, string> = {
  "Home": "/", "World Map": "/map", "People": "/people",
  "References": "/bibliography", "Timeline": "/timeline", "Contact": "/contact"
};

export default function NavBar() {
  const router = useRouter();
  const pathName = usePathname();
  const defaultIndex = tabs.findIndex(tab => routes[tab] === pathName) || 2;
  const [currentIndex, setCurrentIndex] = useState(defaultIndex);

  const visibleIndexes = [
    (currentIndex - 1 + tabs.length) % tabs.length, // Left
    currentIndex,                                   // Center
    (currentIndex + 1) % tabs.length                // Right
  ];

  const handleTabClick = (index: number) => {
    setCurrentIndex(index);
    router.push(routes[tabs[index]]);
  };

  return (
    <div className="flex flex-col items-center pt-4 gap-4">
      <div className="relative w-[480px] h-[120px] perspective-[1000px]">
        <div className="flex justify-center items-center gap-4 h-full">
          {tabs.map((tab, i) => {
            let className = "absolute transition-all duration-500 ease-in-out";
            let transform = "";
            let opacity = 0;
            let zIndex = 0;

            if (i === currentIndex) {
              transform = "translateZ(50px) scale(1.2)";
              opacity = 1;
              zIndex = 3;
              className += " font-bold text-black";
            } else if (i === (currentIndex - 1 + tabs.length) % tabs.length) {
              transform = "translateX(-150px) rotateY(20deg)";
              opacity = 1;
              zIndex = 2;
              className += " text-gray-600";
            } else if (i === (currentIndex + 1) % tabs.length) {
              transform = "translateX(150px) rotateY(-20deg)";
              opacity = 1;
              zIndex = 2;
              className += " text-gray-600";
            }

            return (
              <div
                key={tab}
                className={`${className} bg-white px-6 py-4 rounded-xl shadow-md cursor-pointer text-lg`}
                style={{
                  transform,
                  opacity,
                  zIndex,
                  pointerEvents: opacity === 1 ? 'auto' : 'none'
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
