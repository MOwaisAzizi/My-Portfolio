import React, { useEffect, useRef } from "react";
import './ablity.css'
import { Container } from "react-bootstrap";

const Ablity = ({ theme }) => {

  const style = {
    background: theme === 'dark' ? '#52d3d8' : '#98eecc',
    color: theme === 'dark' ? 'white' : 'black',
    boxShadow: theme === 'dark' ? '1.5px 3px 8px #22abaf' : '2px 4px 10px rgba(0, 0, 0,0.15)'
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
    <Container className="pb-5 mt-5" >
      <div className="pt-sm-3 pt-md-5 pt-1">
        <div className="skills">
          <h1 data-aos="fade-right" >My Skills</h1>

          <li className="p"> <span>H</span><span>T</span><span>M</span><span>L</span>

            <div className="bar"><div className="animation" ref={animatedRef1}></div></div>
          </li>

          <li className="p"> <span>C</span><span>S</span><span>S</span>
            <div className="bar"><div className="animation" ref={animatedRef2}></div></div>
          </li>

          <li className="p">
            <span>J</span><span>a</span><span>v</span><span>a</span><span>s</span><span>c</span><span>r</span><span>p</span><span>t</span>

            <div className="bar"><div className="animation " ref={animatedRef3}></div></div>
          </li>

          <li className="p">
            <span>b</span><span>o</span><span>o</span><span>t</span><span>s</span><span>t</span><span>r</span><span>a</span><span>p</span>

            <div className="bar"><div className="animation" ref={animatedRef4}></div></div>
          </li>

          <li className="p">
            <span>R</span><span>e</span><span>a</span><span>c</span><span>t</span>

            <div className="bar"><div className="animation" ref={animatedRef5}></div></div>
          </li>

          <li className="p">
            <span>A</span><span>P</span><span>I</span>

            <div className="bar"><div className="animation" ref={animatedRef6}></div></div>
          </li>

          <li className="p">
            <span>M</span><span>y</span><span>S</span><span>q</span><span>l</span>

            <div className="bar"><div className="animation" ref={animatedRef7}></div></div>
          </li>

          <li className="p">
            <span>J</span><span>a</span><span>v</span><span>a</span>

            <div className="bar"><div className="animation" ref={animatedRef9}></div></div>
          </li>

          <li className="p">
            <span>I</span><span>C</span><span>D</span><span>L</span>
            <div className="bar"><div className="animation" ref={animatedRef8}></div></div>
          </li>
        </div>

        <div className="skills mb-5 mb-md-5">
        <h2 className="h2Lang" data-aos="fade-right"><b>Languages</b></h2>
          <li className="p" style={{ marginTop: '0px' }}>
            <span>F</span><span>a</span><span>r</span><span>s</span><span>i</span>

            <div className="bar"><div className="animation" ref={animatedRef10}></div></div>
          </li>

          <li className="p">
            <span>E</span><span>n</span><span>g</span><span>l</span><span>i</span><span>s</span><span>h</span>

            <div className="bar"><div className="animation" ref={animatedRef11}></div></div>
          </li>

          <li className="p">
            <span>P</span><span>a</span><span>s</span><span>h</span><span>t</span><span>o</span>

            <div className="bar"><div className="animation" ref={animatedRef12}></div></div>
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