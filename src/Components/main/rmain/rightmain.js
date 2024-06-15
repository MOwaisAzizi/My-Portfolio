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
      <div className='rightmain pt-2 pt-lg-4 '>
        <Row>
          <Col >
            <b> <h2 id='right' className='pt-4 pt-lg-1'> </h2></b>
            <p className='pb-lg-0 px-1'>A Frondend developer who focuses on writing depth, clean, elegant and efficient  code. <br /> </p>
          </Col>
        </Row>
      </div>

    )
  }
}
export default Rightmain
