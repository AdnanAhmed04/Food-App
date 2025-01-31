export default function AutoScrollingSlider() {
    return (
      <div className="bg-gray-200 py-5 overflow-hidden">
        <h1 className="text-center text-xl font-semibold mb-4">
          Our Happy Cooking Partners
        </h1>
  
        <div className="relative w-full overflow-hidden">
          {/* Infinite Scrolling Container */}
          <div className="flex gap-5 w-max animate-scroll">
            {/* Brand Logos - Duplicated for Smooth Loop */}
            {[
              "https://www.foodfusion.com/wp-content/uploads/2017/07/Dawn-Foods-1.png",
              "https://www.foodfusion.com/wp-content/uploads/2017/07/Meat-One-Meat-Experts-Logo-1.png",
              "https://www.foodfusion.com/wp-content/uploads/2017/07/sufi-cooking-oil-1.png",
              "https://www.foodfusion.com/wp-content/uploads/2017/07/Kenwood-Logo-1.png",
              "https://www.foodfusion.com/wp-content/uploads/2017/07/Vim-Logo.png",
              "https://www.foodfusion.com/wp-content/uploads/2017/07/Rooh-Afza-Logo-1.png",
              "https://www.foodfusion.com/wp-content/uploads/2017/07/SHAN-logo-final-1.png",
            ].map((src, index) => (
              <img
                key={index}
                src={src}
                alt="Brand Logo"
                className="h-20 w-auto object-contain"
              />
            ))}
  
            {/* Duplicate images to make the effect seamless */}
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
              "data:image/png;base64,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"
            
            ].map((src, index) => (
              <img
                key={index + 7}
                src={src}
                alt="Brand Logo"
                className="h-20 w-auto object-contain"
              />
            ))}
          </div>
        </div>
  
        {/* Tailwind CSS Keyframes */}
        <style>
          {`
            @keyframes scroll {
              from { transform: translateX(0); }
              to { transform: translateX(-50%); }
            }
            .animate-scroll {
              display: flex;
              flex-wrap: nowrap;
              animation: scroll 12s linear infinite;
              width: max-content; /* Ensures smooth transition without resizing */
            }
          `}
        </style>
      </div>
    );
  }
  