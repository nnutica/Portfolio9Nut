import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface ActivityCardProps {
    images: string[];
    title: string;
    description: string;
    date: string;
    link?: string;
    autoPlay?: boolean;
    autoPlayInterval?: number;
    }

export const ActivitieCard: React.FC<ActivityCardProps> = ({ 
    images, 
    title, 
    description, 
    date, 
    link, 
    autoPlay = false, 
    autoPlayInterval = 3000 
}) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Auto-play functionality
    useEffect(() => {
        if (autoPlay && images.length > 1) {
            const interval = setInterval(() => {
                setCurrentIndex((prevIndex) => 
                    prevIndex === images.length - 1 ? 0 : prevIndex + 1
                );
            }, autoPlayInterval);

            return () => clearInterval(interval);
        }
    }, [autoPlay, autoPlayInterval, images.length]);

    const goToPrevious = () => {
        setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
    };

    const goToNext = () => {
        setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
    };

    const goToSlide = (index: number) => {
        setCurrentIndex(index);
    };
    return (
    <div className="w-full py-8 flex flex-col justify-center items-center border-b-[1px] border-b-zinc-800">
      {/* Carousel Container */}
      <div className="w-full aspect-video mb-3 overflow-hidden relative cursor-pointer group rounded-lg bg-gray-800">
        {/* Images */}
        <div 
          className="flex transition-transform duration-500 ease-in-out h-full"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div 
              key={index}
              className="w-full h-full flex-shrink-0 relative overflow-hidden"
            >
              <img
                className="w-full h-full object-cover object-center scale-100 group-hover:scale-110 duration-300 transition-transform"
                src={image}
                alt={`${title} - Image ${index + 1}`}
                style={{ 
                  minWidth: '100%',
                  minHeight: '100%',
                  maxWidth: '100%',
                  maxHeight: '100%'
                }}
              />
            </div>
          ))}
        </div>
        
        {/* Overlay */}
        <div className="w-full h-full absolute top-0 left-0 hover:bg-gradient-to-r from-green-600 via-green-600 to-green-200 opacity-20"></div>
        
        {/* Navigation Arrows - Show only if more than 1 image */}
        {images.length > 1 && (
          <>
            <button
              onClick={goToPrevious}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              <FaChevronLeft size={16} />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              <FaChevronRight size={16} />
            </button>
          </>
        )}
        
        {/* Indicators/Dots - Show only if more than 1 image */}
        {images.length > 1 && (
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-designColor' 
                    : 'bg-white/50 hover:bg-white/70'
                }`}
              />
            ))}
          </div>
        )}
      </div>
      
      {/* Content */}
      <span className="text-sm text-designColor border-[1px] border-designColor px-2">
          {date}
        </span>
      <h3 className="font-titleFont text-mdl font-semibold text-[#ccc] py-1 mt-1">
        {title}
      </h3>
        <p className="text-sm text-gray-400 mt-1">{description}</p>
      
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-base text-designColor border-[1px] border-designColor px-2 hover:underline mt-3"
        >
          Click here
        </a>
      )}
    </div>
  );
}