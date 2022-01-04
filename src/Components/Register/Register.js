import React from 'react'

const   Register = () => {
    return (
       <div className="form-1" id="register">
           <div className="container">
               <div className="row">
                   <div className="col-lg-6">
                   <div className="text-container">
                            <h2>Register Using The Form</h2>
                            <p>It's easy to register for the course, just fill out the form and click submit. Then you will be registered for one of the best SEO training courses in the industry</p>
                
                          <ul className="list-unstyled li-space-lg">
                            <li className="media">
                                <i className="fas fa-square"></i>
                                <div className="media-body"><strong>Your information</strong> is required to complete the registration</div>
                            </li>
                            <li className="media">
                                <i className="fas fa-square"></i>
                                <div className="media-body"><strong>It's safe with us</strong> and will not be used for marketing</div>
                            </li>
                            <li className="media">
                                <i className="fas fa-square"></i>
                                <div className="media-body"><strong>You will receive</strong> a confirmation email in less than 24h</div>
                            </li>
                        </ul>
                    </div>
                   </div>
                   <div className="col-lg-6">
                   <form id="registrationForm" data-toggle="validator" data-focus="false">
                            <div className="form-group">
                                <input type="text" className="form-control-input" id="rname" name="rname" required />
                                <label className="label-control" for="rname">Your name</label>
                                <div className="help-block with-errors"></div>
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control-input" id="rname" name="rname" required />
                                <label className="label-control" for="rname">Father's name</label>
                                <div className="help-block with-errors"></div>
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control-input" id="rname" name="rname" required />
                                <label className="label-control" for="rname">Mother's name</label>
                                <div className="help-block with-errors"></div>
                            </div>
                            <div className="form-group">
                                <input type="email" className="form-control-input" id="remail" name="remail" required />
                                <label className="label-control" for="remail">Email address</label>
                                <div className="help-block with-errors"></div>
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control-input" id="rphone" name="rphone" required />
                                <label className="label-control" for="rphone">Phone number</label>
                                <div className="help-block with-errors"></div>
                            </div>
                            <div className="form-group">
                                <select className="form-control-input" required>
                                    <option>select Course</option>
                                    <option value="web-design">Web Design</option>
                                    <option>Web Development</option>
                                    <option>Seo</option>
                                    <option>App Development</option>
                                    <option>Graphics Design</option>
                                </select>
                                <div className="help-block with-errors"></div>
                            </div>
                            <div className="form-group">
                                <select className="form-control-input" required>
                                    <option>Course Type</option>
                                    <option value="online">Online</option>
                                    <option value="offline" >Offline</option>
                                </select>
                                <div className="help-block with-errors"></div>
                            </div>
                            <div className="form-group">
                                <label style={{paddingRight: "20px" , color: "white"}}>Select Pyment system</label>
                                <input type="radio" name="payment" value="manual" style={{paddingLeft: "30px"}} />manual
                                <input type="radio" name="payment" value="online" />online payment
                                <div className="help-block with-errors"></div>
                            </div>
                            <div className="form-group">
                                <button type="submit" className="form-control-submit-button"><a target="_blank" style={{textDecoration: "none"}} href="payment.html">REGISTER</a></button>
                            </div>
                            <div className="form-message">
                                <div id="rmsgSubmit" className="h3 text-center hidden"></div>
                            </div>
                        </form>
                   </div>
               </div>
           </div>
       </div>
    )
}

export default Register
