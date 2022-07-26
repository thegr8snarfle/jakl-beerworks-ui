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
          <Carousel interval={5000}>
            <Carousel.Item >
              <Image
                className="image-fill w-100"
                src={images['beer']}
                alt="First slide"
                width={1000}
                // height={500} automatically provided
                // blurDataURL="data:..." automatically provided
                // placeholder="blur" // Optional blur-up while loading
              />
            </Carousel.Item>
            <Carousel.Item>
              <Image
                className="d-block w-100"
                src={images['beers']}
                alt="First slide"
                width={1000}
                // height={500} automatically provided
                // blurDataURL="data:..." automatically provided
                // placeholder="blur" // Optional blur-up while loading
              />
            </Carousel.Item>
        </Carousel>
       </Col>
      </Row>
    </Container>
  )
}

Home.getLayout = (page: ReactElement) => page;

export default Home
