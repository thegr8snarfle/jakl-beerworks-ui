import React from "react";
import Image from 'next/image';
import Navigation from "./Navigation";

import logo from '../assets/image/jakl-logo-clear.png';

const Header: React.FC = () => {
  return (
    <section className="header">
      <Navigation/>
      <div className="w-100 d-flex d-lg-none justify-content-center">
        <Image src={logo} className="brand-image rounded-circle" />
      </div>
    </section>
  )
}

export default Header;