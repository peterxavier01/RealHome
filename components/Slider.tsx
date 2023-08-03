"use client";

import React, { useEffect, useRef, useState } from "react";
import { Splide, SplideTrack } from "@splidejs/react-splide";

import CustomPagination from "./CustomPagination";
import "@splidejs/react-splide/css";
import { twMerge } from "tailwind-merge";
// import "@splidejs/splide/dist/css/themes/splide-default.min.css";

interface SliderProps {
  options: object;
  children: React.ReactNode;
  className?: string;
}

const Slider: React.FC<SliderProps> = ({ options, children, className }) => {
  const splideRef = useRef<Splide | null>(null);

  const [activeSlide, setActiveSlide] = useState<number>(0);
  const [slideCount, setSlideCount] = useState<number | undefined>(0);

  useEffect(() => {
    if (splideRef.current) {
      const splideInstance = splideRef.current.splide;

      // Update active slide whenever slide changes
      const handleSlideChange = (newIndex: number) => {
        setActiveSlide(newIndex);
      };

      // Get the initial slide count.
      setSlideCount(splideInstance?.Components.Elements.slides.length);

      // Listen for the "moved" event and attach the event handler
      splideInstance?.on("moved", handleSlideChange);

      // Clean up the event listener after the component unmounts
      return () => {
        splideInstance?.off("moved");
      };
    }
  }, []);

  return (
    <div className="custom-slider">
      <Splide ref={splideRef} tag="section" options={options} hasTrack={false}>
        <div style={{ position: "relative" }}>
          <SplideTrack>{children}</SplideTrack>

          <div className={twMerge(`absolute`, className)}>
            <CustomPagination
              index={activeSlide}
              slideCount={slideCount}
              onPaginationUpdated={(index) => {
                if (splideRef.current) {
                  splideRef.current.go(index);
                }
              }}
            />
          </div>
        </div>
      </Splide>
    </div>
  );
};

export default Slider;
