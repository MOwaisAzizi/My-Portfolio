import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import './exprence.css'
import pic4 from './pic4.png'


const Exprence = (props) => {
   return (
      <div data-aos="fade-in" data-aos-delay="200"  >
         <Container className="exprence mt-lg-2 mt-0">
               <div  className="img pt-lg-5 pt-md-5 pt-4" >
                  <div className="img"  data-aos="fade-right" data-aos-delay="50" data-aos-duration="2000">
                     <img src={pic4}></img>
                  </div>
               </div>

                  <div className="dtext">
                     <h3 data-aos="fade-up" className="ms-4"><b>
                     <span>W</span><span>h</span><span>a</span><span>t</span> <span>D</span><span>i</span><span>d</span> <span>I</span> <span>D</span><span>i</span><span>d</span> <span>?</span>
                        </b></h3>
                     <ul className="exp-ul ms-2 ms-sm-0" data-aos="fade-up" >
                        <li data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000">I have one and half year exprence in web developement.</li>
                        <li data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">Working as a apprentice in WASSA organization for 6 mounth.</li>
                        <li data-aos="fade-up" data-aos-delay="150" data-aos-duration="1000">Building numerous of projects in WASSA organization.</li>
                        <li data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">Building some funny games by using HTML,CSS, JS and react.</li>
                        <li data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">Beeing an active memeber of IT community in Herat university for about 4 mounth.</li>
                        <li data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">building more than 30 mini project by html, css,js, bootstrap, react in past one and half year.</li>
                     </ul>
                  </div>

         </Container>
      </div>
   )
}
export default Exprence