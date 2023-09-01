import { useState } from 'react';
import style from './Carousel.module.css';
interface Slide {
    text: string;
    author: string;
}
interface TextCarouselProps {
  slides: Slide[];
}

const Carousel = ({ slides }: TextCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className={style.carouselConter}>
      <div className={style.carousel}>
          <div className={style.textSlide}>{slides[currentIndex].text}</div>
          <div className={style.author}>{slides[currentIndex].author}</div>
      </div>
      <div className={style.dotsConter}>
        {slides.map((slide, index) => (
          <span
            key={index}
            className={`${style.dot} ${index === currentIndex ? style.active : ''}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;