import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


const Testimonial = () => {
    return (
       <div>
             <div className="slider-2">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <h3>Check out our attendees testimonials from previous courses</h3>

                    {/* <!-- Text Slider --> */}
                    <div className="slider-container">
                        <div className="swiper-container text-slider">
                            <div className="swiper-wrapper">
                                
                                {/* <!-- Slide --> */}

                                <OwlCarousel className='owl-theme' items={1} loop autoplay={true}  >
                                <div className="swiper-slide">
                                    <div className="image-wrapper">
                                        <img className="img-fluid" src="training/images/testimonial-1.jpg" alt="alternative" />
                                    </div> 
                                    {/* <!-- end of image-wrapper --> */}
                                    <div className="text-wrapper">
                                        <div className="testimonial-text">I took the SEO training course about a year ago and I am very happy. It taught me all the basics of search engine optimization and some tricks.</div>
                                        <div className="testimonial-author">Jude Thorn - seo</div>
                                    </div> 
                                    {/* <!-- end of text-wrapper --> */}
                                </div> 
                                {/* <!-- end of swiper-slide --> */}
                                {/* <!-- end of slide --> */}

                                {/* <!-- Slide --> */}
                                <div className="swiper-slide">
                                    <div className="image-wrapper">
                                        <img className="img-fluid" src="training/images/testimonial-2.jpg" alt="alternative"/>
                                    </div> 
                                    {/* <!-- end of image-wrapper --> */}
                                    <div className="text-wrapper">
                                        <div className="testimonial-text">Awesome course for the money. I never thought I could learn so much about web development in such a short amount of time. Highly recommend.</div>
                                        <div className="testimonial-author">Roy Smith - Web Development</div>
                                    </div> 
                                    {/* <!-- end of text-wrapper --> */}
                                </div> 
                                {/* <!-- end of swiper-slide --> */}
                                {/* <!-- end of slide --> */}

                                {/* <!-- Slide --> */}
                                <div className="swiper-slide">
                                    <div className="image-wrapper">
                                        <img className="img-fluid" src="training/images/testimonial-3.jpg" alt="alternative" />
                                    </div>
                                     {/* <!-- end of image-wrapper --> */}
                                    <div className="text-wrapper">
                                        <div className="testimonial-text">Spinner Tech is the best App Development training course in the market. It teaches you all the basics but it also adds value with some advanced tips & tricks the are great.</div>
                                        <div className="testimonial-author">Martin Singer - App Development</div>
                                    </div> 
                                    {/* <!-- end of text-wrapper --> */}
                                </div> 
                                {/* <!-- end of swiper-slide --> */}
                                {/* <!-- end of slide --> */}

                                {/* <!-- Slide --> */}
                                <div className="swiper-slide">
                                    <div className="image-wrapper">
                                        <img className="img-fluid" src="training/images/testimonial-4.jpg" alt="alternative" />
                                    </div> 
                                    {/* <!-- end of image-wrapper --> */}
                                    <div className="text-wrapper">
                                        <div className="testimonial-text">Learning Graphics can actually be fun. I attended Spinner Tech Graphics Design training and I had a great time with my peer students and the instructors. Highly recommended course.</div>
                                        <div className="testimonial-author">Ronda Louis - Graphics Design</div>
                                    </div> 
                                    {/* <!-- end of text-wrapper --> */}
                                </div> 
                                {/* <!-- end of swiper-slide --> */}
                                {/* <!-- end of slide --> */}
                                </OwlCarousel>

                            </div> 
                            {/* <!-- end of swiper-wrapper --> */}
                            
                            {/* <!-- Add Arrows --> */}
                            <div className="swiper-button-next"></div>
                            <div className="swiper-button-prev"></div>
                            {/* <!-- end of add arrows --> */}

                        </div> 
                        {/* <!-- end of swiper-container --> */}
                    </div> 
                    {/* <!-- end of slider-container --> */}
                    {/* <!-- end of text slider --> */}

                </div>
                 {/* <!-- end of col --> */}
            </div> 
            {/* <!-- end of row --> */}
        </div> 
        {/* <!-- end of container --> */}
    </div> 
    {/* <!-- end of slider-2 --> */}
    {/* <!-- end of testimonials --> */}

       </div>
    )
}

export default Testimonial
