
import React from 'react'
import Navigation from './pageComponents/navbar'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card'
import CountdownTimer from './pageComponents/countdownTimer';
import carShow from '../assets/carShow.jpeg'
import hwfd from '../assets/hwfd.JPG'


function Home() {
  return (
    <>
        <Navigation />
        <Container className="pt-5 mt-5">
          <Row >
            <Col className="d-flex justify-content-center align-items-center">
              <img src={carShow} alt="" style={{maxWidth: '40rem'}} />
            </Col>
            <Col>
              <h1>Join us for a Family-Friendly Weekend at the Crab Orchard Christian Mountain Games Highland Games and Church Festival!</h1>
              <p>
              Looking for a fun and exciting way to spend the weekend with your family? Come to our COCMG Highland Games and Church Festival, featuring an array of activities that are perfect for all ages. Whether you’re a fan of Highland Games, unique handmade crafts, or mouth-watering BBQ, we’ve got something for everyone!
              </p>
            </Col>
          </Row>
          <Row className="mt-3">
            <Col>
            <h2>Event Highlights:</h2>
              <ul>
                <li>
                  <b>COCMG Highland Games</b>: Watch local athletes compete in traditional Scottish events such as the caber toss, stone put, weight for distance, and the hammer throw. Experience the thrilling strength and skill required to master these ancient feats of strength.
                </li>
                <li>
                  <b>Antique Car Show</b>: Take a stroll through the antique car show and enjoy the beautiful collection of vintage vehicles. Car enthusiasts will be thrilled with the history, craftsmanship, and restoration stories behind these classic cars.
                </li>
                <li>
                  <b>Vendor Handmade Crafts Area</b>: Explore our artisan vendor market, featuring a variety of handmade crafts, from jewelry to home decor to unique gifts. Support local artists and find one-of-a-kind treasures for yourself or as a gift.
                </li>
                <li>
                  <b>Delicious BBQ </b>: Enjoy the best homemade BBQ in the region! From smoky ribs to pulled pork sandwiches, there's no shortage of delicious food. Don’t forget to check out other festival favorites like fresh lemonade, funnel cakes, and more.
                </li>
              </ul>
            </Col>
            <Col className="d-flex justify-content-center align-items-center">
              <img src={hwfd} alt="" style={{maxWidth: '32rem'}} />
            </Col>
          </Row>
          <Row className="mt-3">
          <Col className="d-flex justify-content-center align-items-center">
              <img src={carShow} alt="" style={{maxWidth: '40rem'}} />
          </Col>
          <Col>
            <h2>Why You Should Attend</h2>
            <ul>
              <li>
                <b>Family-Friendly</b>: Our event is perfect for families of all sizes. Kids can enjoy the games, crafts, and a variety of interactive activities, while adults can enjoy the live music, competitive events, and delicious food.
              </li>
              <li>
                <b>Free Admission</b>: We believe in providing a great experience for all, so admission is free for all attendees. Come enjoy the festivities without the worry of expensive tickets.
              </li>
              <li>
                <b>Live Music and Entertainment</b>: In addition to the athletic competitions, there will be live music performances throughout the day. Enjoy a mix of Scottish folk music, local bands, and cultural performances that add to the lively atmosphere.
              </li>
              <li>
                <b>Local Community Support</b>: This festival is not only about celebrating tradition, but it’s also about giving back to the community. A portion of proceeds will benefit local church programs, youth initiatives, and charity events.
              </li>
            </ul>
            </Col>
          </Row>
          <Row className="justify-content-center mt-5 mb-5">
            <Card style={{ width: '45rem' }} className='d-flex justify-content-center"'>
              <Card.Body className="d-flex flex-column align-items-center justify-content-center text-center">
                <h3>Time is Counting Down...</h3>
                <Card.Text>
                  <CountdownTimer />
                  ...Until the festivities begin!
                </Card.Text>
              </Card.Body>
            </Card>
          </Row>
        </Container>
    </>
  )
}

export default Home