import React from "react";
import { Container } from "react-bootstrap";
import './exprence.css'
import pic4 from './pic4.png'


const Exprence = () => {
   return (
      <div data-aos="fade-in" data-aos-delay="200"  >
         <Container className="exprence mt-lg-2 mt-0 ">
            <div className="img pt-lg-5 pt-md-5 pt-4" >
               <div className="img" data-aos="fade-left" data-aos-delay="50" data-aos-duration="2000">
                  <img src={pic4}></img>
               </div>
            </div>

            <div className="dtext">
               <h2 data-aos="fade-up" ><b>
                  <span>W</span><span>h</span><span>a</span><span>t</span> <span>D</span><span>i</span><span>d</span> <span>I</span> <span>D</span><span>o</span> <span>?</span>
               </b></h2>
               
               <ul className="exp-ul ms-2 ms-sm-0" data-aos="fade-up" >
                  <li data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000">I have two years exprence in web developement.</li>
                  <li data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">Working as a apprentice in WASSA organization for 6 mounth.</li>
                  <li data-aos="fade-up" data-aos-delay="150" data-aos-duration="1000">Building numerous of projects in WASSA organization.</li>
                  <li data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">Building some funny games by using HTML,CSS, JS and react.</li>
                  <li data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">Beeing an active memeber of IT community and CS Of CS in Herat university for about 4 mounth.</li>
                  <li data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">building more than 40 mini projects by html, css,js, bootstrap and react in past two years.</li>
               </ul>
            </div>

         </Container>
      </div>
   )
}
export default Exprence