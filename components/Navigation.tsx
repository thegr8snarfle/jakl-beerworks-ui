import {Navbar, Offcanvas, Nav} from "react-bootstrap";
import logo from '@assets/image/jakl-logo-clear.png';
import Link from "next/link";
import Icon from "./Icon";
import Image from "next/image";
import React from "react";

const Navigation = () => {
  return (
      <div className="position-relative mb-sm-4 mt-lg-4">
        <Navbar collapseOnSelect className="navbar mt-4 mb-2" expand="md" variant="dark">
          <Navbar.Toggle className="border-0 text-primary">
            <Icon name="bars" size='lg' className="btn-outline-none"/>
          </Navbar.Toggle>
          <div className="small-logo">
            <Image src={logo} className="d-md-none d-flex rounded-circle" height={60} width={60}/>
          </div>
          <Navbar.Offcanvas className="offcanvas" style={{ background: 'transparent'}} placement="end">
            <Offcanvas.Header className="offcanvas-header" closeButton />
            <Offcanvas.Body className="offcanvas-body">
              <Nav className="navbar-nav" fill>
                <Nav.Item>
                  <Nav.Link className="navbar-link" href="/">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className="navbar-link" href="/menu">Menu</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  {/* eslint-disable-next-line react/no-unescaped-entities */}
                  <Nav.Link className="navbar-link" href="/founders-club">Founder's Club</Nav.Link>
                </Nav.Item>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Navbar>
        <Link href="/">
          <a className="brand-image img-thumbnail rounded-circle position-absolute mt-2 d-none d-md-block">
            <img className="d-block" src={logo.src}/>
          </a>
        </Link>
      </div>
  )
}

export default Navigation;