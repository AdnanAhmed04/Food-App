import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";

import { useRef } from 'react';

const categories = [
    { name: 'Ramazan', recipes: 715, icon: 'https://www.foodfusion.com/wp-content/uploads/2018/05/ramzan-150x150.png' },
    { name: 'Appetizers & Snacks', recipes: 326, icon: 'https://www.foodfusion.com/wp-content/uploads/2018/05/snacks-150x150.png' },
    { name: 'Breakfast', recipes: 185, icon: 'https://www.foodfusion.com/wp-content/uploads/2018/05/breakfast-150x150.png' },
    { name: 'Desserts', recipes: 422, icon: 'https://www.foodfusion.com/wp-content/uploads/2018/05/desserts-150x150.png' },
    { name: 'Biryani & Pulao', recipes: 101, icon: 'https://www.foodfusion.com/wp-content/uploads/2018/05/biryani-150x150.png' },
    { name: 'Kababs', recipes: 151, icon: 'https://www.foodfusion.com/wp-content/uploads/2018/05/snacks-150x150.png' },
    { name: 'Pasta', recipes: 97, icon: 'https://www.foodfusion.com/wp-content/uploads/2018/05/pasta-150x150.png' },
    { name: 'Every Day Cooking', recipes: 1296, icon: 'https://www.foodfusion.com/wp-content/uploads/2018/05/everyday_cooking-150x150.png' },
    { name: 'Sandwich', recipes: 69, icon: 'https://www.foodfusion.com/wp-content/uploads/2018/05/burgersandwich-150x150.png' },
];

const RecipeSlider = () => {
    const swiperRef = useRef(null);

    return (
        <div className="w-full text-center mt-16 bg-gray-50 py-10 px-4 md:px-6 lg:px-12 relative">
            <h2 className="text-2xl md:text-[40px] font-semibold mb-6">
                More <span className="text-yellow-500">Categories</span>
            </h2>


            <div className="relative">

                <button 
                    className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white shadow-lg p-3 rounded-full z-10 hover:bg-yellow-400 transition-all"
                    onClick={() => swiperRef.current?.slidePrev()}
                >
                    <FaAngleLeft className="text-gray-700 text-xl md:text-2xl" />
                </button>

                <Swiper
                    modules={[Navigation]}
                    spaceBetween={20}
                    slidesPerView={1} // Default for smallest screens
                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                    breakpoints={{
                        480: { slidesPerView: 2 },  // Small mobile screens: 2 slides
                        640: { slidesPerView: 2 },  // Mobile: 2 slides
                        768: { slidesPerView: 3 },  // Tablets: 3 slides
                        1024: { slidesPerView: 4 }, // Medium screens: 4 slides
                        1280: { slidesPerView: 5 }, // Large screens: 5 slides
                    }}
                    className="relative"
                >
                    {categories.map((category, index) => (
                        <SwiperSlide key={index} className="w-auto">
                            <div className="p-6 border border-gray-200 shadow-lg rounded-xl flex flex-col items-center ">
                                <div className="w-28 h-30 flex items-center justify-center rounded-full shadow-xl ">
                                    <img src={category.icon} alt={category.name} className="w-32 h-28 object-cover" />
                                </div>
                                <p className="mt-4 font-semibold  text-lg sm:text-xl">{category.name}</p>
                                <p className="text-yellow-500 font-medium text-md">{category.recipes} Recipes</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                <button 
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white shadow-lg p-3 rounded-full z-10 hover:bg-yellow-500 transition-all"
                    onClick={() => swiperRef.current?.slideNext()}
                >
                    <FaAngleRight className="text-gray-700 text-xl md:text-2xl" />
                </button>
            </div>
        </div>
    );
};

export default RecipeSlider;
