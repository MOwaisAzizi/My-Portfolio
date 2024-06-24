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
      <div className='leftmain mt-5 mt-lg-0 ps-2 ps-lg-0 mb-3 mb-lg-0' >
        <Row>

          <Col className='mt-5 mt-lg-0' >
            <b><h2 id='left' className='' style={{ textAlign: 'center' }}><b></b></h2></b>
            <p className='' style={{ textAlign: 'center' }}>An Afghan software engineer enrolled in the Software Engineering at Herat University.
            </p>
          </Col>
        </Row>
      </div>
    )
  }
}
export default LeftMain
