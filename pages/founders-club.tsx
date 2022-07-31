import {NextPageWithLayout} from "../api/model";
import {ReactElement} from "react";
import {Col, Container, Row} from "react-bootstrap";

const FoundsClubPage: NextPageWithLayout = () => {
  return (
    <Container className="events-container fluid overflow-scroll">
      <Row>
        <Col>
          <h2 className="text-secondary border-bottom border-5 border-secondary pb-3 px-4">Founders Club</h2>
        </Col>
      </Row>
    </Container>
  )
}

FoundsClubPage.getLayout = (page: ReactElement) => page;

export default FoundsClubPage;
