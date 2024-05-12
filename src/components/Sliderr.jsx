import { Autoplay, A11y} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/controller';
import imagesUrl from "./imagesUrl"
export const Sliderr=()=> {


    return (
    <section className=' bg-white mt-10 mx-4 sm:mx-8 md:mx-20 lg:mx-36 z-10'>
        <div className='text-center font-extrabold text-2xl my-8'>Your own Slider</div>
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
                            className='w-fit h-[500px] mx-auto select-none'
                        />
                    </a>
                </SwiperSlide>
            ))}
        </Swiper>
    </section>
)


}