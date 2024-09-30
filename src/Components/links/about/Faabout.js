import React from "react";
import './about.css'
import {Container } from "react-bootstrap";
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
        <div className="about mb-lg-3 mb-3 faAbout" >
            <Container>
    
                         <b>
                        <h1 data-aos="fade-up" className="mx-auto  t-center pt-2 pt-gl-5 pt-md-5 pt-0">
                        <span style={{ fontSize: '40px' }}>؟</span> <span>هستم</span> <span>کی</span> <span>من</span>  </h1>  </b>
                        <p data-aos="fade-up" data-aos-duration="800" style={{ direction: 'rtl' }} className="px-lg-5 mx-lg-5 center px-1  mx-0" >
                          من یک توسعه دهنده فرات اند با دو سال تجربه هستم که در افغانستان، هرات زندگی میکنم و محصل برحال 
                             رشته کمپیوتر ساینس در دانشگاه هرات هستم.
                            من قبلا زیان انگلیسی را آموخته و بعد از آن وارد دانشگاه و موسسه واسا جهت یادگیری فرانت اند شدم و به درستی تمام اش کردم.
                            من علاقه شدید به یادگیری بیشتر توسعه وب از جمله بخش بک اند و تکنالوژی هوش مصنوعی دارم
                            .من قادر هستم که هر گونه ویب سایت و ویب اپلیکیشن را بسازم و علاقه مند به کار کردن روی پروژه های تیمی هستم.
                            من قبلا توسعه فرانت اند را در موسسه واسا تمام کرده و تصدیق نامه آنرا نیز دارم.
                        </p>
                            <div className="cvdiv mt-3" data-aos="fade-left" data-aos-delay="300" data-aos-duration="1000">
                                <button style={{background: props.theme === 'dark' ?'#02f5fd': '#8ef7cd',boxShadow:props.theme === 'dark' ? '2px 5px 12px #22abaf':'4px 8px 15px rgba(0,0,0,0.2)'}} className="mb-2 mt-2 btn-primary-cv py-2 px-3" ><a style={{color: props.theme === 'dark' ?'white': 'black',}} href={CV} download='CV' className="a-btn">دانلود سی وی <FaDownload /></a></button>
                            </div>
            </Container>
        </div>
    )
}
export default Faabout