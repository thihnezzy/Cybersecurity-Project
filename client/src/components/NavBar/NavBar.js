import React from 'react';
import {Link} from 'react-router-dom';

// import Logo from '../../images/logo-sport.PNG';

const Navbar = () => {
    return (

        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm">
                <div className="container">
                {/* <Link to="#"><img src="..//assets/logo-sport.PNG" alt="" width="100px" /></Link> */}
                {/* <Link to='/'><img src={Logo} alt="" width="100px" /></Link> */}
                    
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="#">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="#">Homme</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="#">Femme</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="#">Enfant</Link>
                            </li>
                        </ul>

                        <div className="buttons">
                            <Link to="" className='btn btn-outline-white'>
                            <i className="fa fa-search" aria-hidden="true"></i>
                            </Link>
                            <Link to="" className='btn btn-outline-white ms-2'>
                                <i className='fa fa-user-plus me-1'> </i>
                            </Link>
                            <Link to="" className='btn btn-outline-white ms-2'>
                                <i className='fa fa-shopping-cart me-1'> (0)</i>
                            </Link>
                        </div>

                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;