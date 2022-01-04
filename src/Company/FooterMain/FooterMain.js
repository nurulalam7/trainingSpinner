import React from 'react'

const FooterMain = () => {
    return (
        <div>
           <section className='footer-section'>
               <div className="container">
                   <div className="row">
                      <div className="col-md-3">
                        <h6 class="border-bottom pb-1 footer-title">Services</h6>
                            <ul class="list-unstyled">
                                <li><a href="../web-design.htm">Web design & development</a></li>
                                <li><a href="../mobile-app-dev.htm">Mobile Application Development</a></li>
                                <li><a href="../web-app.htm">Desktop Application Development</a></li>
                                <li><a href="mobile-web-ux-ui.htm">Mobile & Web Apps Design (UI/UX)</a></li>
                                <li><a href="../graphics-design.htm">Graphics Design(photoshop & Illustrator)</a></li>
                                <li><a href="ecommerce-woocommerce.htm"> eCommerce & WooCommerce Development </a></li>
                                <li><a href="../wordpress-theme-dev.htm"> Wordpress Development</a></li>
                                <li><a href="../seo.htm">Search Engine Optimization (SEO)</a></li>
                                <li><a href="../erp-solution.htm">ERP Solution</a></li>
                                <li><a href="#">Professional IT Training</a></li>

                            </ul>
                      </div>

                      <div className="col-md-3">
                            <h6 class="border-bottom pb-1 footer-title">Softwares</h6>
                                <ul class="list-unstyled">
                                    <li><a href="../software_pages/accounting-software.htm">Accounting Software</a></li>
                                    <li><a href="software_pages/point-of-sale-software.htm"> Point of Sales (POS)</a></li>
                                    <li><a href="../software_pages/school-management-software.htm"> School Management ERP</a></li>
                                    <li><a href="software_pages/restaurant-software.htm"> Restaurant Management)</a></li>
                                    <li><a href="../software_pages/ticket-software.htm"> Ticket Management</a></li>
                                    <li><a href="../software_pages/hotel-management-software.htm"> Hotel Management </a></li>
                                    <li><a href="../software_pages/hospital-management-software.htm"> Hospital Management</a></li>
                                    <li><a href="software_pages/inventory-software.htm"> Inventory Software</a></li>
                                    <li><a href="../software_pages/inventory-software.htm"> Invoice/Billing Software</a></li>
                                    <li><a href="../software_pages/medicine-shop-software.htm"> Medicine Shop Management</a></li>

                                </ul>
                      </div>

                      <div className="col-md-3">
                        <div class="text-center">
                            <img src="../asset/img/brand.png" class="img-fluid" alt="" />
                        </div>

                        <div class="brand-info">
                            <p>
                                A professional eCommerce and software development company in Bangladesh providing a range of affordable custom website design, inexpensive e-commerce web site design services to clients across the world. Spinner Tech is a professional website design and software development company in Bangladesh with a good reputation, and open skill-set. We regularly deliver creative, effective web designs and solutions that show the qualities, needs, and vision of our clients. Our goal is the success of our client’s online and offline branding, communications and marketing strategy.
                            </p>
                        </div>
                      </div>

                      <div className="col-md-3">
                            <h6 class="border-bottom pb-1 footer-title">Get In Touch</h6>
                            <h6 class="text-info font-weight-bold pt-2">Head Office :</h6>
                            <ul class="list-unstyled">
                                <li><i class="fas fa-location-arrow"></i> Hakim Center(1st floor), East of the Bahaddar Bari Pond Area,</li>
                                <li><i class="fas fa-map-marker"></i> 4212, Bahaddarhat, Chittagong</li>
                                <li><i class="fas fa-phone-square-alt"></i> +8801826580966</li>
                                <li><i class="fas fa-envelope"></i> sabbirahmedmamun91@gmail.com</li>
                            </ul>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3689.7831865633243!2d91.81978251432174!3d22.36181404631155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30acd922d0969cb1%3A0xe6e75f52bc920bb!2sSpinner%20Tech%20Ltd!5e0!3m2!1sen!2sbd!4v1639901255552!5m2!1sen!2sbd" width="100%" height="120" style={{border:"0"}} allowfullscreen="" loading="lazy"></iframe>
                
                      </div>
                   </div>
               </div>
           </section>

           {/* footer bootom start  */}

           <section className='footer-bottom'>
               <div className="container">
                   <div className="row">
                       <div className="col-md-8">
                           <div>
                           <ul class="list-unstyled d-flex justify-content-start">
                            <li><a href="about_spinner_tech.htm" target="_blank">About us</a> <span>|</span></li>

                            <li><a href="our-member.htm" target="_blank">Member</a> <span>|</span></li>

                            <li><a href="soft-development-team.htm" target="_blank">Development Team</a> <span>|</span></li>
                            <li><a href="seo-team.htm" target="_blank">SEO Team</a> <span>|</span></li>

                            <li><a href="company-profile.htm" target="_blank">Profile</a> <span>|</span></li>

                            <li><a href="payment-system.htm" target="_blank">Payment System</a> <span>|</span></li>

                        </ul>
                           </div>
                       </div>
                       <div className="col-md-2">
                            <a href="#">
                                <img src="../asset/img/get-in-play-store.png" class="img-fluid" alt="" />
                            </a>
                       </div>

                       
                   </div>
               </div>
           </section>
        </div>
    )
}

export default FooterMain
