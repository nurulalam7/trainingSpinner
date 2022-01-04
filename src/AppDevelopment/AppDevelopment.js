import React from 'react'

const AppDevelopment = () => {
    return (
        <div>
            <header id="header" className='ex-header'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                        <h1 class="white">App Development</h1>
                        <h4 style={{color:" #4cd137"}}>Price: 10,000 TK</h4>
         
                        </div>
                    </div>
                </div>

            </header>

            {/* breadcrubs  */}

            <div className="ex-basic-1">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="breadcrumbs">
                             <a href="index.html">Home</a><i class="fa fa-angle-double-right"></i><span>App Development</span>
        
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* privacy content  */}

            <div className="ex-basic-2">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="image-container-large" style={{textAlign: "center"}}>
                              <img class="img-fluid" width="80%" src="training/images/app.jpg" alt="alternative" />
                 
                            </div>
                            {/* end of image container  */}

                            <div className="text-container">
                                <h3>About The Course</h3>
                                <p>With the world going mobile, the importance of apps is increasing day by day.
                                App development hence refers to the creation of applications to be used on mobile devices. Today when we buy a smartphone or a tablet, 
                                we can see that it comes with some pre-installed apps for social media or searching or such other purposes. And if we can’t find what we 
                                are looking for, we just log on to the app store and download the things we need. The more people buying smartphones, the more the necessity of workable apps. It proves that
                                learning app development is a pretty good career choice today. Start learning from the best in the industry and be your own boss.</p>
                                <h3>Course Modules :</h3>

                                <div className="row">
                                    <div className="col-md-6">
                                    <ul class="list-unstyled li-space-lg">
                                    <li class="media">
                                        <i class="fas fa-square"></i>
                                        <div class="media-body">Introduction To Java Programming</div>
                                    </li>
                                    <li class="media">
                                        <i class="fas fa-square"></i>
                                        <div class="media-body">Language Fundamentals</div>
                                    </li>
                                    <li class="media">
                                        <i class="fas fa-square"></i>
                                        <div class="media-body">Core Collection Classes</div>
                                    </li>
                                    <li class="media">
                                        <i class="fas fa-square"></i>
                                        <div class="media-body">Packages</div>
                                    </li>
                                    <li class="media">
                                        <i class="fas fa-square"></i>
                                        <div class="media-body">Exception Handling</div>
                                    </li>
                                    <li class="media">
                                        <i class="fas fa-square"></i>
                                        <div class="media-body">Android Components</div>
                                    </li>
                                    <li class="media">
                                        <i class="fas fa-square"></i>
                                        <div class="media-body"> Content Providers & Location Services</div>
                                    </li>
                                    <li class="media">
                                        <i class="fas fa-square"></i>
                                        <div class="media-body">Multimedia & Deployment</div>
                                    </li>
                                </ul>

                                    </div>
                                    {/* end of col  */}
                                    <div className="col-md-6">
                                    <h3>Software Taught</h3>
                                    <ul class="list-unstyled li-space-lg">
                                        <li class="media">
                                            <i class="fas fa-square"></i>
                                            <div class="media-body">Android Studio</div>
                                        </li>
                                        <li class="media">
                                            <i class="fas fa-square"></i>
                                            <div class="media-body">Netbeans</div>
                                        </li>
                                    </ul>
                                    </div>
                                    {/* end of col  */}
                                   
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
                                    <td>40 <span style={{fontSize:"13px"}}>(3 dayes in a week)</span></td>
                                    <td>50 <span style={{fontSize:"13px"}}>(3 dayes in a week)</span></td>
                                </tr>
                                <tr>
                                    <td>Projects</td>
                                    <td>4</td>
                                    <td>2</td>
                                </tr>
                            </tbody>
                        </table>

                        <h3>Career Opportunity</h3>
                        <p>Here is a list of possible job opportunities for the software developers, designers who will complete the course. 
                            Completing the course and handling all project works, it is possible for students to build one strong portfolio and can apply
                             for jobs that are open for recruitment. It is possible both in local and international marketplaces. And our job placement cell will be there 
                             with all the supports, guidelines and grooming sessions for students. 
                            Thus it will help them to get confidence and flourish in the digital arena. The opportunities are as follows-</p>
                        <ul class="list-unstyled li-space-lg">
                                    <li class="media">
                                        <i class="fas fa-square"></i>
                                        <div class="media-body">Android Application Developer</div>
                                    </li>
                                    <li class="media">
                                        <i class="fas fa-square"></i>
                                        <div class="media-body">Java Application Developer</div>
                                    </li>
                                    <li class="media">
                                        <i class="fas fa-square"></i>
                                        <div class="media-body">Framework Designer</div>
                                    </li>
                                    <li class="media">
                                        <i class="fas fa-square"></i>
                                        <div class="media-body">Soft. Arch. Dev</div>
                                    </li>
                        </ul>


                            </div>
                            {/* end of text-container  */}

                            <div className="text-container">
                             <h2 style={{textAlign: "center", marginBottom: "20px"}}>Enroll Now</h2>
                              {/* registration form  */}
                              <div className="form-container">
                              <form id="registrationForm" data-toggle="validator" data-focus="false">
                            <div class="form-group">
                                <input type="text" class="form-control-input" id="rname" name="rname" required />
                                <label class="label-control" for="rname">Your name</label>
                                <div class="help-block with-errors"></div>
                            </div>
                            <div class="form-group">
                                <input type="text" class="form-control-input" id="rname" name="rname" required />
                                <label class="label-control" for="rname">Father's name</label>
                                <div class="help-block with-errors"></div>
                            </div>
                            <div class="form-group">
                                <input type="text" class="form-control-input" id="rname" name="rname" required />
                                <label class="label-control" for="rname">Mother's name</label>
                                <div class="help-block with-errors"></div>
                            </div>
                            <div class="form-group">
                                <input type="email" class="form-control-input" id="remail" name="remail" required />
                                <label class="label-control" for="remail">Email address</label>
                                <div class="help-block with-errors"></div>
                            </div>
                            <div class="form-group">
                                <input type="text" class="form-control-input" id="rphone" name="rphone" required />
                                <label class="label-control" for="rphone">Phone number</label>
                                <div class="help-block with-errors"></div>
                            </div>
                            <div class="form-group">
                                <input type="text" class="form-control-input" id="rphone" name="rphone" required />
                                <label class="label-control" for="rphone">Guardian's number</label>
                                <div class="help-block with-errors"></div>
                            </div>
                            <div class="form-group">
                                <input type="text" class="form-control-input" id="rphone" name="rphone" required />
                                <label class="label-control" for="rphone">Date of Birth</label>
                                <div class="help-block with-errors"></div>
                            </div>
                            <div class="form-group">
                                <input type="text" class="form-control-input" id="rphone" name="rphone" required />
                                <label class="label-control" for="rphone">National ID</label>
                                <div class="help-block with-errors"></div>
                            </div>
                            <div class="form-group">
                                <input type="text" class="form-control-input" id="rphone" name="rphone" required />
                                <label class="label-control" for="rphone">Phone number</label>
                                <div class="help-block with-errors"></div>
                            </div>
                            <div class="form-group">
                                <label style={{paddingRight: "20px", color: "rgb(0, 119, 255)"}}>Gender</label>
                                <input type="radio" name="gender" value="male" style={{margin: "10px"}} />Male
                                <input type="radio" name="gender" value="female" style={{margin:"10px"}} />Female
                                <input type="radio" name="gender" value="others" style={{margin:"10px"}} />Others
                                <div class="help-block with-errors"></div>
                            </div>
                            <div class="form-group">
                                <input type="text" class="form-control-input" id="rphone" name="rphone" required />
                                <label class="label-control" for="rphone">Permanent Address</label>
                                <div class="help-block with-errors"></div>
                            </div>
                            <div class="form-group">
                                <input type="text" class="form-control-input" id="rphone" name="rphone" required />
                                <label class="label-control" for="rphone">Occupation</label>
                                <div class="help-block with-errors"></div>
                            </div>
                            <div class="form-group">
                                <select class="form-control-input" required>
                                    <option>select Course</option>
                                    <option value="web-design">Web Design</option>
                                    <option>Web Development</option>
                                    <option>Seo</option>
                                    <option>App Development</option>
                                    <option>Graphics Design</option>
                                </select>
                                <div class="help-block with-errors"></div>
                            </div>
                            <div class="form-group">
                                <select class="form-control-input" required>
                                    <option>Course Type</option>
                                    <option value="online">Online</option>
                                    <option value="offline">Offline</option>
                                </select>
                                <div class="help-block with-errors"></div>
                            </div>
                            <div class="form-group">
                                <label style={{paddingRight: "20px", color: "rgb(0, 119, 255)"}}>Select Pyment system</label>
                                <input type="radio" name="payment" value="online" style={{margin: "10px"}} />online payment
                                <input type="radio" name="payment" value="manual" style={{margin: "10px"}} />manual
                                <div class="help-block with-errors"></div>
                            </div>
                            <div class="form-group">
                                <button type="submit" class="form-control-submit-button"><a target="_blank" style={{textDecoration: "none"}} href="payment.html">REGISTER</a></button>
                            </div>
                            <div class="form-message">
                                <div id="rmsgSubmit" class="h3 text-center hidden"></div>
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

export default AppDevelopment
