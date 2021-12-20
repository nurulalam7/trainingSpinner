import React from 'react'

const Newslettter = () => {
    return (
        <div>
            <div className="form-2">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                        <h3>Stay updated with news by subscribing to our newsletter and our social channels</h3>
                        <form id="newsletterForm" data-toggle="validator" data-focus="false">
                        <div class="form-group">
                            <input type="email" class="form-control-input" id="nemail" required />
                            <label class="label-control" for="nemail">Email</label>
                            <div class="help-block with-errors"></div>
                        </div>
                        <div class="form-group">
                            <button type="submit" class="form-control-submit-button">SIGN UP</button>
                        </div>
                        <div class="form-message">
                            <div id="nmsgSubmit" class="h3 text-center hidden"></div>
                        </div>
                    </form>

                    <div className="icon-container">
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
                        <span class="fa-stack">
                            <a href="#your-link">
                                <i class="fas fa-circle fa-stack-2x"></i>
                                <i class="fab fa-pinterest-p fa-stack-1x"></i>
                            </a>
                        </span>
                        <span class="fa-stack">
                            <a href="#your-link">
                                <i class="fas fa-circle fa-stack-2x"></i>
                                <i class="fab fa-instagram fa-stack-1x"></i>
                            </a>
                        </span>
                        <span class="fa-stack">
                            <a href="#your-link">
                                <i class="fas fa-circle fa-stack-2x"></i>
                                <i class="fab fa-linkedin-in fa-stack-1x"></i>
                            </a>
                        </span>
                    </div>
                        </div>
                    </div>
                </div>
            </div>



            {/* contact */}

            <div id="contact" className="form-3">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="text-container">
                            <h2>Contact Details</h2>
                        <p>For registration questions please get in touch using the contact details below. For any questions use the form.</p>
                        <h3>Main Office Location</h3>
                        <ul class="list-unstyled li-space-lg">
                            <li class="media">
                                <i class="fas fa-map-marker-alt"></i>
                                <div class="media-body">22 Innovative, San Francisco, CA 94043, US</div>
                            </li>
                            <li class="media">
                                <i class="fas fa-mobile-alt"></i>
                                <div class="media-body">+8801826580966, &nbsp;&nbsp;<i class="fas fa-mobile-alt"></i>&nbsp; +8801826580966</div>
                            </li>
                            <li class="media">
                                <i class="fas fa-envelope"></i>
                                <div class="media-body"><a class="light-gray" href="mailto:sabbirahmedmamun91@gmail.com">sabbirahmedmamun91@gmail.com</a></div>
                                <i class="fas fa-globe"></i>
                                <div><a class="light-gray" target="_blank" href="https://spinnertech.dev/">www.spinnertech.dev</a></div>
                            </li>
                        </ul>
                            </div>
                        </div>

                        <div className="col-lg-6">
                        <form id="contactForm" data-toggle="validator" data-focus="false">
                        <div class="form-group">
                            <input type="text" class="form-control-input" id="cname" required />
                            <label class="label-control" for="cname">Name</label>
                            <div class="help-block with-errors"></div>
                        </div>
                        <div class="form-group">
                            <input type="email" class="form-control-input" id="cemail" required />
                            <label class="label-control" for="cemail">Email</label>
                            <div class="help-block with-errors"></div>
                        </div>
                        <div class="form-group">
                            <textarea class="form-control-textarea" id="cmessage" required></textarea>
                            <label class="label-control" for="cmessage">Your message</label>
                            <div class="help-block with-errors"></div>
                        </div>
                        <div class="form-group">
                            <button type="submit" class="form-control-submit-button">SUBMIT</button>
                        </div>
                        <div class="form-message">
                            <div id="cmsgSubmit" class="h3 text-center hidden"></div>
                        </div>
                    </form>
                        </div>
                    </div>
                </div>
            </div>
             

             {/* footer  */}
             <div className="copyright">
                 <div className="container">
                     <div className="row">
                         <div className="col-lg-12">
                         <p class="p-small">Copyright © 2021 <a target="_blank" href="https://spinnertech.dev/">Spinner Tech</a> - All rights reserved</p>
              
                         </div>
                     </div>
                 </div>
             </div>
        </div>
    )
}

export default Newslettter
