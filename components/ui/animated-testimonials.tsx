"use client";

import { useEffect, useRef, useState } from "react";

// Define the types for the props and testimonial data
interface Testimonial {
  quote: string;
  name: string;
  designation: string;
  src: string;
}

interface AnimatedTestimonialsProps {
  testimonials: Testimonial[];
}

export default function AnimatedTestimonials({ testimonials }: AnimatedTestimonialsProps) {
  const containerRef = useRef<HTMLDivElement | null>(null); // Correct type for the containerRef
  const [index, setIndex] = useState<number>(0); // Ensure the state is of type number
  const scrollSpeed = 2;
  const testimonialsLength = testimonials.length;

  useEffect(() => {
    const scrollContainer = containerRef.current;
    let scrollInterval: NodeJS.Timeout; // Type the interval for TypeScript

    const startScroll = () => {
      scrollInterval = setInterval(() => {
        if (!scrollContainer) return; // Safeguard against undefined scrollContainer
        if (
          scrollContainer.scrollLeft + scrollContainer.offsetWidth >= scrollContainer.scrollWidth
        ) {
          // Reset scroll position back to the beginning
          scrollContainer.scrollLeft = 0;
          // Move to the next "testimonial" by updating the index
          setIndex((prevIndex) => (prevIndex + 1) % testimonialsLength);
        } else {
          // Continue scrolling
          scrollContainer.scrollLeft += scrollSpeed;
        }
      }, 20);
    };

    startScroll();

    return () => clearInterval(scrollInterval); // Clean up the interval on unmount
  }, [testimonialsLength]);

  return (
    <div className="overflow-hidden relative w-full" ref={containerRef}>
      <div className="flex w-max">
        {[...testimonials, ...testimonials].map((testimonial, idx) => (
          <div
            key={idx}
            className="flex-shrink-0 min-w-[350px] text-center p-6" // Adjusted the minimum width
          >
            <div className="testimonial-card group relative overflow-hidden bg-white shadow-xl rounded-lg transition-all duration-500 ease-in-out transform hover:scale-105 hover:shadow-2xl">
              {/* Card with Image as Background */}
              <div
                className="testimonial-image w-full h-[400px] bg-cover bg-center transition-all duration-300 ease-in-out group-hover:scale-110 group-hover:opacity-80" // Adjusted height of the card
                style={{ backgroundImage: `url(${testimonial.src})` }}
              />
              
              {/* Card Content */}
              <div className="testimonial-content absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 text-white p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                <p className="text-2xl font-semibold transform group-hover:translate-y-4 transition-transform duration-300 ease-in-out">
                  {testimonial.name}
                </p>
                <p className="text-md transform group-hover:translate-y-2 transition-transform duration-300 ease-in-out">
                  {testimonial.designation}
                </p>
                
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
