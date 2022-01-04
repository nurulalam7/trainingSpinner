import React from 'react'

const Head = () => {
    return (
        <div>
            <header className="ex-header" id="header">
            <div className="container">
               <div className="row">
                   <div className="col-md-12">
                   <h1 class="white">Web Design</h1>
                    <h4 style={{color: "#4cd137"}}>Price: 3000 TK</h4>
         
                   </div>
               </div>
           </div>
            </header>

            {/* breadcumbs */}

            <div className="ex-basic-1">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="breadcrumbs">
                            <a href="index.html">Home</a><i class="fa fa-angle-double-right"></i><span>Web Design</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

           
            

            
            
        </div>
    )
}

export default Head
