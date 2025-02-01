import React, { useState } from "react";
import Navbar from "../Navbar";
// import { FaSearch } from "react-icons/fa";
import AutoScrollingSlider from "./AutoScrollingSlider";
import RecipeSlider from "./RecipeSlider";

const likedFoods = [
    {
        id: 1,
        image: "https://www.foodfusion.com/wp-content/uploads/2024/12/Choley-Puri-Recipe-by-Food-Fusion-2.jpg?v=1734500895",
        title: "Halwaa Puri",
        large: true,
        para: "Its time to upgrade our signature combination of Halwaa, channa and poori. You know that feeling when the puri is perfectly fluffy, and the choley/channay are just the right amount of spicy? that’s pure joy on a plate."
    },
    {
        id: 2,
        image: "https://www.foodfusion.com/wp-content/uploads/2024/10/Soup-Dumplings-Recipe-by-Food-Fusion-1-300x225.jpg?v=1728280176",
        title: "Soupy Dumplings",
    },
    {
        id: 3,
        image: "https://www.foodfusion.com/wp-content/uploads/2024/12/4-1-300x225.jpg?v=1737109406",
        title: "Pizza",
    },
    {
        id: 4,
        image: "https://www.foodfusion.com/wp-content/uploads/2024/11/Grab-1-yt-300x225.jpg?v=1736834929",
        title: "Home Made Golden Milk Premix",
    },
    {
        id: 5,
        image: "https://www.foodfusion.com/wp-content/uploads/2024/12/YT-04-300x225.jpg?v=1736501439",
        title: "Creamy Fettuccine Alfredo",
    },
];

const likedFoods2 = [
    {
        id: 1,
        image: "https://www.foodfusion.com/wp-content/uploads/2024/12/YT-01-1-300x225.jpg?v=1736245426",
        title: "Chicken Briyani",
        large: true,
        para: "Its time to upgrade our signature combination of channa and poori...",
    },
    {
        id: 2,
        image: "https://www.foodfusion.com/wp-content/uploads/2024/11/YT_06-300x225.jpg?v=1736246893",
        title: "Soupy Dumplings",
    },
    {
        id: 3,
        image: "https://www.foodfusion.com/wp-content/uploads/2024/12/2-300x225.jpg?v=1736331318",
        title: "Boneless Fish",
    },
    {
        id: 4,
        image: "https://www.foodfusion.com/wp-content/uploads/2025/01/Gajar-ka-Halwa-in-Microwave-Recipe-by-Food-Fusion-4-300x225.jpg?v=1735879397",
        title: "Zardaa /Sweet Rice",
    },
    {
        id: 5,
        image: "https://www.foodfusion.com/wp-content/uploads/2019/11/Hara-masala-Fish-Curry-Recipe-by-food-fusion-5-300x225.jpg?v=1587762908",
        title: "Chicken Karahi ",
    },
    {
        id: 6,
        image: "https://www.foodfusion.com/wp-content/uploads/2021/08/YT-GRAB-1-300x225.jpg?v=1629803781",
        title: "Reshmi Handi",
    },

    {
        id: 7,
        image: "https://www.foodfusion.com/wp-content/uploads/2023/07/yt12-300x225.jpg?v=1688644833",
        title: "Ice Cream / Falooda",
    },
    {
        id: 8,
        image: "https://www.foodfusion.com/wp-content/uploads/2017/05/ID-R00096-1-300x225.jpg?v=1587766707",
        title: "Malai Boti",
    },
];
const likedFoods3 = [
    {
        id: 1,
        image: "https://www.foodfusion.com/wp-content/uploads/2023/11/GRAB-04-YT-1-300x225.jpg?v=1702029220",
        title: "Fried Rice",
        large: true,
        para: "Its time to upgrade our signature combination of channa and poori...",
    },
    {
        id: 2,
        image: "https://www.foodfusion.com/wp-content/uploads/2023/12/YT-Grab-copy-300x225.jpg?v=1710409034",
        title: "Break Fast Egg Patty",
    },
    {
        id: 3,
        image: "https://www.foodfusion.com/wp-content/uploads/2021/06/Mango-tart-Recipe-by-Food-fusion-5-300x225.jpg?v=1623391324",
        title: "Mango Tart",
    },
    {
        id: 4,
        image: "https://www.foodfusion.com/wp-content/uploads/2020/11/Gur-papri-Recipe-by-Food-fusion-2-300x225.jpg?v=1605788019",
        title: "Chocalate Cake",
    },
    {
        id: 5,
        image: "https://www.foodfusion.com/wp-content/uploads/2021/07/ID-R01746-Dhaga-Kabab.00_00_10_40.Still003-300x225.jpg?v=1625654664",
        title: "Dhaga Kabab",
    },
    {
        id: 6,
        image: "https://www.foodfusion.com/wp-content/uploads/2022/01/YT-grab-4-300x225.jpg?v=1643170952",
        title: "Chicken Cheese Pasta Roll",
    },

    {
        id: 7,
        image: "https://www.foodfusion.com/wp-content/uploads/2019/03/Instant-Kheer-Mix-Recipe-by-Food-fusion-5-300x225.jpg?v=1587763808",
        title: "Instant Kheer Mix",
    },
    {
        id: 8,
        image: "https://www.foodfusion.com/wp-content/uploads/2018/06/Qorma-Recipe-by-Food-fusion-4-300x225.jpg?v=1587764833",
        title: "Chicken Degi Korma",
    },
];

