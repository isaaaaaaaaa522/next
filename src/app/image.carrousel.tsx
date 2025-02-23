'use client';

import { useEffect, useState } from 'react';
import { useSpring, animated } from 'react-spring';

const ImageCarousel = ({
                           imagesUrls = ['https://via.placeholder.com/150'],
                           imagesToShow = 1,
                           containerWidth = '100%',
                           containerHeight = '300px',
                           padding = '10px',
                           animationDelay = 3,
                           animationDuration = 1,
                       }) => {
    const [currentIndex, setCurrentIndex] = useState(-1);
    const [isTransitioning, setIsTransitioning] = useState(true);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

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
        let actualDelay = (animationDelay + animationDuration) * (isTransitioning ? 1 : 1000)
        if(actualDelay < 100) actualDelay = 20;
        const interval = setInterval(() => {
            nextImage();
        }, actualDelay);

        return () => clearInterval(interval);
    }, [currentIndex, animationDelay]);

    // Listener para el resize de la ventana
    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Calcular el número de imágenes a mostrar según el tamaño de la ventana
    const calculateImagesToShow = () => {
        if (windowWidth < 650) {
            return 1;
        } else if (windowWidth < 1000) {
            return 2;
        } else if (windowWidth < 1300) {
            return 3;
        } else if (windowWidth < 1600) {
            return 4;
        } else {
            return imagesToShow;
        }
    };

    const transition = useSpring({
        transform: `translateX(-${(100 / calculateImagesToShow()) * currentIndex}%)`,
        config: {
            duration: isTransitioning ? 0 : animationDuration * 1000,
        },
        onRest: () => {
            if (currentIndex < imagesUrls.length - 1) {
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
                            width: `${100 / calculateImagesToShow()}%`,
                            height: containerHeight,
                            padding: padding
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