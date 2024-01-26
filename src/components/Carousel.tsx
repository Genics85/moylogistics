import { useState } from "react";

type CarouselProp = {
  images: string[];
};

function Carousel({ images }: CarouselProp) {
  const [curr, setCurr] = useState<number>(0);

  const prev = () => {
    setCurr((curr) => (curr == 0 ? images.length - 1 : curr - 1));
  };
  const next = () => {
    setCurr((curr) => (curr == images.length - 1 ? 0 : curr + 1));
  };

  return (
    <div
      className="w-full overflow-hidden relative h-fit "
      style={{ minHeight: "16rem" }}
    >
      <div
        className="flex  items-start transition-transform ease-out duration-300 full"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {images.map((image, i) => {
          return (
            <img
              key={i}
              className="object-contain min-w-full "
              src={image}
              alt=""
            />
          );
        })}
      </div>
      <div className="absolute inset-0 flex items-center justify-between p-4">
        <button
          type="button"
          onClick={prev}
          className="bg-white w-8 h-8 flex items-center justify-center opacity-80 rounded-full text-3xl "
        >
          {"<"}
        </button>
        <button
          type="button"
          onClick={next}
          className="bg-white w-8 h-8 flex items-center justify-center opacity-80 rounded-full text-3xl "
        >
          {">"}
        </button>
      </div>
      <div className="absolute bottom-4 right-0 left-0">
        <div className="flex items-center justify-center gap-2">
          {images.map((_, i) => (
            <div
              key={i}
              className={`transition-all w-3 h-3 bg-white rounded-full ${
                curr == i ? "p-2" : "bg-opacity-50"
              } `}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Carousel;
