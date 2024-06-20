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
      <div className='rightmain mt-4 mt-lg-0 mb-5 mb-lg-0'>
        <Row>
          <Col >
            <b> <h2 id='right' className=''> </h2></b>
            <p className=''>A Frondend developer who focuses on writing depth, clean, elegant and efficient  code. <br /> </p>
          </Col>
        </Row>
      </div>

    )
  }
}
export default Rightmain
