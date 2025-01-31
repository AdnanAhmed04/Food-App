import React, { useState } from "react";
import Navbar from "../Navbar";
import { FaSearch } from "react-icons/fa";
import AutoScrollingSlider from "./AutoScrollingSlider";

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
                        <FaSearch className="text-gray-500 text-lg cursor-pointer" />
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
                            <p className="text-gray-700">{food.para}</p>
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
            <div>
                <div className="container mx-auto px-4 md:w-[90%]">
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
                <div className="bg-gray-200">
                    <h1>Our Happy Cooking Partners</h1>
                    {/* <div className="flex justify-center gap-5 w-[90%] overflow-scroll">
                        <img src="https://www.foodfusion.com/wp-content/uploads/2017/07/Dawn-Foods-1.png" alt="" srcset="" />
                        <img src="https://www.foodfusion.com/wp-content/uploads/2017/07/Meat-One-Meat-Experts-Logo-1.png" alt="" srcset="" />
                        <img src="https://www.foodfusion.com/wp-content/uploads/2017/07/sufi-cooking-oil-1.png" alt="" srcset="" />
                        <img src="https://www.foodfusion.com/wp-content/uploads/2017/07/Kenwood-Logo-1.png" alt="" srcset="" />
                        <img src="https://www.foodfusion.com/wp-content/uploads/2017/07/Vim-Logo.png" alt="" srcset="" />
                        <img src="https://www.foodfusion.com/wp-content/uploads/2017/07/Rooh-Afza-Logo-1.png" alt="" srcset="" />
                        <img src="https://www.foodfusion.com/wp-content/uploads/2017/07/SHAN-logo-final-1.png" alt="" srcset="" />
                        <img src="data:image/png;base64,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" alt="" srcset="" />
                        <img src="data:image/png;base64,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" alt="" srcset="" />
                    



                    </div> */}
                    <AutoScrollingSlider/>
                </div>
            </div>
        </div>
    );
};

export default Landing;
