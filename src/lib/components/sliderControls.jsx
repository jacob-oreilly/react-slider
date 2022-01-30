import React from "react";

const SliderControls = ({ slideCount, activeSlide, setActiveSlide, sliderIndexCount }) => {
    function onControlClick(index) {
        setActiveSlide(index);
    }
    return (
        <div>
            <button className="prev" onClick={() => onControlClick(activeSlide !== 0 ? (activeSlide - 1) : (activeSlide + sliderIndexCount))}>Prev</button>
            <button className="next" onClick={() => onControlClick(activeSlide !== sliderIndexCount ? (activeSlide + 1) : 0)}>Next</button>
        </div>
    )
}

export default SliderControls