import React from 'react'
import './leftmain.css'
import { Row, Col } from 'react-bootstrap'
import { init } from 'ityped'


class Faleft extends React.Component {

  componentDidMount() {
    const myElement = document.querySelector('#left')
    init(myElement, { showCursor: false, strings: ['انجینیر نرم افزاز'] })
  }
  render() {
    return (
      <div className='leftmain pt-5 pt-lg-4' style={{ direction: 'rtl' }} >
        <Row>

          <Col className='pt-5 pt-sm-0'>
            <b><h2 id='left' className='pt-4 pt-lg-1' style={{ textAlign: 'center' }}><b>ا</b></h2></b>
            <p className='' style={{ textAlign: 'center' }}>
          یک انجینیر نرم افزار از افغانستان که فعلا انجینیری نرم افزار را در دانشگاه <br />هرات  می آموزد.
            </p>
          </Col>
        </Row>
      </div>
    )
  }
}
export default Faleft
