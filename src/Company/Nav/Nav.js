import React from 'react'
import { Link } from 'react-router-dom';

const Nav = () => {
   
    
   
    return (
        <div>
            <section className='header-top bg-light'>
                <div className="container">
                    <div className="row py-1">
                        <div className="header-top-item col-md-1 col-12 d-none d-md-block whatsapp">
                            <img src="asset/img/whatsapp.png" className="img-responsive" style={{height:"30px"}} />
                            <a href="https://wa.me/8801863202736" className="stretched-link"></a>
            
                        </div>
                        <div className="header-top-item col-md-6 col-12 d-flex align-items-center justify-content-center justify-content-md-end">
                            
                           <p> We Create Client Demanding Web Software & Mobile Application For Start-up & Enterprises </p>
        
                        </div>
                        <div
                             className="header-top-item col-md-5 d-flex align-items-center justify-content-center justify-content-md-end">

                            <a href="mailto:spinnertech@gmail.com"><img src="asset/img/feature_product/gmail.png"
                                    className="img-fluid pr-1" /> sabbirahmedmamun91@gmail.com</a>
                            <a href="tell:+8801826580966"><img src="asset/img/feature_product/phone-call.png"
                                    className="img-fluid pl-1" /> +8801826580966</a>

                        </div>
                    </div>
                </div>

            </section>

            {/* start markup for header bottom  */}
            <section className='header-bottom sticky-top' id="header">
                <div className="navbar-main">
                    <nav className='navbar navbar-expand-lg navbar-dark bg-white ' id='main_navbar'>
                       <div className="container">
                       <a className="navbar-brand" href="index.html">
                        <img src="asset/img/brand.png" alt="" className="rounded" />
                    </a>
                    <button className="navbar-toggler px-2" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {/* main nav  */}

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <a className="nav-link text-dark" href="index.html">HOME <span
                                        className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item dropdown">
                                <a 
                                className="nav-link text-dark dropdown-toggle" 
                                href="#" id="navbarDropdown" 
                                role="button"
                                data-toggle="dropdown" 
                                aria-haspopup="true" 
                                aria-expanded="false">
                                    SERVICE
                               
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <div   className="d-flex justify-content-start multiple-dropdown-main" >
                                        <div>

                                            <a className="dropdown-item" href="web-design.htm"><i
                                                    className="fas fa-layer-group"></i> Professional Web Design &
                                                Development</a>
                                            <a className="dropdown-item" href="mobile-app-dev.htm"><i
                                                    className="fas fa-mobile"></i> Mobile Application Development (Android &
                                                IOS)</a>
                                            <a className="dropdown-item" href="mobile-web-ux-ui.htm"><i
                                                    className="fas fa-fill-drip"></i> Mobile & Web Apps Design (UI/UX)</a>
                                            <a className="dropdown-item" href="custom-software-dev.htm"><i
                                                    className="fas fa-laptop-code"></i> Custom Software Development</a>
                                            <a className="dropdown-item" href="web-app.htm"><i className="fas fa-code"></i>
                                                Desktop Application Development</a>
                                            <a className="dropdown-item" href="ecommerce-woocommerce.htm"><i
                                                    className="fas fa-cart-plus"></i> eCommerce & WooCommerce
                                                Development</a>
                                            <a className="dropdown-item" href="graphics-design.htm"><i
                                                    className="fas fa-palette"></i> Graphics Design(Adobe photoshop &
                                                Illustrator)</a>
                                            <a className="dropdown-item" href="wordpress-theme-dev.htm"> <i
                                                    className="fab fa-wordpress"></i> Theme Development (Wordpress)</a>
                                            <a className="dropdown-item" href="business-package.htm"><i
                                                    className="fas fa-briefcase"></i> Startup Business
                                                Package(Wordpress)</a>
                                            <a className="dropdown-item" href="artificial-intelligence.htm"><i
                                                    className="fas fa-users-cog"></i> Artificial Intelligent & Machine
                                                learning Solution</a>
                                        </div>

                                        <div>
                                            <a className="dropdown-item" href="http://ITTraining.spinnertech.dev"><i
                                                    className="fas fa-user-tie"></i> Professional IT Training</a>
                                            <a className="dropdown-item" href="http://hosting.spinnertech.dev"><i
                                                    className="fas fa-globe"></i> Domain Hosting Service</a>
                                            <a className="dropdown-item" href="erp-solution.htm"><i
                                                    className="fas fa-chart-line"></i> ERP Solution</a>
                                            <a className="dropdown-item" href="seo.htm"><i className="fab fa-searchengin"></i>
                                                Search Engine Optimization(SEO)</a>
                                            <a className="dropdown-item" href="content-writting.htm"><i
                                                    className="fas fa-pen-nib"></i> Content Writing</a>
                                            <a className="dropdown-item" href="ev-vr-solution.htm"><i
                                                    className="fas fa-vr-cardboard"></i> EV VR Solution</a>
                                            <a className="dropdown-item" href="affiliated-marketing.htm"><i
                                                    className="fas fa-users"></i> Affiliated Marketing</a>
                                            <a className="dropdown-item" href="cctv.htm"><i className="fas fa-video"></i> CCTV
                                                Camera Service</a>
                                            <a className="dropdown-item" href="banking-solution.htm"><i
                                                    className="fas fa-university"></i> Banking & FinTech Solution</a>



                                        </div>
                                    </div>


                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link text-dark dropdown-toggle" href="#" id="navbarDropdown" role="button"
                                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    SOFTWARES
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <div className="d-flex justify-content-start multiple-dropdown-main">
                                        <div>
                                            <a className="dropdown-item" href="software_pages/accounting-software.htm"><i
                                                    className="fas fa-location-arrow"></i> Accounting Software</a>
                                            <a className="dropdown-item" href="software_pages/inventory-software.htm"><i
                                                    className="fas fa-location-arrow"></i> Inventory Software</a>
                                            <a className="dropdown-item" href="software_pages/mlm-software.htm"><i
                                                    className="fas fa-location-arrow"></i> MLM Software</a>
                                            <a className="dropdown-item" href="software_pages/restaurant-software.htm"><i
                                                    className="fas fa-location-arrow"></i> Restaurant Management</a>
                                            <a className="dropdown-item" href="software_pages/tours-travel-software.htm"><i
                                                    className="fas fa-location-arrow"></i> Tours & Travels Management</a>
                                            <a className="dropdown-item" href="software_pages/prescription-software.htm"><i
                                                    className="fas fa-location-arrow"></i> Prescription Management</a>
                                            <a className="dropdown-item"
                                                href="software_pages/school-management-software.htm"><i
                                                    className="fas fa-location-arrow"></i> School Management ERP</a>
                                            <a className="dropdown-item" href="software_pages/inventory-software.htm"><i
                                                    className="fas fa-location-arrow"></i> Invoice/Billing Software</a>
                                            <a className="dropdown-item" href="software_pages/hr-paryroll-software.htm"><i
                                                    className="fas fa-location-arrow"></i> HR & Payroll Software</a>
                                            <a className="dropdown-item" href="software_pages/medicine-shop-software.htm">
                                                <i className="fas fa-location-arrow"></i> Medicine Shop Management</a>




                                        </div>
                                        <div>
                                            <a className="dropdown-item" href="software_pages/point-of-sale-software.htm"><i
                                                    className="fas fa-location-arrow"></i> Point of Sales (POS)</a>
                                            <a className="dropdown-item"
                                                href="software_pages/freight-forwarding-software.htm"><i
                                                    className="fas fa-location-arrow"></i> Freight Forwarding Software</a>
                                            <a className="dropdown-item"
                                                href="software_pages/event-management-software.htm"><i
                                                    className="fas fa-location-arrow"></i> Event Management ERP</a>
                                            <a className="dropdown-item"
                                                href="software_pages/face-detection-software.htm"><i
                                                    className="fas fa-location-arrow"></i> Image, Face, Voice and Finger
                                                Detection Syestem</a>
                                            <a className="dropdown-item"
                                                href="software_pages/hospital-management-software.htm"><i
                                                    className="fas fa-location-arrow"></i> Hospital Management</a>
                                            <a className="dropdown-item"
                                                href="software_pages/hotel-management-software.htm"><i
                                                    className="fas fa-location-arrow"></i> Hotel Management</a>
                                            <a className="dropdown-item"
                                                href="software_pages/garments-mangement-software.htm"><i
                                                    className="fas fa-location-arrow"></i> Garments Management ERP</a>
                                            <a className="dropdown-item" href="software_pages/ticket-software.htm"><i
                                                    className="fas fa-location-arrow"></i> Ticket Management</a>
                                            <a className="dropdown-item"
                                                href="software_pages/fingerprint-device-software.htm"><i
                                                    className="fas fa-location-arrow"></i> Fingerprint Presence Device</a>
                                            <a className="dropdown-item" href="software_pages/cctv-software.htm"><i
                                                    className="fas fa-location-arrow"></i> CCTV Software and Android
                                                Systemt</a>



                                        </div>

                                    </div>


                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link text-dark dropdown-toggle" href="#" id="navbarDropdown" role="button"
                                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    COMPANY
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><Link className="dropdown-item" to="/company_pages/about_spinner_tech.htm">About
                                            Spinner Tech <span className="sr-only">(current)</span></Link></li>
                                    <li><Link className="dropdown-item" to="event.htm">Events</Link></li>
                                    <li><Link className="dropdown-item"
                                          to="/company_pages/Infrastructure.htm">Infrastructure</Link></li>
                                    <li><Link className="dropdown-item" to="/company_pages/our_values.htm">Our Values</Link></li>
                                    <li><Link className="dropdown-item" to="company_pages/our-skills.htm">Our Skills</Link></li>
                                    <li><Link className="dropdown-item" to="company_pages/happy-client.htm">Our Happy
                                            Clients</Link></li>
                                    <li><Link className="dropdown-item" to="company_pages/our-process.htm">Our Process</Link>
                                    </li>
                                    <li><Link className="dropdown-item" to="company_pages/our-member.htm">Our Member</Link></li>

                                    {/* <li className="nav-item dropdown nav-team"><a
                                            className="dropdown-item dropdown-toggle text-dark" href="/#" id="navbarDropdown"
                                            role="button" data-toggle="dropdown" aria-haspopup="true"
                                            aria-expanded="false">Our Team
                                        </a>
                                        <ul className="dropdown-menu " aria-labelledby="navbarDropdown">
                                            <li><a className="dropdown-item"
                                                    href="/company_pages/soft-development-team.htm">Software Development
                                                    Team</a></li>
                                            <li><Link className="dropdown-item" href="/company_pages/seo-team.htm">SEO Team</Link>
                                            </li>
                                        </ul>
                                    </li> */}


                                    <li><Link className="dropdown-item" to="company_pages/payment-system.htm">Payment
                                            System</Link></li>
                                    <li><a className="dropdown-item" href="company_pages/company-profile.htm">Spinner Tech
                                            Profile</a></li>
                                    <li><a className="dropdown-item" href="company_pages/testimonial.htm">Testimonial</a>
                                    </li>
                                    <li><a className="dropdown-item" href="company_pages/join-team.htm">Join The Team</a>
                                    </li>

                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-dark" target="_blank" href="training/index.html">TRAINING</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-dark" href="seo.htm">SEO </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-dark" href="domain_hosting.htm">DOMAIN & HOSTING</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-dark" href="blog.htm">BLOG</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-dark" href="contact-us.htm">CONTACT US</a>
                            </li>
                        </ul>

                    </div>


                       </div>
                    </nav>
                </div>

            </section>

            {/* section end  */}
             
            
            
        </div>
    )
}

export default Nav
