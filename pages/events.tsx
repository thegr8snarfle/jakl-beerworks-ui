import {NextPageWithLayout} from "./_app";
import {ReactElement} from "react";
import {Col, Container, Row} from "react-bootstrap";
import {SOCIAL_EVENTS} from "../api/data";
import {BreweryEvent} from "../api/common.model";
import Event from "../components/Event";

const EventsPage: NextPageWithLayout = () => {
  const socialEvents: BreweryEvent[] = SOCIAL_EVENTS;

  return (
    <Container className="overflow-scroll">
      <Row>
        <Col>
          <h2 className="text-secondary border-bottom border-5 border-secondary pb-3 px-4">Brewery Events</h2>
          {
            socialEvents && socialEvents.map(socialEvent => <Event breweryEvent={socialEvent} key={socialEvent.id} />)
          }
        </Col>
      </Row>
    </Container>
  )
}

EventsPage.getLayout = (page: ReactElement) => page;

export default EventsPage;
