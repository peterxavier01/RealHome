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
    // Ensure slideCount is defined before rendering
    if (paginationRef.current && slideCount !== undefined) {
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

      // Check if rootRef.current is null, if it is, create a new root.
      if (!rootRef.current) {
        rootRef.current = ReactDOM.createRoot(paginationRef.current);
      }
      // Use root.render() to render the custom pagination into the paginationRef.
      rootRef.current.render(customPagination);
    }
  }, [index, slideCount, onPaginationUpdated]);

  // Only unmount when the component is unmounted
  useEffect(() => {
    return () => {
      if (rootRef.current) {
        rootRef.current.unmount();
        rootRef.current = null;
      }
    };
  }, []);

  return <div ref={paginationRef} />;
};

export default CustomPagination;
