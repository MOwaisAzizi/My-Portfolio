import React, { useEffect, useRef } from "react";
import './ablity.css'
import { Container } from "react-bootstrap";

const Ablity = ({theme}) => {

  const style={
    background: theme == 'dark' ?'#52d3d8': '#98eecc',
    color: theme == 'dark' ? 'white' : 'black',
    boxShadow:theme == 'dark' ? '7px 7px 15px #22abaf':'5px 5px 15px #49bc8e'
  }
  
  const animatedRef1 = useRef(null)
  const animatedRef2 = useRef(null)
  const animatedRef3 = useRef(null)
  const animatedRef4 = useRef(null)
  const animatedRef5 = useRef(null)
  const animatedRef6 = useRef(null)
  const animatedRef7 = useRef(null)
  const animatedRef8 = useRef(null)
  const animatedRef9 = useRef(null)
  const animatedRef10 = useRef(null)
  const animatedRef11 = useRef(null)
  const animatedRef12 = useRef(null)

  useEffect(() => {
    const option = {
      root: null,
      rootMargin: '0px',
      threshold: 0.2
    }

    const callback = (entries, observer) => {
      const [entry] = entries

      if (entry.isIntersecting) {
        animatedRef1.current.classList.add('html')
        animatedRef2.current.classList.add('css')
        animatedRef3.current.classList.add('js')
        animatedRef4.current.classList.add('bootstrap')
        animatedRef5.current.classList.add('react')
        animatedRef6.current.classList.add('API')
        animatedRef7.current.classList.add('mysql')
        animatedRef8.current.classList.add('ICDL')
        animatedRef9.current.classList.add('java')
        animatedRef10.current.classList.add('farsi')
        animatedRef11.current.classList.add('english')
        animatedRef12.current.classList.add('pashto')
        observer.unobserve(entry.target)
      }
    }
    const observer = new IntersectionObserver(callback, option)
    observer.observe(animatedRef1.current, animatedRef2.current, animatedRef3.current,
      animatedRef4.current, animatedRef6.current,
      animatedRef7.current, animatedRef8.current, animatedRef9.current, animatedRef10.current,
      animatedRef11.current, animatedRef12.current)

    return () => {

      if (animatedRef1.current)
        observer.unobserve(animatedRef1.current)
      if (animatedRef2.current)
        observer.unobserve(animatedRef2.current)
      if (animatedRef3.current)
        observer.unobserve(animatedRef3.current)
      if (animatedRef4.current)
        observer.unobserve(animatedRef4.current)
      if (animatedRef5.current)
        observer.unobserve(animatedRef5.current)
      if (animatedRef6.current)
        observer.unobserve(animatedRef6.current)
      if (animatedRef7.current)
        observer.unobserve(animatedRef7.current)
      if (animatedRef8.current)
        observer.unobserve(animatedRef8.current)
      if (animatedRef9.current)
        observer.unobserve(animatedRef9.current)
      if (animatedRef10.current)
        observer.unobserve(animatedRef10.current)
      if (animatedRef11.current)
        observer.unobserve(animatedRef11.current)
      if (animatedRef12.current)
        observer.unobserve(animatedRef12.current)

    }

  }, [])


  return (
    <Container className="pb-5 mt-5">
      <div  >
        <div class="skills">
          <h1>My Skills</h1>

          <li><p>HTML</p>
            <span class="bar"><span class="animation" ref={animatedRef1}></span></span>
          </li>

          <li><p>CSS</p>
            <span class="bar"><span class="animation" ref={animatedRef2}></span></span>
          </li>

          <li><p>JavaScript</p>
            <span class="bar"><span class="animation " ref={animatedRef3}></span></span>
          </li>

          <li><p>Bootstrap</p>
            <span class="bar"><span class="animation" ref={animatedRef4}></span></span>
          </li>

          <li><p>React</p>
            <span class="bar"><span class="animation" ref={animatedRef5}></span></span>
          </li>

          <li><p>API</p>
            <span class="bar"><span class="animation" ref={animatedRef6}></span></span>
          </li>

          <li><p>MySql</p>
            <span class="bar"><span class="animation" ref={animatedRef7}></span></span>
          </li>

          <li><p>ICDL</p>
            <span class="bar"><span class="animation" ref={animatedRef8}></span></span>
          </li>

          <li><p>Java</p>
            <span class="bar"><span class="animation" ref={animatedRef9}></span></span>
          </li>
        </div>



        <h2 className="h2Lang"><b>Languages</b></h2>
        <div className="skills mb-5 mb-md-5">
          <li><p>Farsi</p>
            <span class="bar"><span class="animation" ref={animatedRef10}></span></span>
          </li>

          <li><p>English</p>
            <span class="bar"><span class="animation" ref={animatedRef11}></span></span>
          </li>

          <li><p>Pashto</p>
            <span class="bar"><span class="animation" ref={animatedRef12}></span></span>
          </li>
        </div>

        <h2 data-aos="fade-up" className="mb-3">
          <b> Properties</b>
        </h2>
        <div className="dspan" >
          <span data-aos="fade-left" data-aos-delay="150" data-aos-duration="1000" style={style}>Hardworker</span>
          <span data-aos="fade-left" data-aos-delay="300" data-aos-duration="1000" style={style}>Friendly</span>
          <span data-aos="fade-left" data-aos-delay="450" data-aos-duration="1000" style={style}>Honest</span>
          <span data-aos="fade-left" data-aos-delay="600" data-aos-duration="1000" style={style}>High Management</span>
          <span data-aos="fade-left" data-aos-delay="750" data-aos-duration="1000" style={style}>creativity</span>
          <span data-aos="fade-left" data-aos-delay="900" data-aos-duration="1000" style={style}>Energetic</span>
          <span data-aos="fade-left" data-aos-delay="1100" data-aos-duration="1000" style={style}>good-tempered</span>
        </div>
      </div>
    </Container>

  )
}
export default Ablity