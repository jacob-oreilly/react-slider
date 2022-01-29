import React from 'react';

const Slide = ({ data, showSlide }) => {
    return (
        <>
            <div className={'slide ' + showSlide}>{data.text}</div>
        </>
    );
}
export default Slide;