import React from "react";
import './about.css'
import {Container } from "react-bootstrap";
import { FaDownload } from "react-icons/fa";
import CV from './CV.pdf'
import { memo } from "react";

const Faabout = (props) => {

    return (
        <div className="about mb-lg-3 mb-3 faAbout" >
            <Container>
        
                        <h1 data-aos="fade-up" className="mx-auto  t-center pt-2 pt-gl-5 pt-md-5 pt-0">
                        <span style={{ fontSize: '40px' }}>؟</span> <span>هستم</span> <span>کی</span> <span>من</span>  </h1> 
                        <p data-aos="fade-up" data-aos-duration="800" style={{ direction: 'rtl' }} className="px-lg-5 mx-lg-5 center px-1  mx-0" >
                          من یک توسعه دهنده فرات اند با دو سال تجربه هستم که در افغانستان، هرات زندگی میکنم و محصل برحال 
                             رشته کمپیوتر ساینس در دانشگاه هرات هستم.
                            من قبلا زیان انگلیسی را آموخته و بعد از آن وارد دانشگاه و موسسه واسا جهت یادگیری فرانت اند شدم و به درستی تمام اش کردم.
                            من علاقه شدید به یادگیری بیشتر توسعه وب از جمله بخش بک اند و تکنالوژی هوش مصنوعی دارم
                            .من قادر هستم که هر گونه ویب سایت و ویب اپلیکیشن را بسازم و علاقه مند به کار کردن روی پروژه های تیمی هستم.
                            بر علاوه من بیشتر ده تصدیق نامه از موسسات مختلف که تصدیق نامه توسعه فرانت اند موسسه واسا هم شامل آن میشود دارم.
                        </p>
                            <div className="cvdiv mt-3" data-aos="fade-left" data-aos-delay="250" data-aos-duration="1000">
                                <button style={{background: props.theme === 'dark' ?'#02f5fd': '#8ef7cd',boxShadow:props.theme === 'dark' ? '0px 2px 8px   rgba(14, 205, 211,0.8)':'0px 3px 12px rgba(0,0,0,0.2)'}} className="mb-2 mt-2 btn-primary-cv py-2 px-3" ><a style={{color: props.theme === 'dark' ?'white': 'black',}} href={CV} download='CV' className="a-btn">دانلود سی وی <FaDownload /></a></button>
                            </div>
            </Container>
        </div>
    )
}
export default memo(Faabout)