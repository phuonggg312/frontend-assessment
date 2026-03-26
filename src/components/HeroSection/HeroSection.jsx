import { useRef, useState } from 'react'
import { heroSlides } from '../../data/heroData'
import './HeroSection.scss'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'

export function HeroSection() {
  const swiperRef = useRef(null)
  const [currentSlide, setCurrentSlide] = useState(0)

  return (
    <section className="hero relative w-full overflow-hidden" aria-label="Hero banner carousel">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={(swiper) => setCurrentSlide(swiper.realIndex)}
        className="w-full aspect-[375/698] lg:aspect-[1920/1080]"
        aria-roledescription="carousel"
      >
        {heroSlides.map((slide, index) => (
          <SwiperSlide
            key={slide.id}
            role="group"
            aria-roledescription="slide"
            aria-label={`Slide ${index + 1} of ${heroSlides.length}`}
            className="h-full"
          >
            <picture className="block h-full w-full">
              <source media="(min-width: 1024px)" srcSet={slide.imageDesktop} />
              <img
                src={slide.imageMobile}
                alt={slide.alt}
                className="w-full object-cover"
                loading={index === 0 ? "eager" : "lazy"}
              />
            </picture>

            <div className="absolute bottom-0 left-0 w-full bg-black/50 text-primary transition-[height] duration-300">
              <div className="mx-auto max-w-[1920px] px-3 pb-10 pt-6 md:px-6 md:py-10">
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col gap-2">
                    <p className="text-[10px] font-semibold md:text-[12px] md:font-bold md:leading-[1]">
                      {slide.eyebrow}
                    </p>
                    <h2 className="text-[36px] leading-[42px] md:text-[56px] md:leading-[64px]">
                      {slide.title}
                    </h2>
                  </div>
                  <p className="max-w-[600px] text-[10px] md:text-[12px] leading-normal md:leading-[1.2]">
                    {slide.description}
                  </p>
                  <div className="flex gap-2">
                    <a href="#" className="hero__btn">Shop Now</a>
                    <a href="#" className="hero__btn">Discover All</a>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="arrow">
        <button type="button" onClick={() => swiperRef.current?.slidePrev()} className="hero__arrow hero__arrow--left" aria-label="Previous slide">
          <svg viewBox="0 0 10 16" className="hero__arrow-icon" aria-hidden="true" focusable="false">
            <path d="M7.60933 0L0 7.60933L7.60933 15.2187L9.49467 13.3333L3.77067 7.60933L9.49467 1.88533L7.60933 0Z" />
          </svg>
        </button>
        <button type="button" onClick={() => swiperRef.current?.slideNext()} className="hero__arrow hero__arrow--right" aria-label="Next slide">
          <svg viewBox="0 0 10 16" className="hero__arrow-icon" aria-hidden="true" focusable="false">
            <path d="M1.88533 15.2187L9.49467 7.60933L1.88533 0L0 1.88533L5.724 7.60933L0 13.3333L1.88533 15.2187Z" />
          </svg>
        </button>
      </div>

      <div
        className="absolute bottom-4 z-10 flex w-full items-center justify-center gap-3 md:bottom-5"
        role="group"
        aria-label="Slide navigation"
      >
        {heroSlides.map((item, index) => (
          <button
            key={item.id}
            type="button"
            aria-label={`Go to slide ${index + 1} of ${heroSlides.length}`}
            aria-current={index === currentSlide ? true : undefined}
            onClick={() => swiperRef.current?.slideToLoop(index)}
            className={`hero__dot ${index === currentSlide ? 'hero__dot--active' : 'hero__dot--inactive'}`}
          />
        ))}
      </div>
    </section>
  )
}