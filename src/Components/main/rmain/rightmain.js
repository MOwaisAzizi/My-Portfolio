import React from 'react'
import './rightmain.css'
import { Row, Col } from 'react-bootstrap';
import { init } from 'ityped'

class Rightmain extends React.Component {

  componentDidMount() {
    const myElement = document.querySelector('#right')
    init(myElement, { showCursor: false, strings: ['Frondend Developer'] })
  }

  render() {
    return (
      <div className='rightmain mt-4 mt-lg-0 ps-3 ps-lg-0 mb-5 mb-lg-0'>
          <div >
            <b> <h2 id='right' className=''> </h2></b>
            <p className=''>A Frond-end developer with a focus on writing depth, clean, elegant and efficient code. </p>
          </div>
      </div>

    )
  }
}
export default Rightmain