const Landing = () => {
    const [showMore, setShowMore] = useState(false);

    return (
        <div>
            <Navbar />


            <div className="relative w-full h-[300px] md:h-[500px]">
                <img
                    className="w-full h-full object-cover"
                    src="https://www.foodfusion.com/wp-content/themes/food-fusion/assets/img/hcol-banner.jpg"
                    alt="Food Banner"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center  bg-opacity-50 p-4">
                    <h1 className="text-[30px] md:text-[45px] font-semibold leading-snug">
                        We are Here to Make <br />
                        <span className=" text-[32px] md:text-[55px] font-bold">Cooking Fun Again</span>
                    </h1>

                    {/* Search Bar */}
                    <div className="flex items-center mt-4 bg-white rounded-lg px-3 py-2 border border-gray-400 w-[80%] md:w-[500px]">
                        <input
                            type="search"
                            placeholder="Aaj kia Khana hai?"
                            className="px-2 py-1 w-full outline-none text-black"
                        />
                        {/* <FaSearch className="text-gray-500 text-lg cursor-pointer" /> */}
                    </div>

                    <button className="bg-yellow-500 text-white px-6 py-2 mt-4 rounded-md hover:bg-yellow-400 transition">
                        Order Now
                    </button>
                </div>
            </div>


            <div className="container mx-auto py-10 px-4 md:w-[90%] ">
                <h1 className="text-center text-2xl md:text-[40px] font-semibold mb-6">
                    Most <span className="text-yellow-500">Liked Foods</span>
                </h1>


                <div className="flex flex-col lg:flex-row gap-8">

                    {likedFoods.filter(food => food.large).map(food => (
                        <div key={food.id} className="lg:w-[50%]">
                            <img className="rounded-lg w-full h-auto" src={food.image} alt={food.title} />
                            <h2 className="text-xl font-semibold mt-2">{food.title}</h2>
                            <p className="">{food.para}</p>
                        </div>
                    ))}


                    <div className="grid grid-cols-2 md:grid-cols-2 gap-4 lg:w-[50%]">
                        {likedFoods
                            .filter(food => !food.large)
                            .slice(0, 4)
                            .map(food => (
                                <div key={food.id} className="rounded-lg">
                                    <img className="rounded-lg w-[90%] h-auto" src={food.image} alt={food.title} />
                                    <p className="text-md font-semibold">{food.title}</p>
                                </div>
                            ))}
                    </div>
                </div>
            </div>


            <div className="container mx-auto px-4 md:w-[90%]">
                <h2 className="text-center text-2xl md:text-[40px] font-semibold mb-4">Most <span className="text-yellow-500">Viewed Foods</span></h2>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {likedFoods2.slice(0, showMore ? likedFoods2.length : 4).map(food => (
                        <div key={food.id} className="border border-gray-400 p-2 rounded-lg bg-gray-50 shadow-md">
                            <img className="rounded-lg w-full h-auto" src={food.image} alt={food.title} />
                            <p className="text-center font-semibold mt-2">{food.title}</p>
                        </div>
                    ))}
                </div>

                <div className="flex justify-center mt-6">
                    <button
                        onClick={() => setShowMore(prev => !prev)}
                        className="bg-yellow-500 text-white px-6 py-2 rounded-md hover:bg-yellow-400 transition"
                    >
                        {showMore ? "Show Less" : "Load More"}
                    </button>
                </div>
            </div>
            <RecipeSlider/>

            <div>
                <div className="container mx-auto px-4 md:w-[90%] m-12 md:mt-16">
                    <h2 className="text-center text-2xl md:text-[40px] font-semibold mb-4">Trending <span className="text-yellow-500">Food Fusion</span></h2>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {likedFoods3.slice(0, showMore ? likedFoods3.length : 4).map(food => (
                            <div key={food.id} className="border border-gray-400 p-2 rounded-lg bg-gray-50 shadow-md">
                                <img className="rounded-lg w-full h-auto" src={food.image} alt={food.title} />
                                <p className="text-center font-semibold mt-2">{food.title}</p>
                            </div>
                        ))}
                    </div>

                    <div className="flex justify-center mt-6">
                        <button
                            onClick={() => setShowMore(prev => !prev)}
                            className="bg-yellow-500 text-white px-6 py-2 rounded-md hover:bg-yellow-400 transition"
                        >
                            {showMore ? "Show Less" : "Load More"}
                        </button>
                    </div>
                </div>
                    
                    <AutoScrollingSlider/>
            </div>
        </div>
    );
};

export default Landing;
