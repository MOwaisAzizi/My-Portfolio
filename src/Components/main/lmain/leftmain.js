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
      <div className='leftmain left mt-5 mt-lg-0 ms-2 ms-lg-0 p-0  mb-2 mb-lg-0' >

          <div className='mt-4 mt-sm-5 mt-lg-0' >
            <h2 id='left' className='' style={{ textAlign: 'center' }}></h2>
            <p className='' style={{ textAlign: 'center' }}>An Afghan software engineer enrolled in the Software Engineering at Herat University.
            </p>
          </div>
      </div>
    )
  }
}
export default LeftMain
