import type { NextPage } from 'next'
import Image from 'next/image'
import twoBeers from '../assets/image/two-beers.jpg';
import beerLine from '../assets/image/beer-line.jpg';
import {Carousel, Container, Row, Col} from "react-bootstrap";
import {ReactElement} from "react";
import {NextPageWithLayout} from "./_app";

const Home: NextPageWithLayout = () => {
  let slide = 1;
  const images: { [key: string]: any } = {
    beers: twoBeers,
    beer: beerLine
  };

  return (
    <Container fluid={true}>
      <Row>
        <Col>
          <Carousel fade={true} pause="hover" interval={5000}>
            <Carousel.Item>
              <img src={images['beer'].src} className="d-block w-100" />
            </Carousel.Item>
            <Carousel.Item>
              <img src={images['beers'].src} className="d-block w-100" />
            </Carousel.Item>
        </Carousel>
       </Col>
      </Row>
    </Container>
  )
}

Home.getLayout = (page: ReactElement) => page;

export default Home
