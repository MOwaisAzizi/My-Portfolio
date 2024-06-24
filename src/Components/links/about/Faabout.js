import React from "react";
import './about.css'
import { Row, Col, Button, Container } from "react-bootstrap";
import { FaDownload } from "react-icons/fa";
import CV from './CV.pdf'



const Faabout = (props) => {

    const downLoadCV = () => {
        const downLoadLink = document.createElement('a');
        downLoadLink.href = './CV of Mohammad Owais Azizi.docx'
        downLoadLink.download = 'CV of Mohammad Owais Azizi.docx'
        document.body.appendChild(downLoadLink)
        downLoadLink.click();
        document.body.removeChild(downLoadLink)
    }


    return (
        <div className="about mb-lg-3 mb-3" >
            <Container>
                <Row >
                    <Col className="text pt-0" lg={12} > <b><h1 data-aos="fade-up" className="mx-auto t-center pt-2 pt-gl-5 pt-md-5 pt-0">من کی هستم؟ </h1> </b>
                        <p data-aos="fade-up" style={{ direction: 'rtl' }} className="px-lg-5 mx-lg-5 center px-0 mx-0" >
                            من یک توسعه دهنده فرات اند با یک سال تجربه هستم که در افغانستان، هرات زندگی میکنم و
                            من حال بادگیری رشته کمپیوتر ساینس در دانشگاه هرات هستم.
                            من قبلا زیان انگلیسی را آموخته و بعد از آن وارد دانشگاه و موسسه واسا جهت یادگیری فرانت اند شدم و به درستی تمام اش کردم.
                            من علاقه شدید به یادگیری بیشتر توسعه وب از جمله بخش بک اند و تکنالوژی هوش مصنوعی دارم
                            .من قادر هستم که هر گونه ویب سایت و ویب اپلیکیشن را بسازم و علاقه مند به کار کردن روی پروژه های تیمی هستم.
                            من قبلا توسعه فرانت اند را در موسسه واسا تمام کرده و تصدیق نامه آنرا نیز دارم.
                            <br />
                            <div className="cvdiv mt-3">
                                <Button className="mb-2 mt-2 btn-primary-cv" data-aos="fade-right" data-aos-delay="400" ><a href={CV} download='CV' className="a-btn">دانلود سی وی <FaDownload /></a></Button>
                            </div>
                        </p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default Faabout