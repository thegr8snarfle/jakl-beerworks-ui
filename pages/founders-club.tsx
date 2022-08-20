import {NextPageWithLayout} from "@model/index";
import {ReactElement} from "react";
import {Col, Container, Row} from "react-bootstrap";
import styles from './founders-club.module.scss';

const FoundersClubPage: NextPageWithLayout = () => {
  return (
    <Container className={`${ styles.foundersClub} overflow-scroll`}>
      <Row className={`${ styles.banner}`} >
        <Col className="d-flex flex-column align-content-center justify-content-center">
          <h2 className="text-primary text-left">JAKL Beer Works Founder’s Club</h2>
          <h5 className="text-primary text-left">Become an honorary member of the JAKL Beer Works team and help us build a better taproom experience!</h5>
        </Col>
      </Row>
    </Container>
  )
}

FoundersClubPage.getLayout = (page: ReactElement) => page;

export default FoundersClubPage;
