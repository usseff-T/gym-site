import { Autoplay, A11y} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/controller';

export const Sliderr=()=> {
    const images = ['https://images.pexels.com/photos/16770561/pexels-photo-16770561/free-photo-of-scenic-view-of-green-hills-and-mountains.jpeg', 'https://images.pexels.com/photos/20041507/pexels-photo-20041507/free-photo-of-close-up-of-sleeping-cat.jpeg', 'https://images.pexels.com/photos/12187128/pexels-photo-12187128.jpeg', 'https://images.pexels.com/photos/11785594/pexels-photo-11785594.jpeg']

    return (
    <section className='bg-white mt-10 mx-4 sm:mx-8 md:mx-20 lg:mx-36 z-10'>
        <div className='text-center font-extrabold text-2xl my-8'>Your own Slider</div>
        <Swiper
            modules={[Autoplay, A11y]}
            spaceBetween={30} // Adjust the spacing as needed
            slidesPerView={1} // Show only one slide by default
            autoplay
        >
            {images.map((img, index) => (
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