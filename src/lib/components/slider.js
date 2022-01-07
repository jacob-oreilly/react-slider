import React from 'react';
import Slide from './slide';

const Slider = (props) => {
    console.log(props.data);
    return (
        <>
            <h4>Slider</h4>
            {props.data.map((element) => (<Slide data={element} />))}
        </>
    );
}
export default Slider;