import React from 'react'
import './rightmain.css'
import { init } from 'ityped'

class Rightmain extends React.Component {

  componentDidMount() {
    const myElement = document.querySelector('#right')
    init(myElement, { showCursor: false, strings: ['Frondend Developer'] })
  }

  render() {
    return (
      <div className='rightmain right mt-4 mt-md-5 mt-lg-0 ms-2 ps-lg-0 mb-4 mb-lg-0'>
        <div >
          <b> <h2 id='right' className='frontheader'> </h2></b>
          <p>A Frond-end developer with a focus on writing depth, clean, elegant and efficient code. </p>
        </div>
      </div>

    )
  }
}
export default Rightmain
