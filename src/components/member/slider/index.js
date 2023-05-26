import Slider from "react-slick";
import HeadItem from "./HeadItem";
import Item from "./Item";
import ArrowBtn from "../../ArrowBtn";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CustomSlider = ({ isHeader, boards }) => {
  const headerSettings = {
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
      {isHeader ? (
        <Slider
          className="!flex w-full h-[21rem] justify-center items-center my-5 relative"
          {...headerSettings}
        >
          {[
            "/images/slider-member-001.png",
            "/images/slider-member-002.png",
            "/images/slider-member-003.png",
            "/images/slider-member-004.png",
            "/images/slider-member-005.png",
            "/images/slider-member-006.png",
            "/images/slider-member-007.png",
            "/images/slider-member-008.png",
          ].map((src, idx) => (
            <HeadItem key={idx} src={src} />
          ))}
        </Slider>
      ) : (
        <Slider
          className={
            (boards?.length > 4 ? "!flex " : "") +
            `w-full h-[21rem] justify-center items-center my-3 relative`
          }
          {...settings}
        >
          {boards?.map((board) => (
            <Item key={board.j_id} board={board} className="m-3" />
          ))}
        </Slider>
      )}
    </>
  );
};

export default CustomSlider;
