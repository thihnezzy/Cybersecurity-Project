import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import './ImageSlider.css'

const ImageSlider = (props) => {
    const data = props.data;
    return (<div className="slider">
        <Carousel  autoPlay={true} showArrow={true} centerMode={true} emulateTouch={true} thumbWidth={100}>
            {
                data.slice(0,data.length <= 12 ? data.length : 12).map((image, index) =>(
                    <div key={index}>
                        <img key={index} src={image} alt="banner"/>
                    </div>
                ))
            }
        </Carousel>
    </div>)
}

export default ImageSlider;