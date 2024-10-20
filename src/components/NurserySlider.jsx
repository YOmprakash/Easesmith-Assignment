import img from '../assets/story.png'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './NurserySlider.css'

function NurserySlider() {
  const stories = [
    { id: 1, image: img, description: "Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum." },
    { id: 2, image: img, description: "Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum." },
    { id: 3, image: img, description: "Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum." },
    { id: 4, image: img, description: "Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum." },
    { id: 5, image: img, description: "Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum." },
    { id: 6, image: img, description: "Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum." },
    { id: 7, image: img, description: "Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum." },
    { id: 8, image: img, description: "Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum." },
    { id: 9, image: img, description: "Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum." },
    { id: 10, image: img, description: "Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum." },
  ];

  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full px-4 py-8 mx-auto">
      <Slider {...settings}>
        {stories.map((story) => (
          <div key={story.id}>
            <div className="flex flex-col items-center justify-center text-center">
              <img src={story.image} alt={`story-${story.id}`} className="w-[100px] object-contain " />
              <p className="text-[#838383] px-4 font-[500] text-sm mt-4">{story.description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default NurserySlider;
