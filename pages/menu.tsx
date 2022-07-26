import {NextPageWithLayout} from "./_app";
import {ReactElement} from "react";
import {Col, Container, Row} from "react-bootstrap";

const MenuPage: NextPageWithLayout = () => {
  // const menuItems: Item[] = [];
  // async beforeMount(): Promise<void> {
  //   this.menuItems = await untappdAPI.fetchMenuItems();
  // }
  return (
    <Container className="menu-container fluid overflow-scroll">
      <Row>
        <Col>
          <h2 className="text-secondary border-bottom border-5 border-secondary pb-3 px-4">Menu</h2>
          {/*<beverage v-for="bev in this.menuItems" :bevvy="bev" :key="bev.id"></beverage>*/}
        </Col>
      </Row>
    </Container>
  )
}

MenuPage.getLayout = (page: ReactElement) => page;

export default MenuPage