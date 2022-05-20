import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectFade } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "swiper/css/effect-fade";
import { sliderImage } from './modules/SliderImage';
function Section3() {
    return ( 
        <>
            <section className="section3">
                <h1 className="titre-about">Services</h1>
                <div className='slider-box'>
                <Swiper
                    pagination={true} 
                    modules={[Pagination,Autoplay,EffectFade]}
                    slidesPerView={1}
                    effect={'fade'}
                    loop={true}
                    autoplay={{
                        delay: 3500,
                        disableOnInteraction: true,
                    }}
                    >
                    {sliderImage.map((slideImage) => (
                        <SwiperSlide key={slideImage.id} style={{backgroundImage: `url(${slideImage.url_image})`}}/>
                    ))}
                    ...
                </Swiper>
                </div>
            </section>
        </> 
    );
}

export default Section3;