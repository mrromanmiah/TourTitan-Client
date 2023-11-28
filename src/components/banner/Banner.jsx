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
          <div className="bg-[url(https://i.ibb.co/6Ht2bt8/cover1.jpg)] bg-cover h-screen flex items-center justify-center flex-col">
            <h1 className="text-2xl text-white font-bold text-center mb-4">Roman</h1>
            <p className="text-white font-bold text-center">roman</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[url(https://i.ibb.co/Fw9dkxV/cover4.jpg)] bg-cover h-screen flex items-center justify-center flex-col">
            <h1 className="text-2xl text-white font-bold text-center mb-4">Roman</h1>
            <p className="text-white font-bold text-center">roman</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[url(https://i.ibb.co/PNc1NCr/cover3.jpg)] bg-cover h-screen flex items-center justify-center flex-col">
            <h1 className="text-2xl text-white font-bold text-center mb-4">Roman</h1>
            <p className="text-white font-bold text-center">roman</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
