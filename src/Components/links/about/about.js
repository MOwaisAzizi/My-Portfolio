import React from "react";
import './about.css'
import { Link } from "react-router-dom";
import { Row, Col, Button, Container } from "react-bootstrap";
import { FaDownload } from "react-icons/fa";
import CV from './CV.pdf'

const About = (props) => {

  return (
    <div className="about mb-lg-3 mb-2 mt-3">
      <Container>
        <Row className="">
          <div className="contain">
            <Col className="text pt-0" lg={12} > <b><h1 data-aos="fade-up" className="mx-auto pt-2 pt-gl-5 pt-md-5 pt-md-5 pt-xs-0 t-center ">So who am I <span style={{ fontSize: '50px' }}>?</span></h1> </b>

              <p data-aos="fade-up" className="center px-0 mx-0 ps-2 ps-sm-0"> I am a professional front-end developer with one year exprence residing in city Herat, Afghanistan.
              Currently, I am pursuing a degree in computer science at Herat university. I have acquired proficiency in the English language
               and have successfully completed courses in wev development offered by both the university and WASSA Organization. I am
              keen on further expanding my knowledge in web development,particularly in the areas of backend developer and AI technology.
              I possess the capability to construct front-end websites and web applications proficiently and I am enthusiastic about 
              collaborating on joint projects.Additionally, I have obtained certicfication in frontend web development from WASSA Organization.

                <br />
                <div className="cvdiv mt-3">
                  <button className="mb-2 mt-2 btn-primary-cv px-2 py-1 px-md-2 py-md-1" data-aos="fade-left" data-aos-delay="300" ><a className="a-btn" href={CV} download='CV'>Download CV <FaDownload /></a></button>
                </div>
              </p>


              {props.child}

            </Col>
          </div>
        </Row>
      </Container>
    </div>
  )
}
export default About