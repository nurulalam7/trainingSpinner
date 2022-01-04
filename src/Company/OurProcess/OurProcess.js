import React from 'react'
import Sidebar from '../Sidebar/Sidebar'

const OurProcess = () => {
    return (
        <div>
             <section class="banner process-banner">
                  <h2 class="banner-title">Our Process</h2>
             </section>

             <section className='body-section'>
                 <div className="container">
                     <div className="row">
                         <div className="col-md-4 sidebar">
                             <Sidebar></Sidebar>
                         </div>

                         <div class="col-md-8" style={{paddingLeft: "15px", borderLeft: "2px solid #eeee"}}>
                    <div class="services__content--info-text">
                        <h3>Website Maintenance Services</h3>
                        <p>Website maintenance is great for keeping your website up-to-date, but it can also be used
                            to integrate new features, enhancing your website's functionality and making it more
                            interactive.</p>

                    </div>

                    <div class="design--process mt-4 mb-4">
                        <div class="process_img">
                            <img src="../asset/img/company/design-process.jpg" class="img-fluid" alt="" />
                        </div>

                        <div class="process__content mt-4">
                            <h5>Ten Phases of the Web Site Design and Development Process.</h5>
                            <p>Spinner Tech Ltd. is a full service internet marketing firm, offering php my-sql driven
                                web design and development, and premade ready-to-go web application Service Company.
                                We deliver the best dynamic, advanced, rich web application development is exactly
                                what you are looking for.</p>
                            <p>Building a website, like building a house, requires planning and thought in order for
                                it to be successful website. There are few process will give you a guide to know
                                more about our workfollow . I would be happy to help you at each step in the
                                process.</p>

                        </div>

                        <div class="process__step">
                            <h4>Step-1: Preparation Phase</h4>
                            <ul class="list-unstyled">
                                <li><span><i class="fas fa-long-arrow-alt-right"></i></span>Gather client content
                                </li>
                                <li><span><i class="fas fa-long-arrow-alt-right"></i></span>Register domain</li>
                                <li><span><i class="fas fa-long-arrow-alt-right"></i></span>Deploy client extranet
                                </li>
                            </ul>
                        </div>

                        <div class="process__step">
                            <h4>Step-2: Planning Phase</h4>
                            <ul class="list-unstyled">
                                <li><span><i class="fas fa-long-arrow-alt-right"></i></span>Write project plan</li>
                                <li><span><i class="fas fa-long-arrow-alt-right"></i></span>Create site blueprint
                                </li>
                                <li><span><i class="fas fa-long-arrow-alt-right"></i></span>Establish project
                                    timeline</li>
                            </ul>
                        </div>

                        <div class="process__step">
                            <h4>Step-3: Graphic Design Phase</h4>
                            <ul class="list-unstyled">
                                <li><span><i class="fas fa-long-arrow-alt-right"></i></span>Find stock images</li>
                                <li><span><i class="fas fa-long-arrow-alt-right"></i></span>Create site design
                                    mockup</li>
                                <li><span><i class="fas fa-long-arrow-alt-right"></i></span>Post mockup on extranet
                                    for client review</li>
                                <li><span><i class="fas fa-long-arrow-alt-right"></i></span>Revise mockup based on
                                    clientâ€™s input</li>
                                <li><span><i class="fas fa-long-arrow-alt-right"></i></span>Obtain final approval on
                                    design</li>


                            </ul>
                        </div>

                        <div class="process__step">
                            <h4>Step-4: Build Phase</h4>
                            <ul class="list-unstyled">
                                <li><span><i class="fas fa-long-arrow-alt-right"></i></span>Review client content
                                </li>
                                <li><span><i class="fas fa-long-arrow-alt-right"></i></span>Slice mockup into images
                                </li>
                                <li><span><i class="fas fa-long-arrow-alt-right"></i></span>Create master HTML
                                    template page</li>
                                <li><span><i class="fas fa-long-arrow-alt-right"></i></span>Review client content
                                </li>
                                <li><span><i class="fas fa-long-arrow-alt-right"></i></span>Create CSS stylesheet
                                </li>
                                <li><span><i class="fas fa-long-arrow-alt-right"></i></span>Test and tweak page in
                                    supported browsers</li>
                                <li><span><i class="fas fa-long-arrow-alt-right"></i></span>Create additional pages
                                    from master HTML template and add client content to each</li>
                                <li><span><i class="fas fa-long-arrow-alt-right"></i></span>Build and test contact
                                    form</li>
                            </ul>
                        </div>

                        <div class="process__step">
                            <h4>Step-5: Review Phase</h4>
                            <ul class="list-unstyled">
                                <li><span><i class="fas fa-long-arrow-alt-right"></i></span>Submit site for client
                                    review</li>
                                <li><span><i class="fas fa-long-arrow-alt-right"></i></span>Revise as needed</li>
                                <li><span><i class="fas fa-long-arrow-alt-right"></i></span>Obtain final client
                                    approval</li>
                            </ul>
                        </div>



                        <div class="process__step">
                            <h4>Step-6: Pre-Production</h4>
                            <ul class="list-unstyled">
                                <li><span><i class="fas fa-long-arrow-alt-right"></i></span>Register domain</li>
                                <li><span><i class="fas fa-long-arrow-alt-right"></i></span>Create (physical) job
                                    fulder</li>
                                <li><span><i class="fas fa-long-arrow-alt-right"></i></span>Enter job into
                                    Production spreadsheet</li>
                                <li><span><i class="fas fa-long-arrow-alt-right"></i></span>Place fulder in queue to
                                    await production</li>
                            </ul>
                        </div>
                        <div class="process__step">
                            <h4>Step-7: Preparation</h4>
                            <ul class="list-unstyled">
                                <li><span><i class="fas fa-long-arrow-alt-right"></i></span>Choose a template</li>
                                <li><span><i class="fas fa-long-arrow-alt-right"></i></span>Set-up local fulder and
                                    project files</li>
                                <li><span><i class="fas fa-long-arrow-alt-right"></i></span>Create hosting and FTP
                                    account</li>
                                <li><span><i class="fas fa-long-arrow-alt-right"></i></span>Submit intake form to
                                    copywriting department</li>
                                <li><span><i class="fas fa-long-arrow-alt-right"></i></span>Assign project to
                                    in-house or outside team member</li>

                            </ul>
                        </div>
                        <div class="process__step">
                            <h4>Step-8: Production</h4>
                            <ul class="list-unstyled">
                                <li><span><i class="fas fa-long-arrow-alt-right"></i></span>Production</li>
                                <li><span><i class="fas fa-long-arrow-alt-right"></i></span>Obtain website copy from
                                    copywriting department</li>
                                <li><span><i class="fas fa-long-arrow-alt-right"></i></span>Create pages from
                                    template and add client content to each</li>
                                <li><span><i class="fas fa-long-arrow-alt-right"></i></span>Embed map, if
                                    appropriate, and customer video</li>
                                <li><span><i class="fas fa-long-arrow-alt-right"></i></span>Set up and test contact
                                    form</li>
                                <li><span><i class="fas fa-long-arrow-alt-right"></i></span>Add title tags, META
                                    description and keyword tags to each page</li>
                                <li><span><i class="fas fa-long-arrow-alt-right"></i></span>Point domain to host
                                    servers</li>
                                <li><span><i class="fas fa-long-arrow-alt-right"></i></span>Create Google Analytics
                                    account</li>
                                <li><span><i class="fas fa-long-arrow-alt-right"></i></span>Create and submit XML
                                    Sitemap
                                </li>
                            </ul>
                        </div>
                        <div class="process__step">
                            <h4>Step-9: Approval</h4>
                            <ul class="list-unstyled">
                                <li><span><i class="fas fa-long-arrow-alt-right"></i></span>Contact client for
                                    review</li>
                                <li><span><i class="fas fa-long-arrow-alt-right"></i></span>Submit revisions to
                                    designer</li>
                                <li><span><i class="fas fa-long-arrow-alt-right"></i></span>Contact client for final
                                    approval</li>
                                <li><span><i class="fas fa-long-arrow-alt-right"></i></span> File job fulder</li>
                            </ul>
                        </div>
                        <div class="process__step">
                            <h4>Step-10: Delivery and SEO</h4>
                            <ul class="list-unstyled">
                                <li><span><i class="fas fa-long-arrow-alt-right"></i></span>Upload to your site</li>
                                <li><span><i class="fas fa-long-arrow-alt-right"></i></span>Delivery and enjoy.</li>
                                <li><span><i class="fas fa-long-arrow-alt-right"></i></span>Excise better search
                                    engine promotion.</li>
                            </ul>
                        </div>
                    </div>





                    <div class="services__button m-auto text-center">
                        <a class="btn btn-info pl-4 pr-4" href="#" role="button"><span><i class="fas fa-link"></i></span>Request for a Free Quote</a>

                    </div>
                </div>
                     </div>
                 </div>

             </section>

            
        
    
        </div>
    )
}

export default OurProcess
