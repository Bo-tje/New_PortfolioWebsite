"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface SlideData {
    title: string;
    description: string;
    type: string;
    src: string;
}

interface CarouselProps {
    slides: SlideData[];
}

export const Carousel = ({ slides }: CarouselProps) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    useEffect(() => {
        // const timer = setInterval(() => {
        //     setDirection(1);
        //     setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
        // }, 5000);

        // return () => clearInterval(timer);
    }, [slides.length]);

    const slideVariants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1
        },
        exit: (direction: number) => ({
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0
        })
    };

    return (
        <div className="relative h-full w-full overflow-hidden rounded-xl">
            <AnimatePresence initial={false} custom={direction}>
                <motion.div
                    key={currentIndex}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                        x: { type: "spring", stiffness: 300, damping: 30 },
                        opacity: { duration: 0.2 }
                    }}
                    className="absolute w-full h-full"
                >
                    <div className="relative w-full h-full">
                        <img
                            src={slides[currentIndex].src}
                            alt={slides[currentIndex].title}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
                            <h3 className="text-white text-xl font-bold">
                                {slides[currentIndex].title}
                            </h3>
                            <p className="text-white/80 text-sm">
                                {slides[currentIndex].type}
                            </p>
                            <p className="text-white/80 text-sm">
                                {slides[currentIndex].description}
                            </p>
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>

            <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-2 z-20">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => {
                            setDirection(index > currentIndex ? 1 : -1);
                            setCurrentIndex(index);
                        }}
                        className={`w-2 h-2 rounded-full transition-all ${
                            index === currentIndex ? "bg-white scale-125" : "bg-white/50"
                        }`}
                    />
                ))}
            </div>
        </div>
    );
};