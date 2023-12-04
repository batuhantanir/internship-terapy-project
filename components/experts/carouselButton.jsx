import { IoIosArrowDropleftCircle } from "react-icons/io";
import { IoIosArrowDroprightCircle } from "react-icons/io";

export const NextArrowComponent = (props) => {
  // Your custom next arrow implementation
  return (
    <div
      className="absolute top-[50%] w-[20px] h-[20px] p-0 translate-y-[-50%] cursor-pointer right-[30px] scale-150 hover:scale-[1.75] active:scale-[1.5] disabled:hover:scale-150 "
      onClick={props.onClick}
    >
      <IoIosArrowDroprightCircle
      />
    </div>
  );
};

export const PrevArrowComponent = (props) => {
  // Your custom prev arrow implementation
  return (
    <div
      className={`absolute top-[50%] w-[20px] h-[20px] p-0 translate-y-[-50%] cursor-pointer left-[30px] scale-150 hover:scale-[1.75] z-10 active:scale-[1.5] disabled:hover:scale-150 `}
      disabled={props.currentSlide == 0}
      onClick={props.onClick}
    >
      <IoIosArrowDropleftCircle
        className={`${props.currentSlide == 0 ? " opacity-50" : ""}`}
      />
    </div>
  );
};
