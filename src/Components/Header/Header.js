import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const Header = () => {
    return (
        <div  className='mt-5'>
             {/* <!-- Header --> */}
    <header id="header" className="header">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="text-container">
                        <div className="countdown">
                            <span id="clock"></span>
                        </div>
                        <h1>SEO Online Course</h1>
                        <p className="p-large">Do you feel like you're doing a lot of guess work when it comes to SEO for your website? Take the SEO training course to change that</p>
                        <a className="btn-solid-lg page-scroll" href="#register">REGISTER</a>
                        <a className="btn-outline-lg page-scroll" href="#description">DISCOVER</a>
                    </div> 
                    {/* <!-- end of text-container --> */}
                </div> 
                {/* <!-- end of col --> */}
            </div> 
            {/* <!-- end of row --> */}
        </div> 
        {/* <!-- end of container --> */}
        
        {/* <!-- Image Slider --> */}
        <div className="outer-container">
            <div className="slider-container">
                <div className="swiper-container image-slider-1">
                <OwlCarousel className='owl-theme' items={1} loop autoplay={true} nav >
                     
                        {/* <!-- Slide --> */}
                        <div className="swiper-slide" >
                            <img className="img-fluid" src="training/images/details-slide-1.jpg" alt="alternative"/>
                        </div>
                        {/* <!-- end of slide --> */}

                        {/* <!-- Slide --> */}
                        <div className="swiper-slide">
                            <img className="img-fluid" src="training/images/details-slide-2.jpg" alt="alternative"/>
                        </div>
                        {/* <!-- end of slide --> */}

                        {/* <!-- Slide --> */}
                        <div className="swiper-slide">
                            <img className="img-fluid" src="training/images/details-slide-3.jpg" alt="alternative"/>
                        </div>
                        {/* <!-- end of slide --> */}
                        

                </OwlCarousel>
                    
                </div> 
                {/* <!-- end of swiper-container --> */}
            </div> 
            {/* <!-- end of slider-container --> */}
        </div> 
        {/* <!-- end of outer-container --> */}
        {/* <!-- end of image slider --> */}

    </header> 
    {/* <!-- end of header -->
    <!-- end of header --> */}
        </div>
    )
}

export default Header
