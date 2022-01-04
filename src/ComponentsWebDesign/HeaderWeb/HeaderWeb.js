import React from 'react'
import { Link } from 'react-router-dom'

const HeaderWeb = () => {
    return (
        <div data-spy="scroll" data-target=".fixed-top">
        
            <div className="spinner-wrapper">
                <div className="spinner">
                    <div className="bounce1"></div>
                    <div className="bounce2"></div>
                    <div className="bounce3"></div>
                </div>
            </div>

        <nav className='navbar navbar-expand-lg navbar-dark navbar-custom fixed-top' >
        <a className="navbar-brand logo-image" href="index.html"><img src="../asset//img/brand.png" alt="alternative" /></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-awesome fas fa-bars"></span>
            <span className="navbar-toggler-awesome fas fa-times"></span>
        </button>

        <div className="collapse navbar-collase" id="navbarsExampleDefault"></div>
        <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <a className="nav-link page-scroll" href="index.html#register">REGISTER <span className="sr-only">(current)</span></a>
                </li>
                {/* <!-- Dropdown Menu -->           */}
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle page-scroll" href="index.html#date" id="navbarDropdown" role="button" aria-haspopup="true" aria-expanded="false">COURSES</a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <Link className="dropdown-item" to="/web_design"><span className="item-text">WEB DESIGN</span></Link>
                        <div className="dropdown-divider"></div>
                        <Link className="dropdown-item" to="/web_development"><span className="item-text">WEB DEVELOPMENT</span></Link>
                        <div className="dropdown-divider"></div>
                        <Link className="dropdown-item" to="/graphices.html"><span className="item-text">GRAPHICES DESIGN</span></Link>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" href="app_dev.html"><span className="item-text">APP DEVELOPMENT</span></a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" href="seo.html"><span className="item-text">SEO</span></a>
                    </div>
                </li>
                {/* <!-- end of dropdown menu --> */}

                <li className="nav-item">
                    <a className="nav-link page-scroll" href="index.html#contact">CONTACT</a>
                </li>
            </ul>
            <span className="nav-item social-icons">
                <span className="fa-stack">
                    <a href="#your-link">
                        <i className="fas fa-circle fa-stack-2x"></i>
                        <i className="fab fa-facebook-f fa-stack-1x"></i>
                    </a>
                </span>
                <span className="fa-stack">
                    <a href="#your-link">
                        <i className="fas fa-circle fa-stack-2x"></i>
                        <i className="fab fa-twitter fa-stack-1x"></i>
                    </a>
                </span>
            </span>


        </nav>

        

        
        </div>
       
    
    
    )
}

export default HeaderWeb
