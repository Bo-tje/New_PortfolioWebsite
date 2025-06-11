"use client";

import { Carousel } from "./ui/carousel";

export function CarouselDemo() {
    const slideData = [
        {
            title: "Creative Media and Game Technologies",
            description: "August 2023 - Present",
            type: "Bachelor of Science",
            src: "/CMGT.png",
        },
        {
            title: "Alberdingk Thijm College",
            description: "August 2017 - Juli 2022",
            src: "/ATC.png",
            type: "HAVO",
        },
    ];

    return (
        <div className="relative w-full h-full">
            <Carousel slides={slideData} />
        </div>
    );
}