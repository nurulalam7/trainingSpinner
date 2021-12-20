import React from 'react'

const Lighbox = () => {
    return (
      <div id="details-lightbox" className="lightbox-basic zoom-anim-dialog mfg-hide">
          <div className="container">
              <div className="row">
              <button title="Close (Esc)" type="button" className="mfp-close x-button">×</button>
              <div className="col-lg-8">
                  <div className="image-container">
                  <img className="img-fluid" src="training/images/details-lightbox.jpg" alt="alternative" />
                   <div className="col-lg-4">
                   <h3>SEO Training Course</h3>
                    
                    <h5>For everybody</h5>
                    <p>The training course is dedicates to anyone passionate about the web and in need of improving their current online presence.</p>
                    <ul className="list-unstyled li-space-lg">
                        <li className="media">
                            <i className="fas fa-square"></i><div className="media-body">Link building framework</div>
                        </li>
                        <li className="media">
                            <i className="fas fa-square"></i><div className="media-body">Know your current position</div>
                        </li>
                        <li className="media">
                            <i className="fas fa-square"></i><div className="media-body">Partnering with blogs</div>
                        </li>
                        <li className="media">
                            <i className="fas fa-square"></i><div className="media-body">Naming your images</div>
                        </li>
                        <li className="media">
                            <i className="fas fa-square"></i><div className="media-body">Creating good sitemaps</div>
                        </li>
                        <li className="media">
                            <i className="fas fa-square"></i><div className="media-body">Writing for humans</div>
                        </li>
                    </ul>
                    <a className="btn-solid-reg mfp-close page-scroll" href="#register">Enroll Now</a> <a className="btn-outline-reg mfp-close as-button" href="#screenshots">BACK</a>
            
                   </div>
                  </div>
              </div>
              </div>
          </div>
      </div>
    )
}

export default Lighbox
