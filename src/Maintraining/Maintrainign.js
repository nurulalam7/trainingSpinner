import React from 'react'


import Header from './../Components/Header/Header';
import Navigation from './../Components/Navigation/Navigation';
import Description from './../Components/Description/Description';
import Student from './../Components/Student/Student';
import Testimonial from './../Components/Testimonial/Testimonial';
import Newslettter from '../Components/Newsletter/Newslettter';
// import Course from '../Components/Course/Course';

const Maintrainign = () => {
    return (
        <div>
            <Header></Header>
            <Navigation></Navigation>
            <Description></Description>
            <Student></Student>
            {/* <Course></Course> */}
            <Testimonial></Testimonial>
            <Newslettter></Newslettter>
            
        </div>
    )
}

export default Maintrainign
