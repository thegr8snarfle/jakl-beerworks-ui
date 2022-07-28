import {Container, Navbar} from "react-bootstrap";
import styles from './navigation.module.scss';
import Image from 'next/image';
import Nav from 'react-bootstrap/Nav';
import logo from '../assets/image/jakl-logo-clear.png';
import Link from "next/link";
import Icon from "./Icon";

const Navigation = () => {
  return (
    <Navbar className={styles.navbar} collapseOnSelect expand="lg">
      <Container>
        <Navbar.Brand href="/">
          <Image height={100} width={100} src={logo}
                 className={`${styles.brandImage} img-thumbnail rounded-circle position-absolute mt-2  d-none d-lg-block`}/>
        </Navbar.Brand>
        <Navbar.Toggle className="border-0 text-primary">
          <Icon name="bars" size='lg' />
        </Navbar.Toggle>
        <Navbar.Collapse id="nav-collapse" className="justify-content-end">
          <Nav className="w-100 justify-content-end" fill>
            <Link href="/">
              <a className={styles.navLink}>Home</a>
            </Link>
            <Link href="/food">
              <a className={styles.navLink}>Food</a>
            </Link>
            <Link href="/menu">
              <a className={styles.navLink}>Menu</a>
            </Link>
            <Link href="/events">
              <a className={styles.navLink}>Events</a>
            </Link>
            <Link href="/founders-club">
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              <a className={styles.navLink}>Founder's Club</a>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navigation;