
import './App.css';
import WebDesign from './WebDesign/WebDesign';

import Maintrainign from './Maintraining/Maintrainign';
import Webdevelopment from './Webdevelopment/Webdevelopment';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Navigation from './Components/Navigation/Navigation';
import Footer from './Components/Footer/Footer';
import ScrollToTop from './ScrollToTop/ScrollToTop';
import GraphicsDesign from './GraphicsDesign/GraphicsDesign';
import AppDevelopment from './AppDevelopment/AppDevelopment';


import LastCourse from './LastCourse/LastCourse';
import Nav from './Company/Nav/Nav';
import AboutSpinnerTech from './Company/AboutSpinnerTech/AboutSpinnerTech';
import FooterMain from './Company/FooterMain/FooterMain';
import Events from './Company/Events/Events';
import Infrastructure from './Company/Infrastructure/Infrastructure';
import OurValue from './Company/OurValue/OurValue';
import OurSkill from './Company/OurSkill/OurSkill';
import HappayClient from './Company/HappyClient/HappayClient';
import OurProcess from './Company/OurProcess/OurProcess';
import Mamber from './Company/Mamber/Mamber';

import Payment from './Company/Payment/Payment';

function App() {
  return (
    <div>
    <Router>
      
      {/* for mainpage  */}
      <Nav></Nav>


    {/* for training  */}
      {/* <Navigation></Navigation> */}
    
   
     <ScrollToTop>
        <Routes>

          
            {/* for training  */}
          
            {/* <Route path="/" element={<Maintrainign/>}></Route>
            <Route path="/web_design" element={<WebDesign/>}></Route>

            <Route path="/web_development" element={<Webdevelopment/>}></Route>
            <Route path="/graphices.html" element={<GraphicsDesign/>}></Route>
            <Route path="/app_dev.html" element={<AppDevelopment/>}></Route>

            <Route path="/seo.html" element={<Seo/>}></Route>
            <Route path="/reactcourse.html" element={<LastCourse/>}></Route> */}


            {/* FOR Company  */}

            <Route path="/company_pages/about_spinner_tech.htm" element={<AboutSpinnerTech></AboutSpinnerTech>}></Route>
            <Route path="/event.htm" element={<Events></Events>}></Route>
            <Route path="/company_pages/Infrastructure.htm" element={<Infrastructure></Infrastructure>}></Route>
            <Route path="/company_pages/our_values.htm" element={<OurValue></OurValue>}></Route>
            <Route path="/company_pages/our-skills.htm" element={<OurSkill></OurSkill>}></Route>
            <Route path="/company_pages/happy-client.htm" element={<HappayClient></HappayClient>}></Route>
            <Route path="/company_pages/our-process.htm" element={<OurProcess></OurProcess>}></Route>
            <Route path="/company_pages/our-member.htm" element={<Mamber></Mamber>}></Route>
            <Route path="/company_pages/payment-system.htm" element={<Payment></Payment>}></Route>
          
        </Routes>
     </ScrollToTop>
      {/* <Footer></Footer> */}
      <FooterMain></FooterMain>
    </Router>
     
 
    </div>
  );
}

export default App;
