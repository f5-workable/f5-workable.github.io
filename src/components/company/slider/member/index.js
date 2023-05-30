import Slider from "react-slick";
import Item from "./Item";
import ArrowBtn from "../../../ArrowBtn";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CustomMemberSlider = ({ resumes }) => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: false,
    nextArrow: (
      <ArrowBtn
        isLeft={false}
        classNames="-right-12 md:-right-16 lg:-right-20 p-5 text-neutral-400"
        fontSize={30}
      />
    ),
    prevArrow: (
      <ArrowBtn
        isLeft={true}
        classNames="-left-12 md:-left-16 lg:-left-20 p-5 text-neutral-400"
        fontSize={30}
      />
    ),
    responsive: [
      { breakpoint: 1538, settings: { slidesToShow: 4, slidesToScroll: 4 } },
      { breakpoint: 1280, settings: { slidesToShow: 3, slidesToScroll: 3 } },
      { breakpoint: 900, settings: { slidesToShow: 2, slidesToScroll: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  return (
    <>
      {resumes?.length > 0 ? (
        <Slider
          className={
            (resumes.length > 4 ? "!flex " : "") +
            `w-full h-[21rem] justify-center items-center my-3 relative`
          }
          {...settings}
        >
          {resumes?.map((resume) => (
            <Item key={resume.r_id} resume={resume} className="m-3" />
          ))}
        </Slider>
      ) : (
        <p className="text-2xl text-center text-neutral-400 my-32">
          이력서가 존재하지 않습니다.
        </p>
      )}
    </>
  );
};

export default CustomMemberSlider;
