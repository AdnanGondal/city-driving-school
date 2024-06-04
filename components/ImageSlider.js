import Image from 'next/image';
import { useState, useEffect } from 'react';

const ImageSlider = ({ images }) => {
    const IMAGE_CHANGE_INTERVAL = 10000;

    const [currentImageIndex, setCurrentImageIndex] = useState(() => Math.floor(Math.random() * images.length));

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, IMAGE_CHANGE_INTERVAL);

        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <Image
                src={images[currentImageIndex]}
                alt="A happy student who has passed their exam"
                className="rounded-xl"
                layout="responsive"
                height={500}
                width={500}
            />
        </div>
    );
};

export default ImageSlider;