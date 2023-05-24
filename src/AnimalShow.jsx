import { useState } from "react";
import bird from "./svg/bird.svg";
import cat from "./svg/cat.svg";
import cow from "./svg/cow.svg";
import dog from "./svg/dog.svg";
import gator from "./svg/gator.svg";
import heart from "./svg/heart.svg";
import horse from "./svg/horse.svg";

const svgMap = {
  cat,
  bird,
  cow,
  dog,
  gator,
  horse,
};

export const AnimalShow = ({ type }) => {
  const [clicks, setClicks] = useState(0);

  const handleClick = () => {
    setClicks(clicks + 1);
  };

  return (
    <div onClick={handleClick}>
      <img src={svgMap[type]} alt="animal" />
      <img style={{ width: 10 + 10 * clicks + "px" }} src={heart} alt="heart" />
    </div>
  );
};
