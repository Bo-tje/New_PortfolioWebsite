'use client'

import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "./background-gradient-animation";
import { GlobeDemo } from "./GridGlobe";
import { motion } from "framer-motion";
import dynamic from 'next/dynamic';
import { ExpandableCardDemo } from "@/components/expandable-cards";


const LottieWrapper = dynamic(() => import('@/components/LottieWrapper'), {
  ssr: false,
});

import { useState } from "react";
import animationData from '@/data/Confetti.json'
import { MagicButton } from "./MagicButton";
import { IoCopyOutline } from "react-icons/io5";
import {CarouselDemo} from "@/components/hobbies";
import {EducationAndWork} from "@/components/EducationAndWork";
import {TextHoverEffectDemo} from "@/components/TextHoverEffect";


export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
       "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  id,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  id: number,
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const handleCopy = () => {
    navigator.clipboard.writeText('Bovanderhulst@gmail.com');
    setCopied(true);
  }
 const [copied , setCopied] = useState(false);
  return (
    <div
        className={cn(
          "group/bento shadow-input row-span-1 overflow-hidden flex flex-col justify-between space-y-4 relative rounded-3xl transition duration-200 hover:shadow-xl border border-white[0.1] dark:shadow-none",
          className,
        )}
        style={{
          background: 'rgb(2,0,36)',
          backgroundColor:
          'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,55,121,1) 35%, rgba(0,251,255,0.9567226548822654) 100%)',
        }}
      >
        <div className={`${id === 6 && 'flex justify-center'} h-full`}>
          <div className="absolute w-full h-full ">
            {img && (
              <img
              src={img}
              alt={img}
              className={cn(imgClassName, 'object-cover object-center')}
              />
            )}
          </div>
          <div className={`absolute right-0 -bottom-5 
            ${id === 10 && 'w-full opacity-80'}`}>
              {spareImg && (
                <img
                src={spareImg}
                alt={spareImg}
                className={'object-cover, object-center w-full h-full'}
                />
              )}
          </div>
          {id === 6 && (
            <BackgroundGradientAnimation>
              {/* <div className="absolute z-50 flex items-center justify-center
              text-white font-bold"/> */}
            </BackgroundGradientAnimation>
          )}


          {id === 7 && (
            <div className="absolute flex items-center z-10">
            <ExpandableCardDemo>

            </ExpandableCardDemo>
            </div>
          )}

            {id === 4 &&(
                <div className="mt-4 h-[300px]">
                    <CarouselDemo />
                </div>

            )}

            {id === 5 &&(
                <div className="mt-4 h-[300px]">
                   <EducationAndWork/>
                </div>

            )}

            {id === 11 && (
                <div className="absolute z-10 flex  justify-center items-center w-full h-full lg:rotate-90 -top-35 -bottom-3">
                            <TextHoverEffectDemo />
                </div>
            )}



          <div className={cn(
            titleClassName, 'group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10'
           )}>
            <div className="font-sans font-extralight
            text-[#c1c2d3] text-sm md:text-xs lg:text-base z-10">
              {description}
            </div>
            <div className="font-sans font-bold text-lg
            lg:text-3xl max-w-96 z-10">
            {title}
            </div>

          {id === 2 && <GlobeDemo />}
          {id === 3 && (
            <div className=" flex gap-1 lg:gap-5 w-fit
            absolute -right-3 lg:-right-2">
              <div className="flex flex-col gap-3
              lg:gap-8">
                {['Unreal engine','Blueprints','Mechanic design'].map
                ((item) => (
                  <span key={item} className="py-2 lg:py-4
                  lg:px-3 px-3 text-xs lg:text-base
                  opacity-50 lg:opacity-100 rounded-lg
                  text-center bg-[#10132E]">
                    {item}
                  </span>
                ))}
                <span className="py-4 px-3 rounded-lg
                text-center bg-[#10132E]"/>
              </div>
              <div className="flex flex-col gap-3
              lg:gap-8">
                <span className="py-4 px-3 rounded-lg
                text-center bg-[#10132E]"/>
                {['Figma','Unity', 'C#'].map
                ((item) => (
                  <span key={item} className="py-2 lg:py-4
                  lg:px-3 px-3 text-xs lg:text-base
                  opacity-50 lg:opacity-100 rounded-lg
                  text-center bg-[#10132E]">
                    {item}
                  </span>
                ))}

              </div>
            </div>
          )}

              {id === 6 && (
            <div className=" mt-5 relative">
              <div className={`absolute -bottom-5 right-0`}
              >
                <LottieWrapper copied={copied} />
              </div>

              <MagicButton
              title={copied ? 'Email copied' : 'Copy my email'}
              icon={<IoCopyOutline/>}
              position="left"
              otherClasses="!bg-[#161a31]"
              handleClick={handleCopy}
                />
            </div>
          )}
        </div>
      </div>
    </div>

  );
};