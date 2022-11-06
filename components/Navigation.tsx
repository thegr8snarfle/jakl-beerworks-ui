import {Navbar, Offcanvas, Nav} from "react-bootstrap";
import styles from './navigation.module.scss';
import logo from '@assets/image/jakl-logo-clear.png';
import Link from "next/link";
import Icon from "./Icon";
import Image from "next/image";
import React from "react";

const Navigation = () => {
  return (
      <div className="position-relative mb-sm-4 mt-lg-4">
        <Navbar collapseOnSelect className={styles.navbar} expand="md" variant="dark">
          <Navbar.Toggle className={`${styles.toggle} border-0 text-primary`}>
            <Icon name="bars" size='lg' className="btn-outline-none"/>
          </Navbar.Toggle>
          <div className={styles.smallLogo}>
            <Image src={logo} className="d-md-none d-flex rounded-circle" height={60} width={60}/>
          </div>
          <Navbar.Offcanvas className={styles.offcanvas} style={{ background: 'transparent'}} placement="end">
            <Offcanvas.Header className={styles.offcanvasHeader} closeButton>
              {/*<Offcanvas.Title id="offcanvasNavbarLabel-expand-md">*/}
              {/*  JAKL Beerworks*/}
              {/*</Offcanvas.Title>*/}
            </Offcanvas.Header>
            <Offcanvas.Body className={styles.offcanvasBody}>
              <Nav className={`${styles.navbarNav}`} fill>
                <Nav.Item>
                  <Nav.Link className={styles.navBarLink} href="/menu">Menu</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  {/* eslint-disable-next-line react/no-unescaped-entities */}
                  <Nav.Link className={styles.navBarLink} href="/founders-club">Founder's Club</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className={styles.navBarLink} href="/home">Home</Nav.Link>
                </Nav.Item>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Navbar>
        <Link href="/">
          <a className={`${styles.brandImage} img-thumbnail rounded-circle position-absolute mt-2 d-none d-md-block`}>
            <img className="d-block" src={logo.src}/>
          </a>
        </Link>
      </div>
  )
}

export default Navigation;