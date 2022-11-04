import React from 'react'

const Products = () => {


    return (
        <div className='product'>
            <div className="container my-5 py-4">
                <div className="row">
                    <div className='col-12 mb-5'>
                        <h1 className='display-6 fw-bolder text-center'>New Arrivals</h1> <hr />
                    </div>
                </div>
            </div>

            <div class="row row-cols-1 row-cols-md-4 d-flex  justify-content-center ">
                <div class="col">
                    <div class="card h-100">
                        <img src="https://static.nike.com/a/images/f_auto/q_auto:eco/t_PDP_864_v1/0697fd03-09fd-4b3b-be0b-11b009c671d9/short-en-molleton-sportswear-pour-z5Kgjx.jpg" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Short Nike</h5>
                            <p class="card-text">Short moulant pour homme</p>
                            <h6 class="card-price fw-bolder">199$</h6>
                            <button type="button" class="btn btn-outline-dark">Shop Now</button>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100">
                        <img src="/assets/basket.PNG" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Paire de chaussures stylées</h5>
                            <p class="card-text">Des paires de chaussures stylées</p>
                            <h6 class="card-price fw-bolder">69$</h6>
                            <button type="button" class="btn btn-outline-dark">Shop Now</button>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100">
                        <img src="https://static.nike.com/a/images/f_auto/q_auto:eco/t_PDP_864_v1/abb537eb-0e70-4e1f-903e-ec46b8657c0d/short-de-training-en-tissu-fleece-dri-fit-pour-n97b2F.jpg" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Short pour courir</h5>
                            <p class="card-text">Sport pour courir en plain air pour homme</p>
                            <h6 class="card-price fw-bolder">59$</h6>
                            <button type="button" class="btn btn-outline-dark">Shop Now</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className='col-12 mb-5 text-white'>
                    <h1 className='display-6 fw-bolder text-center text-white'>zzz</h1> <hr />
                </div>
            </div>
            <div className="video position-absolute top-300 start-50 end-50 translate-middle">
                <div class="video ">
                    <iframe src="https://www.youtube.com/embed/2COSkxxOtXY"></iframe>
                </div>
            </div>
        </div>
    );
}

export default Products;
