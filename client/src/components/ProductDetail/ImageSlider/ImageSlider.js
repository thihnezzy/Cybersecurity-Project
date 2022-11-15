import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import './ImageSlider.css'

const ImageSlider = (props) => {
    const data = props.data;
    return (<div className="slider">
        <Carousel  autoPlay={true} showArrow={true} centerMode={true} emulateTouch={true} thumbWidth={100}>
            {/* {
                data.image.map((item,index) =>(
                    <div key={data.id.toString()}>
                        <img key={index} src={item} alt="banner"/>
                    </div>
            ))} */}
            <img src={data} alt="banner"/>
        </Carousel>
    </div>)
}

export default ImageSlider;