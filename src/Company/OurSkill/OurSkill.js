import React from 'react'
import Sidebar from '../Sidebar/Sidebar'

const OurSkill = () => {
    return (
        <div>
             <section class="banner skills-banner">
                <h2 class="banner-title">Our Skills</h2>
              </section>

              <section className='skills-body'>
                  <div className="container">
                      <div className="row">
                          <div className="col-md-4 sidebar">
                             

                           <Sidebar></Sidebar>
                          </div>

                          <div className="col-md-8">
                          <div class="pt-4">
                        <h5 class="skills-title"><i class="fas fa-language"></i> Development Languages/ Tools</h5>
                        <p>C#.Net, VB.Net, Visual Basic, Developer 2000, Java, J2EE, Crystal Report</p>
                        <h5 class="skills-title"><i class="fas fa-code"></i> Web Development Script/Tools</h5>
                        <p>ASP. Net, ASP, PHP, JSP, JavaScript, Dream Weaver</p>
                        <h5 class="skills-title"><i class="fas fa-cog"></i> CMS</h5>
                        <p>Joomla, WordPress, osCommerce, Drupal, Zencart, Magento Report</p>
                        <h5 class="skills-title"><i class="fas fa-database"></i> RDBMS</h5>
                        <p>Oracle, MS SQL Server, MySql</p>
                        <h5 class="skills-title"><i class="fab fa-cloudversify"></i> Web Servers</h5>
                        <p>Microsoft IIS, Lotus Domino Server, Apache</p>
                        <h5 class="skills-title"><i class="fas fa-file-alt"></i> Groupware & Document Management</h5>
                        <p>Microsoft SharePoint Services, Lotus Notes & Domino</p>
                        <h5 class="skills-title"><i class="fab fa-windows"></i> Operating System</h5>
                        <p>Windows, Linux, Unix</p>
                        <h5 class="skills-title"><i class="fas fa-fill"></i> Multimedia/Graphics</h5>
                        <p>Macromedia- Director, Flash, AuthorWare, Adobe- Photoshop, Illustrator, CorelDRAW</p>
                        <h5 class="skills-title"><i class="fas fa-user-circle"></i> Design Methodologies</h5>
                        <p>UML, RUP</p>

                    </div>
                          </div>
                      </div>
                  </div>
              </section>
        </div>
    )
}

export default OurSkill
