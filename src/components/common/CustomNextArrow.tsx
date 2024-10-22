import { CustomNextArrowWrapper } from "../../styles/slider";
import { BsChevronRight } from 'react-icons/bs';

const CustomNextArrow:React.FC<{
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}> = ({ onClick }) => {
  return (
    <CustomNextArrowWrapper
      className="custom-next-arrow"
      onClick={onClick}
    >
        <BsChevronRight />
    </CustomNextArrowWrapper>
  );
};

export default CustomNextArrow;
