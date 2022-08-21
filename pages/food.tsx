import {Col, Container, Row} from "react-bootstrap";
import {ReactElement} from "react";
import {BreweryEvent, NextPageWithLayout} from "@model/index";
import {GetStaticProps} from "next/types";
import {InferGetStaticPropsType} from "next";

export const getStaticProps: GetStaticProps<{ foodEvents: BreweryEvent[]; }> = async (context) => {
  console.log('getting food events...');

  return {
    props: {
      foodEvents: []
    }
  }
}

const FoodPage: NextPageWithLayout<{ foodEvents: BreweryEvent[]; }> =
  (
    { foodEvents } : InferGetStaticPropsType<typeof  getStaticProps>
  ) => {

  return (
    <Container className="food-container overflow-scroll">
      <Row>
        <Col>
          <h2 className="text-secondary border-bottom border-5 border-secondary pb-3 px-4">Food Trucks</h2>
          {/*<event v-for="event in foodEvents" :brewery-event=event :key="event.id"></event>*/}
        </Col>
      </Row>
    </Container>
  )
}

FoodPage.getLayout = (page: ReactElement) => page;

export default FoodPage;