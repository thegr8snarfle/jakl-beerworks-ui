import Image from 'next/image';
import firstSlide from '../assets/image/bar-beer-1.jpg';
import secondSlide from '../assets/image/beers-cornfield.jpg';
import thirdSlide from '../assets/image/bar-beer-2.jpg';
import fourthSlide from '../assets/image/taps.jpg';
import {Carousel, Container, Row, Col} from "react-bootstrap";
import {ReactElement} from "react";
import {NextPageWithLayout} from "@model/common.model";
import Head from "next/head";

const Home: NextPageWithLayout = () => {
  const images: { [key: string]: any } = {
    first: firstSlide,
    second: secondSlide,
    third: thirdSlide,
    fourth: fourthSlide
  };

  return (
    <>
      <Head>
        <title>JAKL Beerworks</title>
        <link href="/favicon.ico" type="image/x-icon" rel="shortcut icon" />
      </Head>
      <Container>
        <Row>
          <Col className="align-items-center d-block">
            <Carousel className="w-100" fade={true} pause="hover" interval={7500}>
              <Carousel.Item className="text-center">
                <Image alt="first" height={600} width={600} src={images['first'].src}/>
              </Carousel.Item>
              <Carousel.Item className="text-center">
                <Image alt="second" height={600} width={600} src={images['second'].src} />
              </Carousel.Item>
              <Carousel.Item className="text-center">
                <Image alt="third" height={600} width={600} src={images['third'].src} />
              </Carousel.Item>
              <Carousel.Item className="text-center">
                <Image alt="fourth" height={600} width={600} src={images['fourth'].src} />
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>
    </>

  )
}

Home.getLayout = (page: ReactElement) => page;

export default Home
