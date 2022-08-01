import {Card, Col, Container, Row} from "react-bootstrap";
import {DateTime} from 'luxon';
import {BreweryEvent} from '@model/index';
import React, {useMemo} from "react";

export const Event: React.FC<{ breweryEvent: BreweryEvent; }> = ({ breweryEvent }) => {

  const dateFrom = DateTime.fromISO(breweryEvent.dateFrom).toLocal();

  const dateTo = DateTime.fromISO(breweryEvent.dateTo).toLocal();

  const getTimes = useMemo(() => {
    const from = DateTime.fromISO(breweryEvent.dateFrom).toLocaleString(DateTime.TIME_SIMPLE);
    const to = DateTime.fromISO(breweryEvent.dateTo).toLocaleString(DateTime.TIME_SIMPLE);
    return `${from} - ${to}`;
  }, [ breweryEvent ]);

  return (
    <Container className="my-1 align-items-center">
      <Row cols="1">
        <Col>
          <Card className="overflow-scroll m-2 bg-dark text-white shadow-sm" style={ { height: '300px' }}>
            <Card.Header className="d-flex flex-row align-items-center" >
              <div className="h-100 px-2 mr-2 bg-primary">
                <style jsx>{`
                  div {
                    width: 75px;
                  }
                `}</style>
                <h3 className="month font-weight-bolder text-secondary text-center m-0">{dateFrom.monthShort}</h3>
                <h6 className="day font-weight-normal text-center m-0">{dateFrom.day}</h6>
                <p className="year text-center text-dark m-0">{dateFrom.year} </p>
              </div>
              <div className="h-100 w-100 d-flex flex-grow-1 align-items-center">
                <h4 className="text-secondary p-3">{breweryEvent.name}</h4>
              </div>
            </Card.Header>
            {/*<img src={breweryEvent.img} />*/}
            <Card.Body className="pt-0 mb-2 d-flex h-100 flex-column justify-content-between">
              <p className="text-white p-0 m-0 fs-5">
                {breweryEvent.description}
              </p>
              <p className="p-0 m-0 my-3"><a className="text-secondary fs-6" href="#">See More (link to FB?)</a></p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Event;