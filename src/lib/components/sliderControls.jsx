import React from "react";

const SliderControls = ({ slideCount, activeSlide, setActiveSlide }) => {
    let slideIndex = slideCount - 1;
    function onControlClick(index) {
        setActiveSlide(index);
    }
    return (
        <div>
            <button onClick={() => onControlClick(activeSlide !== 0 ? (activeSlide - 1) : (activeSlide + slideIndex))}>Prev</button>
            <button onClick={() => onControlClick(activeSlide !== slideIndex ? (activeSlide + 1) : 0)}>Next</button>
        </div>
    )
}

export default SliderControls