import React from 'react';

import nike from '../../../images/nike.PNG';

const Home = () => {

    return (
        <div className='hero'>
            
            <div class="card bg-dark text-white border-0">
                <img src={nike} class="card-img" alt="..." width="100%"
    height="700px" position="relative"/>
                <div class="card-img-overlay d-flex flex-column justify-content">
                    <div className="container">
                    <h5 class="card-title display-3 fw-bolder mb-0 text-center">NEW ARRIVALS</h5>
                    <p class="card-text lead fs-2 fw-bolder">CHECK OUT THE TRENDS</p>

                    </div>
                  
                </div>
            </div>

        </div>


    );

}

export default Home;