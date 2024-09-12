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
      <div className='rightmain faRight mt-0 mt-md-3 mt-lg-0 ps-3 ps-lg-0 mb-5 mb-lg-0' style={{direction:'rtl'}}>
        <Row>
          <Col >
            <b> <h2 id='right' className=''> </h2></b>
            <p className=''>
            یک توسعه دهنده فرانت اند که بالای نوشتن کود های عمیق، پاک، ظریف و تاثیر گذار متمرکز <br/> است.
                 <br /> </p>
          </Col>
        </Row>
      </div>

    )
  }
}
export default Faright
