import React from "react";
import { Carousel } from "antd";

const slides = [
  {
    id: 1,
    title: "Learn Web Development",
    description:
      "Build modern websites with React, Tailwind, and powerful tools. Start your journey today and become a frontend master.",
    buttonText: "Start Learning",
    buttonClass: "btn btn-primary",
    img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1600&q=80",
    overlay: "bg-black/50",
  },
  {
    id: 2,
    title: "Design Stunning UI",
    description:
      "Create beautiful, responsive user interfaces with Tailwind CSS and DaisyUI. Bring your ideas to life with style.",
    buttonText: "Explore Designs",
    buttonClass: "btn btn-secondary",
    img: "https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?auto=format&fit=crop&w=1600&q=80",
    overlay: "bg-black/60",
  },
  {
    id: 3,
    title: "Work Smarter",
    description:
      "Use the best tools like Git, GitHub, and modern frameworks to collaborate and work efficiently on projects.",
    buttonText: "Get Started",
    buttonClass: "btn btn-accent",
    img: "https://images.unsplash.com/photo-1504691342899-9d8d2c1d1e5c?auto=format&fit=crop&w=1600&q=80",
    overlay: "bg-black/50",
  },
];

const Hero1 = () => (
  <Carousel autoplay autoplaySpeed={5000} dots>
    {slides.map((slide) => (
      <div key={slide.id}>
        <div
          className="hero min-h-[92vh]"
          style={{
            backgroundImage: `url(${slide.img})`,
          }}
        >
          <div className={`hero-overlay ${slide.overlay}`}></div>
          <div className="hero-content text-neutral-content text-center">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">{slide.title}</h1>
              <p className="mb-5">{slide.description}</p>
              <button className={slide.buttonClass}>{slide.buttonText}</button>
            </div>
          </div>
        </div>
      </div>
    ))}
  </Carousel>
);

export default Hero1;
