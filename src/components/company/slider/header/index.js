import Slider from "react-slick";
import ArrowBtn from "../../../ArrowBtn";
import Item from "./item";

const HeaderSlider = () => {
  const settings = {
    dots: true,
    className: "center",
    centerMode: true,
    centerPadding: "200px",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    swipeToSlide: true,
    nextArrow: (
      <ArrowBtn
        isLeft={false}
        classNames="right-32 h-20 bg-white opacity-50 top-1/2 -translate-y-1/2 rounded-full"
        fontSize={20}
      />
    ),
    prevArrow: (
      <ArrowBtn
        isLeft={true}
        classNames="left-32 h-20 bg-white opacity-50 top-1/2 -translate-y-1/2 rounded-full"
        fontSize={20}
      />
    ),
    responsive: [
      { breakpoint: 1280, settings: { arrows: false, centerPadding: "100px", dots: false } },
      { breakpoint: 900, settings: { arrows: false, centerPadding: "50px", dots: false } },
      { breakpoint: 640, settings: { arrows: false, centerPadding: "50px", dots: false } },
    ],
  };
  return (
    <Slider
      className="!flex w-full h-[21rem] justify-center items-center my-5 relative"
      {...settings}
    >
      {[
        "/images/slider-company-001.png",
        "/images/slider-company-002.png",
        "/images/slider-company-003.png",
        "/images/slider-company-004.png",
        "/images/slider-company-005.png",
        "/images/slider-company-006.png",
        "/images/slider-company-007.png",
        "/images/slider-company-008.png",
      ].map((src, idx) => (
        <Item key={idx} src={src} />
      ))}
    </Slider>
  );
};

export default HeaderSlider;
