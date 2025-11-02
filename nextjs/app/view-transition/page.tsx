"use client";

import { useRef, useState } from "react";

export default function Page() {
  const [activeIndex, setActiveIndex] = useState(-1);
  const mainEle = useRef<HTMLElement>(null);
  const handleOnclick = (i: number) => {
    if (mainEle.current) {
      // Run updateActiveItem() on its own if view transitions are not supported
      if (!document.startViewTransition) {
        activeIndex === i ? setActiveIndex(-1) : setActiveIndex(i);
      } else {
        // Run updateActiveItem() via startViewTransition()
        const transition = document.startViewTransition(() =>
          activeIndex === i ? setActiveIndex(-1) : setActiveIndex(i)
        );
      }
    }
  };
  return (
    <main className="main" ref={mainEle}>
      <div className="grid match">
        {Array.from({ length: 4 }).map((_, i) => {
          return (
            <div
              className={`item item-${i + 1} match-div ${
                activeIndex === i ? "active" : ""
              }`}
              key={i}
              onClick={() => handleOnclick(i)}
            >
              <span>Item {i + 1}</span>
            </div>
          );
        })}
      </div>
    </main>
  );
}
