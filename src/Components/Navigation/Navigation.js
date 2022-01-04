import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {
    return (
       <nav className='navbar navbar-expand-lg navbar-dark navbar-custom fixed-top'>
           <a class="navbar-brand logo-image" href="index.html"><img src="../asset/img/brand.png" alt="alternative" /></a> 
           <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-awesome fas fa-bars"></span>
            <span class="navbar-toggler-awesome fas fa-times"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarsExampleDefault">
        <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                    <a class="nav-link page-scroll" href="#register">REGISTER <span class="sr-only">(current)</span></a>
                </li>

                {/* <!-- Dropdown Menu -->           */}
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle page-scroll" href="#date" id="navbarDropdown" role="button" aria-haspopup="true" aria-expanded="false">COURSES</a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <Link class="dropdown-item" to="/web_design"><span class="item-text">WEB DESIGN</span></Link>
                        <div class="dropdown-divider"></div>
                        <Link class="dropdown-item" to="/web_development"><span class="item-text">WEB DEVELOPMENT</span></Link>
                        <div class="dropdown-divider"></div>
                        <Link class="dropdown-item" to="/graphices.html"><span class="item-text">GRAPHICES DESIGN</span></Link>
                        <div class="dropdown-divider"></div>
                        <Link class="dropdown-item" to="/app_dev.html"><span class="item-text">APP DEVELOPMENT</span></Link>
                        <div class="dropdown-divider"></div>
                       
                        <Link class="dropdown-item" to="/seo.html"><span class="item-text">SEO</span></Link>
                        <div class="dropdown-divider"></div>
                       
                        <Link class="dropdown-item" to="reactcourse.html"><span class="item-text">React</span></Link>
                        
                       
                
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
    )
}

export default Navigation
