import React from 'react'

const LastCourse = () => {
    return (
        <div>
            <header id="header" className='ex-header'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 class="white">React</h1>
                            <h4 style={{color: "#4cd137"}}>Price: 3,000 TK</h4>
                
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
                              <a href="index.html">Home</a><i class="fa fa-angle-double-right"></i><span>React</span>
              
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* end of bruadcrums  */}

            <div className="ex-basic-2">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="image-container-large" style={{textAlign: "center"}}>
                             <img class="img-fluid" src="training/images/react.png" alt="alternative" />
                  
                            </div>

                            <div className="text-container">
                                <h3>About The Course</h3>
                                <p>This course is for anyone that wants to learn React and also for React developers looking to build some projects and sharpen their skills.

                                    The first project (Feedback App) is structured in a way so I can explain the fundamentals such as components, hooks, props, state, etc in a way that
                                    beginners can understand. The second project (Github Finder) will show you how to work with 
                                    3rd party APIs and the third project (House Marketplace) is a larger app that uses Firebase 9 and includes authentication, Firestore queries, file storage and more.</p>
                                <h3>Course Modules :</h3>

                                <div className="row">
                                    <div className="col-md-6">
                                    <ul class="list-unstyled li-space-lg">
                                    <li class="media">
                                        <i class="fas fa-square"></i>
                                        <div class="media-body">Learn modern React by building projects</div>
                                    </li>
                                    <li class="media">
                                        <i class="fas fa-square"></i>
                                        <div class="media-body">Feedback app with in depth explanation of React fundamentals</div>
                                    </li>
                                    <li class="media">
                                        <i class="fas fa-square"></i>
                                        <div class="media-body">Learn React hooks and how to create custom hooks</div>
                                    </li>
                                    <li class="media">
                                        <i class="fas fa-square"></i>
                                        <div class="media-body">Suitable For Both Beginners & Intermediate React Developers</div>
                                    </li>
                                    <li class="media">
                                        <i class="fas fa-square"></i>
                                        <div class="media-body">Build a house marketplace with React and Firebase 9</div>
                                    </li>
                                    <li class="media">
                                        <i class="fas fa-square"></i>
                                        <div class="media-body">Learn how to use context and reducers to manage global state</div>
                                    </li>>
                                </ul>
                                    </div>

                                    {/* end of col  */}

                                    <div className="col-md-6">
                                    <h3>Marketplace</h3>
                                <ul class="list-unstyled li-space-lg">
                                    <li class="media">
                                        <i class="fas fa-square"></i>
                                        <div class="media-body">Fiverr</div>
                                    </li>
                                    <li class="media">
                                        <i class="fas fa-square"></i>
                                        <div class="media-body">Freelancer</div>
                                    </li>
                                </ul>
                                <h3>Software Taught</h3>
                                <ul class="list-unstyled li-space-lg">
                                    <li class="media">
                                        <i class="fas fa-square"></i>
                                        <div class="media-body">Web Browser</div>
                                    </li>
                                    <li class="media">
                                        <i class="fas fa-square"></i>
                                        <div class="media-body">VS Code</div>
                                    </li>
                                    <li class="media">
                                        <i class="fas fa-square"></i>
                                        <div class="media-body">Web Server</div>
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
                                    <td>30 <span style={{fontSize:"13px"}}>(3 dayes in a week)</span></td>
                                </tr>
                                <tr>
                                    <td>Projects</td>
                                    <td>4</td>
                                    <td>2</td>
                                </tr>
                            </tbody>
                        </table>
                        <h3>Career Opportunity</h3>
                        <p>React JS is a powerful tool for front-end developers to build UIs as it makes the process of UI building faster, efficient,
                             and effective. While there are a variety of front-end frameworks which are very popular, like Angular and Vue.js, 
                             React JS is the perfect framework to get started with</p>
                             <p>Needless to say, this is the best time to learn React JS as many giants like Uber, Airbnb, Facebook, Instagram, Netflix, Udemy, 
                                 and Twitter use React. Many companies have also 
                                 invested heavily in the React ecosystem to build new tools and libraries to accelerate and simplify React development. </p>
                        <ul class="list-unstyled li-space-lg">
                                    <li class="media">
                                        <i class="fas fa-square"></i>
                                        <div class="media-body">Frontend Developer</div>
                                    </li>
                                    <li class="media">
                                        <i class="fas fa-square"></i>
                                        <div class="media-body">Frontend JavaScript Developer</div>
                                    </li>
                                    <li class="media">
                                        <i class="fas fa-square"></i>
                                        <div class="media-body">React Developer</div>
                                    </li>
                                </ul>




                            </div>

                            {/* end of text-container  */}

                            <div className="text-container">
                              <h2 style={{textAlign: "center" ,marginBottom: "20px"}}>Enroll Now</h2>
                             {/* registration  */}

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
                                    <label style={{paddingRight: "20px", color:" rgb(0, 119, 255)"}}>Gender</label>
                                    <input type="radio" name="gender" value="male" style={{margin: "10px"}} />Male
                                    <input type="radio" name="gender" value="female" style={{margin:"10px"}}/>Female
                                    <input type="radio" name="gender" value="others" style={{margin:"10px"}}/>Others
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
                                    <input type="radio" name="payment" value="manual" style={{margin:"10px"}} />manual
                                    <input type="radio" name="payment" value="online" style={{margin:"10px"}} />online payment
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

export default LastCourse
