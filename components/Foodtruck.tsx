import {Col, Row} from "react-bootstrap";
import Image from "next/image";
import beer from "@assets/image/beer-icon.png";
import React from "react";

export const Foodtruck: React.FC = ({ }) => {
  return (
    <Row xs={1} md={2} className="align-items-center my-2">
      <Col className="d-none d-md-block text-center align-middle">
        <Image height={270} width={270} className="d-none py-2 px-4 px-sm-1 bg-transparent w-100 d-md-block" src={beer.src}/>
      </Col>
      <Col>
        <div className="stats">
          <p className="w-100 fs-2 text-center fw-bolder text-secondary"></p>
          <p className="w-100 fs-4 text-center fw-bold text-primary">

          </p>
          <p className="w-100 text-start text-white"></p>
        </div>
      </Col>
    </Row>
  )
}