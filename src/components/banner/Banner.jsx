import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

const Banner = () => {
  return (
    <div className="-mt-20">
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        loop={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="bg-[url(https://i.ibb.co/7Y5gPJG/tuxpi-com-1701161410.jpg)] bg-cover h-screen flex items-center justify-center flex-col">
            <h1 className="text-3xl text-[#ffb229] font-bold text-center mb-4 lg:mt-0 md:mt-12 mt-12">Marine Marvels</h1>
            <p className="text-white lg:text-sm md:text-sm text-xs lg:w-1/3 md:w-1/2 w-1/2 text-center">Embark on a maritime adventure with our sea tours. From sandy shores to rocky cliffs, our expert guides will lead you along the coast, unraveling the beauty and mysteries that the sea holds.</p> 
            <button className='bg-[#ffb229] text-sm text-white font-bold px-4 py-3 rounded-md mt-6 hover:bg-white hover:text-[#ffb229]'>Explore More</button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[url(https://i.ibb.co/NCG7mtC/tuxpi-com-1701161427.jpg)] bg-cover h-screen flex items-center justify-center flex-col">
          <h1 className="text-3xl text-[#ffb229] font-bold text-center mb-4 lg:mt-0 md:mt-12 mt-12">Adventure Awaits</h1>
            <p className="text-white lg:text-sm md:text-sm text-xs lg:w-1/3 md:w-1/2 w-1/2 text-center">Embark on thrilling escapades led by our experienced guides. From adrenaline-pumping outdoor activities to heartwarming encounters with nature, let us be your compass to unforgettable adventures.</p> 
            <button className='bg-[#ffb229] text-sm text-white font-bold px-4 py-3 rounded-md mt-6 hover:bg-white hover:text-[#ffb229]'>Explore More</button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[url(https://i.ibb.co/bQ7LmhM/tuxpi-com-1701161445.jpg)] bg-cover h-screen flex items-center justify-center flex-col">
          <h1 className="text-3xl text-[#ffb229] font-bold text-center mb-4 lg:mt-0 md:mt-12 mt-12">Lakeside Serenity</h1>
            <p className="text-white lg:text-sm md:text-sm text-xs lg:w-1/3 md:w-1/2 w-1/2 text-center">Experience tranquility by the water's edge with our lake tours. Immerse yourself in the peaceful beauty of pristine lakes, surrounded by nature's symphony. Our expert guides will lead you on a journey of relaxation and awe-inspiring landscapes.</p> 
            <button className='bg-[#ffb229] text-sm text-white font-bold px-4 py-3 rounded-md mt-6 hover:bg-white hover:text-[#ffb229]'>Explore More</button>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;


// https://i.ibb.co/bQ7LmhM/tuxpi-com-1701161445.jpg
// https://i.ibb.co/NCG7mtC/tuxpi-com-1701161427.jpg
// https://i.ibb.co/7Y5gPJG/tuxpi-com-1701161410.jpg
