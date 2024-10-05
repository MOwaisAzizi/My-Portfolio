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
      <div className='leftmain mt-5 ms-2 ms-lg-0 p-0 mt-lg-0 mb-4 mb-lg-0' >
        <Row>

          <Col className='mt-4 mt-lg-0' >
            <h2 id='left' className='' style={{ textAlign: 'center' }}></h2>
            <p className='' style={{ textAlign: 'center' }}>An Afghan software engineer enrolled in the Software Engineering at Herat University.
            </p>
          </Col>
        </Row>
      </div>
    )
  }
}
export default LeftMain
