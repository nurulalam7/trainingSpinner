import React from 'react'

const Course = () => {
    return (
        <div className="cards">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                    <h2>All Courses</h2>
                    <p class="p-heading">Here are the main topics that will be covered in the SEO training course. They cover all the basics of SEO and even some advanced techniques that will help you along the way</p>
          
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="card">
                            <div className="card-image">
                            <i class="fas fa-pencil-ruler"></i>
          
                            </div>
                            <div className="card-body">
                            <h4 class="card-title">Web Design</h4>
                            <p>Price: 3000 TK</p>
                            <button class="btn btn-outline-info"><a style="text-decoration: none;" href="web_details.html">View Details</a></button>
               
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-image">
                            <i class="fas fa-file-code"></i>
                     
                            </div>
                            <div className="card-body">
                            <h4 class="card-title">Web Development</h4>
                            <p>Price: 3000 TK</p>
                            <button class="btn btn-outline-info"><a style="text-decoration: none;" href="web_dev_details.html">View Details</a></button>
            
                            </div>
                        </div>

                        
                    </div>
                </div>
            </div>
        </div>
      
    )
}

export default Course
