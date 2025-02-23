'use client';

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
    const [isTransitioning, setIsTransitioning] = useState(false);

    // Duplicamos las imágenes para permitir el loop infinito
    const extendedImagesUrls = [...imagesUrls, ...imagesUrls]; // Duplicamos el array de imágenes

    const nextImage = () => {
        // Si estamos en la última imagen, esperamos hasta que se complete la transición
        if (!isTransitioning && currentIndex === imagesUrls.length) {
            setIsTransitioning(true); // Deshabilitar transiciones por un momento
            setCurrentIndex(0); // Teletransportamos al inicio
        } else {
            setCurrentIndex((prevIndex) =>
                prevIndex === extendedImagesUrls.length - 1 ? 0 : prevIndex + 1
            );
        }
    };

    useEffect(() => {
        const interval = setInterval(() => {
            nextImage();
        }, (animationDelay + animationDuration) *
            (isTransitioning ? 3 : 1000)
        );

        return () => clearInterval(interval);
    }, [currentIndex, animationDelay]);

    const transition = useSpring({
        transform: `translateX(-${(100 / imagesToShow) * currentIndex}%)`,
        config: {
            duration: isTransitioning?0: animationDuration * 1000,
        },
        onRest: () => {
            if (currentIndex === 0) {
                setIsTransitioning(false); // Habilitamos nuevamente la transición
            }
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
                style={{...transition}}
            >
                {extendedImagesUrls.map((image, index) => (
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
                            className="w-full h-full object-cover"
                        />
                    </div>
                ))}
            </animated.div>
        </div>
    );
};

export default ImageCarousel;
