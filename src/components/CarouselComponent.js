import React, { useState } from 'react';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
} from 'reactstrap';

const items = [
    {
        src: 'assets/images/muffin.jpg',
        altText: 'Muffin photo by david-todd-mccarty',
        captionHead: 'Tasty Tuesday',
        caption: 'Reduced Muffin Prices'
    },
    {
        src: 'assets/images/acoustic.jpg',
        altText: 'Acoustic guitar by rachmaddian-shotz',
        captionHead: 'Wednesday Nights',
        caption: 'LIVE Acoustic Music'
    },
    {
        src: 'assets/images/mule-top.jpg',
        altText: 'Mule top by alex-plesovskich',
        captionHead: 'Thirsty Thursday',
        caption: 'Reduced Mule Prices'
    },
    {
        src: 'assets/images/dice.jpg',
        altText: 'Dice by brett-jordan',
        captionHead: 'Funtime Friday',
        caption: '*** Game Night ***'
    }
];

const Example = (props) => {
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

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    }

    const slides = items.map((item) => {
        return (
            <CarouselItem
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
                key={item.src}
            >
                <img className="d-block w-100" src={item.src} alt={item.altText} />
                <CarouselCaption captionText={item.caption} captionHeader={item.captionHead} />
            </CarouselItem>
        );
    });

    return (
        <Carousel
            activeIndex={activeIndex}
            next={next}
            previous={previous}
        >
            <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
            {slides}
            <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
            <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
        </Carousel>
    );
}

export default Example;