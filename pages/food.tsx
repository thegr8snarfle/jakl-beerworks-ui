import {NextPageWithLayout} from "./_app";
import {Col, Container, Row} from "react-bootstrap";
import {ReactElement} from "react";

const FoodPage: NextPageWithLayout = () => {
  // const foodEvents: BreweryEvent[] = FOOD_EVENTS;
  return (
    <Container className="food-container fluid overflow-scroll">
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