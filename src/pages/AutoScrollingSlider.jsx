export default function AutoScrollingSlider() {
    return (
      <div className="bg-gray-200 py-5 md:mt-12 overflow-hidden ">
        <h2 className="text-center text-2xl md:text-[40px] font-semibold mb-4">Our Happy <span className="text-yellow-500">Cooking Partners</span></h2>

        <div className="relative m-auto overflow-hidden md:w-[72%]">
          <div className="flex gap-5 px-6 animate-scroll w-fit">
            {[
              "https://www.foodfusion.com/wp-content/uploads/2017/07/Dawn-Foods-1.png",
              "https://www.foodfusion.com/wp-content/uploads/2017/07/Meat-One-Meat-Experts-Logo-1.png",
              "https://www.foodfusion.com/wp-content/uploads/2017/07/sufi-cooking-oil-1.png",
              "https://www.foodfusion.com/wp-content/uploads/2017/07/Kenwood-Logo-1.png",
              "https://www.foodfusion.com/wp-content/uploads/2017/07/Vim-Logo.png",
              "https://www.foodfusion.com/wp-content/uploads/2017/07/Rooh-Afza-Logo-1.png",
              "https://www.foodfusion.com/wp-content/uploads/2017/07/SHAN-logo-final-1.png",
              "https://cdn.brandfetch.io/idoVdZpthO/w/145/h/145/theme/dark/logo.png?c=1dxbfHSJFAPEGdCLU4o5B",
              "https://crystalpng.com/wp-content/uploads/2022/06/national-foods-logo.png",
            ].map((src, index) => (
              <img key={index} src={src} alt="Brand Logo" className="h-24 w-24 object-contain" />
            ))}
  
            {[
              "https://www.foodfusion.com/wp-content/uploads/2017/07/Dawn-Foods-1.png",
              "https://www.foodfusion.com/wp-content/uploads/2017/07/Meat-One-Meat-Experts-Logo-1.png",
              "https://www.foodfusion.com/wp-content/uploads/2017/07/sufi-cooking-oil-1.png",
              "https://www.foodfusion.com/wp-content/uploads/2017/07/Kenwood-Logo-1.png",
              "https://www.foodfusion.com/wp-content/uploads/2017/07/Vim-Logo.png",
              "https://www.foodfusion.com/wp-content/uploads/2017/07/Rooh-Afza-Logo-1.png",
              "https://www.foodfusion.com/wp-content/uploads/2017/07/SHAN-logo-final-1.png",
              "https://cdn.brandfetch.io/idoVdZpthO/w/145/h/145/theme/dark/logo.png?c=1dxbfHSJFAPEGdCLU4o5B",
              "https://crystalpng.com/wp-content/uploads/2022/06/national-foods-logo.png",
            ].map((src, index) => (
              <img key={index + 7} src={src} alt="Brand Logo" className="h-24 w-24 object-contain" />
            ))}
          </div>
        </div>
  

        <style>
          {`
            @keyframes scroll {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .animate-scroll {
              display: flex;
              flex-wrap: nowrap;
              animation: scroll 12s linear infinite;
              width: max-content;
            }
          `}
        </style>
      </div>
    );
  }
  