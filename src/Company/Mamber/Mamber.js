import React from 'react'

const Mamber = () => {
    return (
        <div>
            <section className="banner our-member-banner ">
              <h2 className="banner-title">OUR MEMBER</h2>
            </section>

            <section className="agent">
        <div className="container">
            <h3 className="text-center font-weight-bold">OUR AGENT</h3>
            <div className="title-div pb-4">
                <span className="bottom-icon"><i className="fas fa-arrow-alt-circle-left"></i><span className="p-1"></span><i className="fas fa-arrow-alt-circle-right"></i></span>
            </div>

            <div className="row">
                <div className="col-md-4 mt-3">
                    <div className="agent-wrapper">
                        <img src="../asset/img/company/team/sajib.jpeg" className="img-fluid rounded-circle" alt="" />
                        <div>
                            <hr />
                            <ul className="list-unstyled">
                                <li className="font-weight-bold"><i className="fas fa-user " /> Enamul Haq Sajib</li>
                                <li><i className="fas fa-envelope-open-text"></i> ehsajib11@gmail.com</li>
                                <li> <i className="fas fa-phone-volume"></i> 01766644467</li>
                                <li><i className="fas fa-search-location"></i> 24 No Word,Dhangobesona,Rupatali.</li>
                                <li><i className="fas fa-map-signs"></i> Barisal Sador</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 mt-3">
                    <div className="agent-wrapper">
                        <img src="../asset/img/company/team/no-avatar.png" className="img-fluid rounded-circle" alt="" />
                        <div>
                            <hr />
                            <ul className="list-unstyled">
                                <li className="font-weight-bold"><i className="fas fa-user " /> MD. Arif</li>
                                <li><i className="fas fa-envelope-open-text"></i> info@aibs.com.my</li>
                                <li> <i className="fas fa-phone-volume"></i> +60 11-1122 9452</li>

                                <li><i className="fas fa-search-location"></i> Zenith Corporate Park,
                                    G-77-02, Kelana Jaya SS7/26 | Petaling Jaya,</li>
                                <li><i className="fas fa-map-signs"></i> 47301, Selangor, Malaysia</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 mt-3">
                    <div className="agent-wrapper">
                        <img src="../asset/img/company/team/no-avatar.png" className="img-fluid rounded-circle" alt="" />
                        <div>
                            <hr />
                            <ul className="list-unstyled">
                                <li className="font-weight-bold"><i className="fas fa-user " /> MD. Masud Rana Gazi</li>
                                <li><i className="fas fa-envelope-open-text"></i> developermasudrana@gmail.com</li>
                                <li> <i className="fas fa-phone-volume"></i> 01834329732</li>
                                <li><i className="fas fa-search-location"></i> Mohammadbag, MeragNagar, Kadamtoli,</li>
                                <li><i className="fas fa-map-signs"></i> 1362, Dhaka, Bangladesh</li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </div>


    </section>
        </div>
    )
}

export default Mamber
