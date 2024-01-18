import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import hero1 from '../../components/homeMain/hero-1.jpeg'
import hero2 from '../../components/homeMain/hero-2.jpeg'
import hero3 from '../../components/homeMain/hero-3.jpeg'


const RoomCaraousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }


  return (
    <section className="flex flex-col sm:py-1">
        <Slider {...settings}>
          {data.map((d, id) => (
            <div key={id} className="bg-white h-full sm:p-1 hover:scale-105 transition-all duration-500">
              <img src={d.img} alt="cover" className="w-full h-80 bg-cover" />
            </div>
          ))}
        </Slider>
    </section>
  );
}

const data = [
  {
    id: 1,
    img: hero1
  },
  {
    id: 2,
    img: hero2
  },
  {
    id: 3,
    img: hero3
  },
  {
    id: 4,
    img: hero1
  },
  {
    id: 5,
    img: hero2
  },
  {
    id: 6,
    img: hero3
  }

];

export default RoomCaraousel