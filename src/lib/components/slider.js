import React, { useState } from 'react';
import Slide from './slide';
import SliderControls from './sliderControls';
import './slider.scss'

const Slider = ({ data, height, width, showBullets, showControls, autoSlide, startIndex }) => {
    console.log(showBullets);
    const [activeSlide, setActiveSlide] = useState(startIndex ? startIndex : 0);
    console.log(activeSlide);
    return (
        <>
            <h4>Slider</h4>
            <div className='slider'>
                {data.map((element, index) => (<Slide key={index} data={element} showSlide={activeSlide === index ? 'active' : ''} />))}
            </div>
            <SliderControls slideCount={data.length} activeSlide={activeSlide} setActiveSlide={setActiveSlide} />
        </>
    );
}
export default Slider;