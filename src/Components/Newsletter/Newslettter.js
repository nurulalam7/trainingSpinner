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
                        <div className="form-group">
                            <input type="email" className="form-control-input" id="nemail" required />
                            <label className="label-control" for="nemail">Email</label>
                            <div className="help-block with-errors"></div>
                        </div>
                        <div className="form-group">
                            <button type="submit" className="form-control-submit-button">SIGN UP</button>
                        </div>
                        <div className="form-message">
                            <div id="nmsgSubmit" className="h3 text-center hidden"></div>
                        </div>
                    </form>

                    <div className="icon-container">
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
                        <span className="fa-stack">
                            <a href="#your-link">
                                <i className="fas fa-circle fa-stack-2x"></i>
                                <i className="fab fa-pinterest-p fa-stack-1x"></i>
                            </a>
                        </span>
                        <span className="fa-stack">
                            <a href="#your-link">
                                <i className="fas fa-circle fa-stack-2x"></i>
                                <i className="fab fa-instagram fa-stack-1x"></i>
                            </a>
                        </span>
                        <span className="fa-stack">
                            <a href="#your-link">
                                <i className="fas fa-circle fa-stack-2x"></i>
                                <i className="fab fa-linkedin-in fa-stack-1x"></i>
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
                        <ul className="list-unstyled li-space-lg">
                            <li className="media">
                                <i className="fas fa-map-marker-alt"></i>
                                <div className="media-body">22 Innovative, San Francisco, CA 94043, US</div>
                            </li>
                            <li className="media">
                                <i className="fas fa-mobile-alt"></i>
                                <div className="media-body">+8801826580966, &nbsp;&nbsp;<i className="fas fa-mobile-alt"></i>&nbsp; +8801826580966</div>
                            </li>
                            <li className="media">
                                <i className="fas fa-envelope"></i>
                                <div className="media-body"><a className="light-gray" href="mailto:sabbirahmedmamun91@gmail.com">sabbirahmedmamun91@gmail.com</a></div>
                                <i className="fas fa-globe"></i>
                                <div><a className="light-gray" target="_blank" href="https://spinnertech.dev/">www.spinnertech.dev</a></div>
                            </li>
                        </ul>
                            </div>
                        </div>

                        <div className="col-lg-6">
                        <form id="contactForm" data-toggle="validator" data-focus="false">
                        <div className="form-group">
                            <input type="text" className="form-control-input" id="cname" required />
                            <label className="label-control" for="cname">Name</label>
                            <div className="help-block with-errors"></div>
                        </div>
                        <div className="form-group">
                            <input type="email" className="form-control-input" id="cemail" required />
                            <label className="label-control" for="cemail">Email</label>
                            <div className="help-block with-errors"></div>
                        </div>
                        <div className="form-group">
                            <textarea className="form-control-textarea" id="cmessage" required></textarea>
                            <label className="label-control" for="cmessage">Your message</label>
                            <div className="help-block with-errors"></div>
                        </div>
                        <div className="form-group">
                            <button type="submit" className="form-control-submit-button">SUBMIT</button>
                        </div>
                        <div className="form-message">
                            <div id="cmsgSubmit" className="h3 text-center hidden"></div>
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
                         <p className="p-small">Copyright © 2021 <a target="_blank" href="https://spinnertech.dev/">Spinner Tech</a> - All rights reserved</p>
              
              
                         </div>
                     </div>
                 </div>
             </div>
        </div>
    )
}

export default Newslettter
