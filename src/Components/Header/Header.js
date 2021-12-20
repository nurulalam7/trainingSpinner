import React from 'react'

const Header = () => {
    return (
        <div>
             {/* <!-- Header --> */}
    <header id="header" class="header">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="text-container">
                        <div class="countdown">
                            <span id="clock"></span>
                        </div>
                        <h1>SEO Online Course</h1>
                        <p class="p-large">Do you feel like you're doing a lot of guess work when it comes to SEO for your website? Take the SEO training course to change that</p>
                        <a class="btn-solid-lg page-scroll" href="#register">REGISTER</a>
                        <a class="btn-outline-lg page-scroll" href="#description">DISCOVER</a>
                    </div> 
                    {/* <!-- end of text-container --> */}
                </div> 
                {/* <!-- end of col --> */}
            </div> 
            {/* <!-- end of row --> */}
        </div> 
        {/* <!-- end of container --> */}
        
        {/* <!-- Image Slider --> */}
        <div class="outer-container">
            <div class="slider-container">
                <div class="swiper-container image-slider-1">
                    <div class="swiper-wrapper">
                        
                        {/* <!-- Slide --> */}
                        <div class="swiper-slide" >
                            <img class="img-fluid" src="training/images/details-slide-1.jpg" alt="alternative"/>
                        </div>
                        {/* <!-- end of slide --> */}

                        {/* <!-- Slide --> */}
                        <div class="swiper-slide">
                            <img class="img-fluid" src="training/images/details-slide-2.jpg" alt="alternative"/>
                        </div>
                        {/* <!-- end of slide --> */}

                        {/* <!-- Slide --> */}
                        <div class="swiper-slide">
                            <img class="img-fluid" src="training/images/details-slide-3.jpg" alt="alternative"/>
                        </div>
                        {/* <!-- end of slide --> */}

                    </div> 
                    {/* <!-- end of swiper-wrapper --> */}
                    
                    {/* <!-- Add Arrows --> */}
                    <div class="swiper-button-next"></div>
                    <div class="swiper-button-prev"></div>
                    {/* <!-- end of add arrows --> */}
                    
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
