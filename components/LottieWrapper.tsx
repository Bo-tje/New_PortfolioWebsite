'use client';

import Lottie from 'react-lottie';
import animationData from '@/data/Confetti.json';

export default function LottieWrapper({ copied }: { copied: boolean }) {
  return (
    <Lottie
      options={{
        loop: copied,
        autoplay: copied,
        animationData,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice',
        },
      }}
    />
  );
}
