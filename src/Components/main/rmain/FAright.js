import React from 'react'
import './rightmain.css'
import { Row, Col } from 'react-bootstrap';
import { init } from 'ityped'

class Faright extends React.Component {

  componentDidMount() {
    const myElement = document.querySelector('#right')
    init(myElement, { showCursor: false, strings: [' توسعه دهنده فرانت اند'] })
  }

  render() {
    return (
      <div className='rightmain pt-2 pt-lg-4' style={{direction:'rtl'}}>
        <Row>
          <Col >
            <b> <h2 id='right' className='pt-4 pt-lg-1'> </h2></b>
            <p className='pb-lg-0 px-1'>
            توسعه دهنده فرانت اند که بالای نوشتن کود های عمیق، پاک، ظریف و تاثیر گذار متمرکز <br /> است.
                 <br /> </p>
          </Col>
        </Row>
      </div>

    )
  }
}
export default Faright
