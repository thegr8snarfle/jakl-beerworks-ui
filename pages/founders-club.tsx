import {NextPageWithLayout} from '@model/index';
import {ReactElement} from "react";
import Image from 'next/image';
import {Col, Container, Row} from "react-bootstrap";
import styles from './founders-club.module.scss';
import cornfieldImage from '@assets/image/cornfield.jpeg';
import lumbermillImage from '@assets/image/lumber-mill.jpeg';
import beerGardenImage from '@assets/image/beer-garden.png';

const FoundersClubPage: NextPageWithLayout = () => {
  return (
    <>
      <h2 className="d-sm-block d-md-none text-secondary border-bottom border-5 border-secondary py-3 px-3 mb-4">Founder&lsquo;s Club</h2>
      <Container className={`${ styles.foundersClub} overflow-scroll`}>
        <Row className={`${ styles.banner} d-none d-md-flex`} >
          <Col className="d-flex flex-column align-content-center justify-content-center">
            <h2 className="text-light text-left">JAKL Beer Works Founder’s Club</h2>
            <h5 className="text-light text-left">Become an honorary member of the JAKL Beer Works team and help us build a better taproom experience!</h5>
          </Col>
        </Row>
        <Row className="mt-5" xs={1} md={2}>
          <Col className="benefits">
            <h3 className="mb-3">1 Year of Membership - $100</h3>
            <ul className="text-primary muted">
              <li>
                $1 off every 16 oz. house-made beverage, and $0.50 off every 8 oz. house-made beverage, 10% off all crowlers and growler-fills
              </li>
              <li>
                15% off merchandise purchases
              </li>
              <li>
                Exclusive access to purchase crowler and growler fills of small batch releases
              </li>
              <li>
                Twice yearly, Founder’s Club Exclusive, catered dinner parties
              </li>
              <li>
                One Complimentary JAKL Beer Works T-Shirt at sign-up
              </li>
            </ul>
          </Col>
          <Col className="signup">
            <h3 className="mb-3">Become a Founder</h3>
            <ul className="list-unstyled text-primary muted">
              <li>
                The owners of JAKL Beer Works would like to invite you to become an honorary member of our team by joining our Founder’s Club.
                The JAKL Beer Works Founder’s Club offers craft beer and brewery enthusiasts the opportunity to be an integral part of building our brewery and taproom.
                The proceeds collected from your membership fee will help to fund improvement and expansion of our taproom
                and brewery so that we can be better equipped to help you maximize your enjoyment at our Taproom. A substantial example of our
                improvement plans includes the below proposed (and very preliminary) plan for our outdoor beer garden.
              </li>
            </ul>
            {/*<div className="w-100 text-center py-3">*/}
            {/*  <button className="px-4 py-2 rounded-pill bg-secondary btn-outline-none border-0 text-light" onClick={(e) => console.debug('signed up!')}>*/}
            {/*    Signup*/}
            {/*  </button>*/}
            {/*</div>*/}
          </Col>
        </Row>
        <Row className="mt-5 photos" xs={1} md={3}>
          <Col className="mb-3">
            <Image alt="cornfield" src={cornfieldImage.src} width={750} height={560}/>
          </Col>
          <Col className="mb-3">
            <Image alt="lumbermill" src={lumbermillImage.src} width={750} height={560}/>
          </Col>
          <Col className="mb-3">
            <Image alt="beergarden" src={beerGardenImage.src} width={750} height={560}/>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col>
            <h3 className="mb-3">Membership Terms</h3>
            <ul className="text-primary muted">
              <li>
                Membership perks are for one calendar year only, beginning from the date of purchase.
              </li>
              <li>
                All perks are subject to change within reason and without prior notice.
              </li>
              <li>
                Discount perks are applied to a member’s bill on a per-transaction basis.
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </>
  )
}

FoundersClubPage.getLayout = (page: ReactElement) => page;

export default FoundersClubPage;
