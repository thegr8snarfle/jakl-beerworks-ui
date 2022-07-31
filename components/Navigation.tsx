import {Container, Navbar} from "react-bootstrap";
import styles from './navigation.module.scss';
import Nav from 'react-bootstrap/Nav';
import logo from '../assets/image/jakl-logo-clear.png';
import Link from "next/link";
import Icon from "./Icon";

const Navigation = () => {
  return (
    <>
      <div className="top-nav position-relative">
        <Navbar className={styles.navbar} expand="lg">
          <Navbar.Toggle className="border-0 text-primary">
            <Icon name="bars" size='lg' className="btn-outline-none"/>
          </Navbar.Toggle>
          <Navbar.Collapse className="justify-content-end">
            <Nav className="w-75 justify-content-evenly" fill>
              <Link  href="/">
                <a className="fs-3 text-secondary fw-bold text-decoration-none">Home</a>
              </Link>
              <Link href="/food">
                <a className="fs-3 text-secondary fw-bold text-decoration-none">Food</a>
              </Link>
              <Link href="/menu">
                <a className="fs-3 text-secondary fw-bold text-decoration-none">Menu</a>
              </Link>
              <Link href="/events">
                <a className="fs-3 text-secondary fw-bold text-decoration-none">Events</a>
              </Link>
              <Link href="/founders-club">
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                <a className="fs-3 text-secondary fw-bold text-decoration-none">Founder's Club</a>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <a className={`${styles.brandImage} img-thumbnail rounded-circle position-absolute mt-2 d-none d-lg-block`}>
          <img className="d-block" src={logo.src} />
        </a>
      </div>
    </>
  )
}

export default Navigation;