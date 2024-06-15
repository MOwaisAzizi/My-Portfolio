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

              <p data-aos="fade-up" className="center px-0 mx-0"> I am  a frontend developper with 2 years exprence living in Afghanistan, Herat city
                and studing computer science in Herat university right now.
                I already learned English language and took university and WASSA Organization course
                for learning web development and i did it well.
                I am interested in learning more about web development that includes backend development and AI technology.
                I am able to build any frontend websites and web Applications and interested in building pair projects.
                I already finished frontend web development in WASSA Organization and has it's certicficate too.
                <br />
                <div className="cvdiv mt-3">
                  <Button className="mb-2 mt-2 btn-primary-cv" data-aos="fade-left" data-aos-delay="500" ><a className="a-btn" href={CV} download='CV'>Download CV <FaDownload /></a></Button>
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