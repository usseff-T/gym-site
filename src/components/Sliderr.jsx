import { Autoplay, A11y} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/controller';
import imagesUrl from "./imagesUrl"

export const Sliderr=()=> {


    return (
    <section className='bg-white items-center m-2 w-4/5 h-4/5 justify-center'>
        {/*<div className='text-center font-extrabold text-2xl my-8'>Your own Slider</div>*/}
        <Swiper
            modules={[Autoplay, A11y]}
            spaceBetween={30} // Adjust the spacing as needed
            slidesPerView={1} // Show only one slide by default
            autoplay
        >
            {imagesUrl.map((img, index) => (
                <SwiperSlide key={index}>
                    <a href='/#'>
                        <img
                            src={img}
                            alt={`slide-${index + 1}`}
                            className='object-fill sm:h-48 sm:w-96  md:h-96 md:w-full lg:w-4/5  lg:h-4/5 select-none'
                        />
                    </a>
                </SwiperSlide>
            ))}
        </Swiper>
    </section>
)


}