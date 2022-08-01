import Image from "next/image";
import React from "react";
import { Col, Row} from "react-bootstrap";
import barBeer from '@assets/image/beer-on-bar.jpg';
import {MenuItem} from "@model/index";

const Beverage: React.FC<{ bevvy: MenuItem }> = ({ bevvy }) => {
  return (
  <Row xs={1} md={2} >
    <Col>
      <Image className="py-2 px-4 px-sm-1 bg-transparent col" src={barBeer}/>
    </Col>
    <Col>
      <div className="stats">
        <p className="w-100 fs-2 text-center fw-bolder text-secondary">{bevvy.name}</p>
        <p className="w-100 fs-4 text-center fw-bold text-primary">
          ABV: {bevvy.abv}% IBU: {bevvy.ibu}
        </p>
        <p className="w-100 text-start text-white">{bevvy.description}</p>
      </div>
    </Col>
  </Row>
  );
}

export default Beverage;