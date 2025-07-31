import { useState } from "react";

export function PrivateCoursesLogos() {
  const [isPaused, setIsPaused] = useState(false);

  const logos = [
    {
      name: "Harvard University",
      src: "https://logos-world.net/wp-content/uploads/2021/09/Harvard-Logo.png",
      alt: "Harvard University"
    },
    {
      name: "MIT",
      src: "https://logos-world.net/wp-content/uploads/2021/09/MIT-Logo.png",
      alt: "Massachusetts Institute of Technology"
    },
    {
      name: "Stanford",
      src: "https://logos-world.net/wp-content/uploads/2021/09/Stanford-Logo.png",
      alt: "Stanford University"
    },
    {
      name: "Oxford",
      src: "https://logos-world.net/wp-content/uploads/2021/09/Oxford-Logo.png",
      alt: "University of Oxford"
    },
    {
      name: "Cambridge",
      src: "https://logos-world.net/wp-content/uploads/2021/09/Cambridge-Logo.png",
      alt: "University of Cambridge"
    },
    {
      name: "Yale",
      src: "https://logos-world.net/wp-content/uploads/2021/09/Yale-Logo.png",
      alt: "Yale University"
    },
    {
      name: "Princeton",
      src: "https://logos-world.net/wp-content/uploads/2021/09/Princeton-Logo.png",
      alt: "Princeton University"
    },
    {
      name: "Columbia",
      src: "https://logos-world.net/wp-content/uploads/2021/09/Columbia-Logo.png",
      alt: "Columbia University"
    }
  ];

  // Duplicate logos for seamless loop
  const duplicatedLogos = [...logos, ...logos];

  return (
    <section id="relume" className="px-[5%] py-12 md:py-16 lg:py-20">
      <div className="container">
        <h1 className="mx-auto mb-6 w-full max-w-lg text-center text-base leading-[1.2] font-bold md:mb-8 md:text-md md:leading-[1.2]">
          Trusted by top educational institutions worldwide
        </h1>
        <div className="relative overflow-hidden pt-4 pb-2 md:pt-2">
          <div 
            className="flex items-center gap-8 animate-scroll"
            style={{
              width: 'fit-content',
              animationPlayState: isPaused ? 'paused' : 'running'
            }}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {duplicatedLogos.map((logo, index) => (
              <div
                key={`${logo.name}-${index}`}
                className="flex items-center justify-center h-12 md:h-14 px-4 transition-transform duration-300 hover:scale-110 hover:z-10 relative"
                style={{ minWidth: '120px' }}
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="max-h-full max-w-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                  onError={(e) => {
                    // Fallback to text if image fails to load
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent) {
                      parent.innerHTML = `<span class="text-lg font-bold text-gray-600">${logo.name}</span>`;
                    }
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
      `}</style>
    </section>
  );
}