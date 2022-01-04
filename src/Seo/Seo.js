import React from 'react'

const Seo = () => {
    return (
        <div>
            <div className="ex-header">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="white">SEO</h1>
                            <h4 style={{color: "#4cd137"}}>Price: 2,000 TK</h4>
                
                        </div>
                    </div>
                </div>
            </div>
            {/* breadcrumbs  */}

            <div className="ex-basic-2">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="image-container-large"  style={{textAlign: "center"}}>
                             <img className="img-fluid" src="training/images/seo.png" alt="alternative" />
                              
                            </div>

                            <div className="text-container">
                                <h3>About The Course</h3>
                                <p>SEO is the active practice of optimizing a web site by improving internal and external aspects in order to increase the traffic the site receives from search engines. 
                                    Firms that practice SEO can vary; some have a highly specialized focus, while others take a more broad and general approach. Optimizing a web site for search engines 
                                    can require looking at so many unique elements that 
                                    many practitioners of SEO (SEOs) consider themselves to be in the broad field of website optimization (since so many of those elements intertwine).</p>
                                <h3>Course Modules :</h3>
                                <div className="row">
                                    <div className="col-md-6">
                                    <ul className="list-unstyled li-space-lg">
                                    <li className="media">
                                        <i className="fas fa-square"></i>
                                        <div className="media-body">Online video content</div>
                                    </li>
                                    <li className="media">
                                        <i className="fas fa-square"></i>
                                        <div className="media-body">Certificate of completion</div>
                                    </li>
                                    <li className="media">
                                        <i className="fas fa-square"></i>
                                        <div className="media-body">Instructor Q&A</div>
                                    </li>
                                    <li className="media">
                                        <i className="fas fa-square"></i>
                                        <div className="media-body">Instructor direct message</div>
                                    </li>
                                </ul>
                                    </div>
                                    {/* end of col  */}

                                    <div className="col-md-6">
                                    <h3>Marketplace</h3>
                                <ul className="list-unstyled li-space-lg">
                                    <li className="media">
                                        <i className="fas fa-square"></i>
                                        <div className="media-body">Fiverr</div>
                                    </li>
                                    <li className="media">
                                        <i className="fas fa-square"></i>
                                        <div className="media-body">Freelancer</div>
                                    </li>
                                </ul>
                                    </div>
                                </div>
                                {/* end of row  */}
                                <h3>Professional And Standard Course Features</h3>
                        <table border="1px" width="100%" style={{textAlign: "center"}}>
                            <thead>
                                <tr>
                                    <th>Features</th>
                                    <th>Professional</th>
                                    <th>Standard</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Classes</td>
                                    <td>30 <span style={{fontSize: "13px"}}>(3 dayes in a week)</span></td>
                                    <td>20 <span style={{fontSize: "13px"}}>(3 dayes in a week)</span></td>
                                </tr>
                                <tr>
                                    <td>Projects</td>
                                    <td>4</td>
                                    <td>2</td>
                                </tr>
                            </tbody>
                        </table>

                        <h3>Career Opportunity</h3>
                        <p>Here is a list of possible job opportunities for the software developers, designers who will complete the course. Completing the course and handling all project 
                            works, it is possible for students to build one strong portfolio and can apply for jobs that are open for recruitment. It is possible both in local and international
                             marketplaces. And our job placement cell will be there with all the supports, guidelines and grooming sessions for students. Thus it will help them to get co
                             nfidence and flourish in the digital arena. it is possible for students to build one strong portfolio and can apply for jobs that are open for recruitment. 
                             It is possible both in local and in international marketplaces. And our job placement cell will be there with all the supports, guidelines and grooming sessions 
                             for students. Thus it will help them to get confidence and flourish in the digital arena. The opportunities are as follows-</p>
   
                            </div>
                            {/* end of text container  */}

                            <div className="text-container">
                            <h2 style={{textAlign: "center", marginBottom: "20px"}}>Enroll Now</h2>
                               {/* registration  */}

                               <div className="form-container">
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
                                    <input type="text" className="form-control-input" id="rphone" name="rphone" required />
                                    <label className="label-control" for="rphone">Guardian's number</label>
                                    <div className="help-block with-errors"></div>
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control-input" id="rphone" name="rphone" required />
                                    <label className="label-control" for="rphone">Date of Birth</label>
                                    <div className="help-block with-errors"></div>
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control-input" id="rphone" name="rphone" required />
                                    <label className="label-control" for="rphone">National ID</label>
                                    <div className="help-block with-errors"></div>
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control-input" id="rphone" name="rphone" required />
                                    <label className="label-control" for="rphone">Phone number</label>
                                    <div className="help-block with-errors"></div>
                                </div>
                                <div className="form-group">
                                    <label style={{paddingRight: "20px", color: "rgb(0, 119, 255)"}}>Gender</label>
                                    <input type="radio" name="gender" value="male" style={{margin: "10px"}} />Male
                                    <input type="radio" name="gender" value="female" style={{margin:"10px"}} />Female
                                    <input type="radio" name="gender" value="others" style={{margin:"10px"}} />Others
                                    <div className="help-block with-errors"></div>
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control-input" id="rphone" name="rphone" required />
                                    <label className="label-control" for="rphone">Permanent Address</label>
                                    <div className="help-block with-errors"></div>
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control-input" id="rphone" name="rphone" required />
                                    <label className="label-control" for="rphone">Occupation</label>
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
                                        <option value="offline">Offline</option>
                                    </select>
                                    <div className="help-block with-errors"></div>
                                </div>
                                <div className="form-group">
                                    <label style={{paddingRight: "20px" ,color: "rgb(0, 119, 255)"}}>Select Pyment system</label>
                                    <input type="radio" name="payment" value="manual" style={{margin:"10px"}} />manual
                                    <input type="radio" name="payment" value="online" style={{margin:"10px"}} />online payment
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
                </div>
            </div>
        </div>
    )
}

export default Seo
