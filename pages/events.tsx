import {NextPageWithLayout} from "./_app";
import {ReactElement} from "react";
import {Col, Container, Row} from "react-bootstrap";

const EventsPage: NextPageWithLayout = () => {
  // const  socialEvents: BreweryEvent[] = SOCIAL_EVENTS;
  return (
    <Container className="events-container fluid overflow-scroll">
      <Row>
        <Col>
          <h2 className="text-secondary border-bottom border-5 border-secondary pb-3 px-4">Brewery Events</h2>
          {/*<event v-for="event in socialEvents" :brewery-event=event :key="event.id"></event>*/}
        </Col>
      </Row>
    </Container>
  )
}

EventsPage.getLayout = (page: ReactElement) => page;

export default EventsPage;
