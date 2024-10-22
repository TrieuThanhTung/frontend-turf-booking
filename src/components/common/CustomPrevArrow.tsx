import { CustomPrevArrowWrapper } from "../../styles/slider";
import React from "react";
import { BsChevronLeft } from "react-icons/bs";

const CustomPrevArrow:React.FC<{
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}> = ({ onClick }) => {
  return (
    <CustomPrevArrowWrapper className="custom-prev-arrow" onClick={onClick}>
      <BsChevronLeft />
    </CustomPrevArrowWrapper>
  );
};

export default CustomPrevArrow;
