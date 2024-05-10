import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';

const ImageSlider = ({ images }) => {
    const IMAGE_CHANGE_INTERVAL = 10000;
    const FADE_OPACITY = 0.09;
    const FADE_TRANSITION_TIME = 500;

    const [currentImageIndex, setCurrentImageIndex] = useState(() => Math.floor(Math.random() * images.length));
    const [opacity, setOpacity] = useState(1);
    const intervalRef = useRef(null);

    useEffect(() => {
        startInterval();

        return () => clearInterval(intervalRef.current);
    }, [images]);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setOpacity(FADE_OPACITY);
            setTimeout(() => {
                setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
                setOpacity(1);
            }, FADE_TRANSITION_TIME);
        }, IMAGE_CHANGE_INTERVAL);

        return () => clearTimeout(timeout);
    }, [currentImageIndex]);

    const startInterval = () => {
        clearInterval(intervalRef.current);
        intervalRef.current = setInterval(() => {
            setOpacity(FADE_OPACITY);
            setTimeout(() => {
                setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
                setOpacity(1);
            }, FADE_TRANSITION_TIME);
        }, IMAGE_CHANGE_INTERVAL);
    };


    return (
        <div style={{ opacity, transition: 'opacity 1s ease-in-out' }}>
            <Image
                src={images[currentImageIndex]}
                alt="A happy student who has passed their exam"
                className="rounded-xl"
                style={{ width: '100%', height: 'auto' }}
                height={500}
                width={500}
            />
        </div>
    );
};

export default ImageSlider;

