import React from 'react';

const Slide = (props) => {
    console.log(props.data);
    return (
        <>
            <div>{props.data.text}</div>
        </>
    );
}
export default Slide;