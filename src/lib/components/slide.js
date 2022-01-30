import React from 'react';

const Slide = ({ data, showSlide, currentSlideIndex }) => {
    return (
        <>
            <div className={'slide ' + showSlide} id={"slide-" + currentSlideIndex}>{data.text}</div>
        </>
    );
}
export default Slide;