import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';

const ImageSlider = ({ images }) => {
    const INTERVAL = 5000;
    const [currentImageIndex, setCurrentImageIndex] = useState(() => Math.floor(Math.random() * images.length));
    const intervalRef = useRef(null);

    useEffect(() => {
        startInterval();

        return () => clearInterval(intervalRef.current);
    }, [images]);

    const startInterval = () => {
        clearInterval(intervalRef.current);
        intervalRef.current = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, INTERVAL);
    };

    const handleClick = () => {
        console.log(images[currentImageIndex])
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        startInterval();
    };

    return (
        <Image
            onClick={handleClick}
            src={images[currentImageIndex]}
            alt="A happy student who has passed their exam"
            className="rounded-xl"
            style={{ width: '100%', height: 'auto' }}
            height={400}
            width={400}
        />
    );
};

export default ImageSlider;

