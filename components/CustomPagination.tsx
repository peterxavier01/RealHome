import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom/client";

interface CustomPaginationProps {
  index: number;
  slideCount: number | undefined;
  onPaginationUpdated: (index: number) => void;
}

const CustomPagination: React.FC<CustomPaginationProps> = ({
  index,
  slideCount,
  onPaginationUpdated,
}) => {
  const paginationRef = useRef<HTMLDivElement | null>(null);
  const rootRef = useRef<ReactDOM.Root | null>(null);

  useEffect(() => {
    if (paginationRef.current) {
      const customPagination = (
        <div className="custom-pagination flex items-center gap-4">
          {Array.from({ length: slideCount! }, (_, i) => (
            <button
              key={i}
              className={
                index === i
                  ? "active w-[15px] h-[15px] bg-[#007bff] rounded-full border-none cursor-pointer"
                  : "not-active w-[15px] h-[15px] rounded-full bg-[#ddd] border-none cursor-pointer"
              }
              onClick={() => onPaginationUpdated(i)}
            />
          ))}
        </div>
      );

      // Use ReactDOM.createPortal to render a custom pagination into the paginationRef.
      rootRef.current = ReactDOM.createRoot(paginationRef.current);
      rootRef.current.render(customPagination);
    }

    return () => {
      // Clean up the custom pagination when the component unmounts
      if (rootRef.current) {
        rootRef.current.unmount();
      }
    };
  }, [index, slideCount, onPaginationUpdated]);

  return <div ref={paginationRef} />;
};

export default CustomPagination;
