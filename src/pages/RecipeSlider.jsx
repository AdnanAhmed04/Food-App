import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const categories = [
    { name: 'Burgers & S...', recipes: 101, icon: '🍔' },
    { name: 'Kababs', recipes: 151, icon: '🍢' },
    { name: 'Pasta', recipes: 97, icon: '🍝' },
    { name: 'Everyday Cooking', recipes: 1296, icon: '🍽️' },
    { name: 'Sandwiches', recipes: 69, icon: '🥪' }
];

const RecipeSlider = () => {
    return (
        <div className="w-full text-center">
            <h2 className="text-2xl font-semibold">More <span className="text-yellow-500">Categories</span></h2>
            <Swiper
                modules={[Navigation]}
                spaceBetween={20}
                slidesPerView={6}
                navigation
                breakpoints={{
                    640: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }}
                className="mt-6"
            >
                {categories.map((category, index) => (
                    <SwiperSlide key={index}>
                        <div className="p-4 bg-white shadow-md rounded-xl flex flex-col items-center">
                            <div className="w-16 h-16 flex items-center justify-center bg-yellow-400 rounded-full text-3xl">
                                {category.icon}
                            </div>
                            <p className="mt-3 font-semibold">{category.name}</p>
                            <p className="text-yellow-500 font-medium">{category.recipes} Recipes</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default RecipeSlider;
