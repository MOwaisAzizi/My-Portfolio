import React from 'react'
import './rightmain.css'
import { Row, Col } from 'react-bootstrap';
import { init } from 'ityped'

class Faright extends React.Component {

  componentDidMount() {
    const myElement = document.querySelector('#right')
    init(myElement, { showCursor: false, strings: [' توسعه دهنده فرانت اند'] })
  }
  // mt-2 mt-md-3 mt-lg-0
  render() {
    return (
      <div className='rightmain faRight mt-2 mt-sm-2 mt-md-4  mt-lg-0 ms-2 ms-lg-0 mb-4 mb-lg-0' style={{ direction: 'rtl' }}>
        <div>
            <b> <h2 id='right' className='frontheader'> </h2></b>
            <p >
              یک توسعه دهنده فرانت اند که بالای نوشتن کود های عمیق، پاک، ظریف و تاثیر گذار متمرکز  است.
              <br /> </p>
        </div>
      </div>

    )
  }
}
export default Faright
