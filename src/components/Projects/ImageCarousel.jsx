import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ImageCarousel = ({ images, projectName }) => {
  const numImages = images?.length;
  return (
    <Carousel
      showThumbs={false}
      showArrows={numImages > 1}
      showIndicators={numImages > 1}
      autoPlay
      infiniteLoop
      stopOnHover
      swipeable
    >
      {images?.map((image) => (
        <img
          class="py-2"
          width="500"
          height="500"
          src={`/images/${image}`}
          alt={`${projectName}'s screenshot`}
          onClick={}
        />
      ))}
    </Carousel>
  );
};

export default ImageCarousel;
