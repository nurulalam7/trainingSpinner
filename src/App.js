
import './App.css';
import Navigation from './Components/Navigation/Navigation';
import Header from './Components/Header/Header';
import Description from './Components/Description/Description';
import Student from './Components/Student/Student';
import Testimonial from './Components/Testimonial/Testimonial';
import Newslettter from './Components/Newsletter/Newslettter';
// import Course from './Components/Course/Course';
// import Lighbox from './Components/Lightbox/Lighbox';


function App() {
  return (
    <div className="App">
   
     <Navigation/>
     <Header/>
     
    <Description></Description>
    <Student></Student>
    {/* <Lighbox></Lighbox> */}
    {/* <Course></Course> */}
    <Testimonial></Testimonial>
    <Newslettter></Newslettter>
    </div>
  );
}

export default App;
