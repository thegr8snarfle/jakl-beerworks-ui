import {NextPageWithLayout} from "./_app";
import {ReactElement, useEffect, useState} from "react";
import {Col, Container, Row} from "react-bootstrap";
import { untappdAPI } from '../api/untappd.api';
import {Item} from "../api/untappd.model";
import Beverage from "../components/Beverage";

const MenuPage: NextPageWithLayout = () => {
  // const menuItems: Item[] = [];
  // async beforeMount(): Promise<void> {
  //   this.menuItems = await untappdAPI.fetchMenuItems();
  // }
  const [ menuItems, setMenuItems ] = useState<Item[]>();
  useEffect(() => {
    untappdAPI.fetchMenuItems().then(data => setMenuItems(data));
  }, []);

  return (
    <Container className="menu-container fluid overflow-scroll">
      <Row>
        <Col>
          <h2 className="text-secondary border-bottom border-5 border-secondary pb-3 px-4">Menu</h2>
          {
            menuItems && menuItems?.map(item => <Beverage bevvy={item} key={item.id} />)
          }
        </Col>
      </Row>
    </Container>
  )
}

MenuPage.getLayout = (page: ReactElement) => page;

export default MenuPage