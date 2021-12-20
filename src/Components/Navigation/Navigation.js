import React from 'react'

const Header = () => {
    return (
        <div>
            {/* preloader */}
            <div class="spinner-wrapper">
                <div class="spinner"></div>
                <div class="bounce1"></div>
                <div class="bounce2"></div>
                <div class="bounce3"></div>
            
            </div>
             {/* end preloader */}


              {/* <!-- Navigation --> */}
    <nav class="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top">

        {/* <!-- Text Logo - Use this if you don't have a graphic logo -->
        <!-- <a class="navbar-brand logo-text page-scroll" href="index.html">Corso</a> -->

        <!-- Image Logo --> */}
        <a class="navbar-brand logo-image" href="index.html"><img src="../asset/img/brand.png" alt="alternative"/></a> 
        
        {/* <!-- Mobile Menu Toggle Button --> */}
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-awesome fas fa-bars"></span>
            <span class="navbar-toggler-awesome fas fa-times"></span>
        </button>
        {/* <!-- end of mobile menu toggle button --> */}

        <div class="collapse navbar-collapse" id="navbarsExampleDefault">
            <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                    <a class="nav-link page-scroll" href="#register">REGISTER <span class="sr-only">(current)</span></a>
                </li>

                {/* <!-- Dropdown Menu -->           */}
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle page-scroll" href="#date" id="navbarDropdown" role="button" aria-haspopup="true" aria-expanded="false">COURSES</a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a class="dropdown-item" href="web_details.html"><span class="item-text">WEB DESIGN</span></a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="web_dev_details.html"><span class="item-text">WEB DEVELOPMENT</span></a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="graphices.html"><span class="item-text">GRAPHICES DESIGN</span></a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="app_dev.html"><span class="item-text">APP DEVELOPMENT</span></a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="seo.html"><span class="item-text">SEO</span></a>
                    </div>
                </li>
                {/* <!-- end of dropdown menu --> */}

                <li class="nav-item">
                    <a class="nav-link page-scroll" href="#contact">CONTACT</a>
                </li>
            </ul>
            <span class="nav-item social-icons">
                <span class="fa-stack">
                    <a href="#your-link">
                        <i class="fas fa-circle fa-stack-2x"></i>
                        <i class="fab fa-facebook-f fa-stack-1x"></i>
                    </a>
                </span>
                <span class="fa-stack">
                    <a href="#your-link">
                        <i class="fas fa-circle fa-stack-2x"></i>
                        <i class="fab fa-twitter fa-stack-1x"></i>
                    </a>
                </span>
            </span>
        </div>
    </nav> 
            {/* <!-- end of navbar -->
           <!-- end of navigation --> */}


        </div>
    )
}

export default Header
