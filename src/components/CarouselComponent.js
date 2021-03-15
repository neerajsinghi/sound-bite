import React, { useState } from 'react';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
} from 'reactstrap';

const items = [
    {
        src: 'assets/images/POWER AMPLIFIERs.jpg',

        altText: 'Slide 1',
        caption: 'Slide 1'
    },
    {
        src: 'assets/images/banner3.png',
        altText: 'Slide 2',
        caption: 'Slide 2'
    },
    {
        src: 'assets/images/banner.png',
        altText: 'Slide 3',
        caption: 'Slide 3'
    }
];

const CustomCarousal = (props) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    }

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    }


    const slides = items.map((item) => {
        return (
            <CarouselItem
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
                key={item.src}
            >
                <img src={item.src} alt={item.altText} style={{ objectFit: "contain", width: '100%', height: '70vh', backgroundColor: 'white' }} />
            </CarouselItem>
        );
    });

    return (
        <Carousel
            activeIndex={activeIndex}
            next={next}
            previous={previous}

        >
            {slides}
            <CarouselControl color={"blue"} direction="prev" directionText="Previous" onClickHandler={previous} />
            <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
        </Carousel>
    );
}

export default CustomCarousal;
