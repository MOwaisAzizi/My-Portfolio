import React from 'react'
import './leftmain.css'
import { Row, Col } from 'react-bootstrap'
import { init } from 'ityped'


class Faleft extends React.Component {

  componentDidMount() {
    const myElement = document.querySelector('#left')
    init(myElement, { showCursor: false, strings: ['انجینیر نرم افزار'] })
  }
  render() {
    return (
      <div className='leftmain faLeft mt-4 mt-lg-0 ps-3 ps-lg-0 mb-3 mb-lg-0' style={{ direction: 'rtl' }} >
        {/* <Row> */}

          <div className=''>
            <b><h2 id='left' className=' mt-5 mt-lg-0' style={{ textAlign: 'center' }}><b>ا</b></h2></b>
            <p className='' style={{ textAlign: 'center' }}>
          یک انجینیر نرم افزار افغان که فعلا مصروف یادگیری انجینیری نرم افزار در دانشگاه هرات <br/> است.
            </p>
          </div>
        {/* </Row> */}
      </div>
    )
  }
}
export default Faleft
