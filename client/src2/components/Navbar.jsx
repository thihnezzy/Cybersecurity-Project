import React from 'react';

const Navbar = () => {
    return (

        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm">
                <div class="container">
                <a href="#"><img src="/assets/logo-sport.PNG" alt="" width="100px" /></a>
            
                    
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Homme</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Femme</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Enfant</a>
                            </li>
                        </ul>

                        <div className="buttons">
                            <a href="" className='btn btn-outline-white'>
                            <i class="fa fa-search" aria-hidden="true"></i>
                            </a>
                            <a href="" className='btn btn-outline-white ms-2'>
                                <i className='fa fa-user-plus me-1'> </i>
                            </a>
                            <a href="" className='btn btn-outline-white ms-2'>
                                <i className='fa fa-shopping-cart me-1'> (0)</i>
                            </a>
                        </div>

                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;