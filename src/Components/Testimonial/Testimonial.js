import React from 'react'

const Testimonial = () => {
    return (
       <div>
           <div className="slider-2">
               <div className="container">
                   <div className="row">
                       <div className="col-lg-12">
                       <h3>Check out our attendees testimonials from previous courses</h3>

                      <div className="text-container">
                          <div className="swiper-container text-slider ">
                              <div className="swiper-wrapper">
                                  <div className="swiper-slide">
                                      <div className="image-wrapper">
                                      <img class="img-fluid" src="training/images/testimonial-1.jpg" alt="alternative" />
                               
                                      </div>
                                      <div className="text-wrapper">
                                      <div class="testimonial-text">I took the SEO training course about a year ago and I am very happy. It taught me all the basics of search engine optimization and some tricks.</div>
                                        <div class="testimonial-author">Jude Thorn - seo</div>
         
                                      </div>
                                  </div>
                                  <div className="swiper-slide">
                                      <div className="image-wrapper">
                                      <img class="img-fluid" src="training/images/testimonial-2.jpg" alt="alternative" />
                                 
                                      </div>
                                      <div className="text-wrapper">
                                      <div class="testimonial-text">Awesome course for the money. I never thought I could learn so much about web development in such a short amount of time. Highly recommend.</div>
                                        <div class="testimonial-author">Roy Smith - Web Development</div>
                               
                                      </div>
                                  </div>
                                  <div className="swiper-slide">
                                      <div className="image-wrapper">
                                      <img class="img-fluid" src="trainingimages/testimonial-3.jpg" alt="alternative" />
                                    
                                      </div>
                                      <div className="text-wrapper">
                                      <div class="testimonial-text">Spinner Tech is the best App Development training course in the market. It teaches you all the basics but it also adds value with some advanced tips & tricks the are great.</div>
                                        <div class="testimonial-author">Martin Singer - App Development</div>
                                 
                                      </div>
                                  </div>
                                  <div className="swiper-slide">
                                      <div className="image-wrapper">
                                      <img class="img-fluid" src="training/images/testimonial-4.jpg" alt="alternative" />
                                      
                                      </div>
                                      <div className="text-wrapper">
                                      <div class="testimonial-text">Learning Graphics can actually be fun. I attended Spinner Tech Graphics Design training and I had a great time with my peer students and the instructors. Highly recommended course.</div>
                                        <div class="testimonial-author">Ronda Louis - Graphics Design</div>
                                                                   
                                      </div>
                                  </div>
                              </div>
                              <div class="swiper-button-next"></div>
                            <div class="swiper-button-prev"></div>
                          
                          </div>
                      </div>
                       </div>
                   </div>
               </div>
           </div>
       </div>
    )
}

export default Testimonial
