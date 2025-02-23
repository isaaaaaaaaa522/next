// components/ImageCarousel.js
'use client'

import { useEffect, useState } from 'react';
import { useSpring, animated } from 'react-spring';

const ImageCarousel = ({
                           imagesUrls = ['https://via.placeholder.com/150'],
                           imagesToShow = 1,
                           containerWidth = '100%',
                           containerHeight = '300px',
                           padding = '10px',
                           animationDelay = 3, // en segundos
                           animationDuration = 1, // en segundos
                       }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextImage = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === imagesUrls.length - 1 ? 0 : prevIndex + 1
        );
    };

    useEffect(() => {
        const interval = setInterval(() => {
            nextImage();
        }, animationDelay * 1000);

        return () => clearInterval(interval);
    }, [currentIndex, animationDelay]);

    const transition = useSpring({
        transform: `translateX(-${(100 / imagesToShow) * currentIndex}%)`,
        config: {
            duration: animationDuration * 1000,
        },
    });

    return (
        <div
            className="relative overflow-hidden"
            style={{
                width: containerWidth,
                height: containerHeight,
            }}
        >
            <animated.div
                className="flex"
                style={{
                    ...transition,
                    gap: `0 ${padding}`,
                }}
            >
                {imagesUrls.map((image: string, index: number) => (
                    <div
                        key={index}
                        className="flex-shrink-0"
                        style={{
                            width: `${100 / imagesToShow}%`,
                        }}
                    >
                        <img
                            src={image}
                            alt={`carousel-image-${index}`}
                            style={{ marginLeft: padding}}
                            className="w-full h-full object-cover"
                        />
                    </div>
                ))}
            </animated.div>
        </div>
    );
};

export default ImageCarousel;