import {ReactElement} from "react";
import {Col, Container, Row} from "react-bootstrap";
import Event from "../components/Event";
import {InferGetStaticPropsType} from "next";
import {GetStaticProps} from "next/types";
import {BreweryEvent, NextPageWithLayout } from "@model/common.model";
import {jaklService} from "../common/services/jakl.service";

export const getStaticProps: GetStaticProps<{ socialEvents: BreweryEvent[] }> = async () => {
  const events = await jaklService.getSocialEvents();

  return {
    props: {
      socialEvents: events
    }, // will be passed to the page component as props
  }
}

const EventsPage: NextPageWithLayout<{ socialEvents: BreweryEvent[] }> =
  (
    { socialEvents }: InferGetStaticPropsType<typeof getStaticProps>
  ) => {

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
