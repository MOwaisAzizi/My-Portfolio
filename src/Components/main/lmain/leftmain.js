import React from 'react'
import './leftmain.css'
import { Row, Col } from 'react-bootstrap'
import { init } from 'ityped'


class LeftMain extends React.Component {

  componentDidMount() {
    const myElement = document.querySelector('#left')
    init(myElement, { showCursor: false, strings: ['Software Engineer'] })
  }
  render() {
    return (
      <div className='leftmain pt-lg-2 pt-5' >
        <Row>

          <Col className='pt-4 pt-sm-0' >
            <b><h2 id='left' className='pt-5 pt-lg-4' style={{ textAlign: 'center' }}><b></b></h2></b>
            <p className='' style={{ textAlign: 'center' }}>A software engineer from Afghanistan who studing  software engineering at Herat University.
            </p>
          </Col>
        </Row>
      </div>
    )
  }
}
export default LeftMain
