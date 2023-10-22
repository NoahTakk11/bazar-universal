import { useState } from "react";
import "../index.css";

//Components
import {
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
} from "react-icons/bs";

interface Props {
  imgs: string[];
}
export default function SliderCarousel(props: Props) {
  const [current, setCurrent] = useState<number>(0);

  const previousSlide = () => {
    if (current === 0) {
      setCurrent(props.imgs.length - 1);
    } else {
      setCurrent(current - 1);
    }
  };

  const nextSlide = () => {
    if (current === props.imgs.length - 1) {
      setCurrent(0);
    } else {
      setCurrent(current + 1);
    }
  };

  return (
    <div className="flex items-center justify-center overflow-hidden relative my-5 ">
      <div
        className={`flex gap-4 transition ease-in-out duration-40`}
        style={{ transform: `translateX(-${current * 95}%)` }}
      >
        {props.imgs.map((item, index) => (
          <img key={index} src={item} alt="" className="w-[70%] rounded-3xl" />
        ))}
      </div>

      <div className="absolute top-0 h-full w-full justify-between items-center flex text-blue-500 text-3xl px-1">
        <button onClick={previousSlide} className="">
          <BsFillArrowLeftCircleFill />
        </button>
        <button onClick={nextSlide} className="">
          <BsFillArrowRightCircleFill />
        </button>
      </div>
    </div>
  );
}
