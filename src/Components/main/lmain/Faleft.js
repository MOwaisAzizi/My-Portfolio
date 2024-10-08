import React from 'react'
import './leftmain.css'
import { Row, Col } from 'react-bootstrap'
import { init } from 'ityped'


class Faleft extends React.Component {

  componentDidMount() {
    const myElement = document.querySelector('#left')
    init(myElement, { showCursor: false, strings: ['انجینیر نرم افزار'] })
  }
  render() {  //mt-4 mt-sm-5
    return (
      <div className='leftmain faLeft  mt-sm-5  mt-5 mt-lg-0   ms-2  ms-lg-0  ps-lg-0 mb-1 mb-lg-0' style={{ direction: 'rtl' }} >

        <div className=''>
          <b><h2 id='left' className=' mt-4 mt-lg-0' style={{ textAlign: 'center' }}><b>ا</b></h2></b>
          <p className='' style={{ textAlign: 'center' }}>
            یک انجینیر نرم افزار افغان که فعلا مصروف یادگیری انجینیری نرم افزار در دانشگاه هرات <br /> است.
          </p>
        </div>
      </div>
    )
  }
}
export default Faleft
