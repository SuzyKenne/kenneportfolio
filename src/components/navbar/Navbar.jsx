import React from "react";
import "./navbar.css";
import { AiOutlineHome } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import { MdWork } from "react-icons/md";
import { IoIosContact } from "react-icons/io";
import { useState } from "react";

const Navbar = () => {

  const [activeNavbar, setActiveNavbar] = useState('#')

  return (
    <navbar className='navbar'>
      <a href="#" onClick={()=> setActiveNavbar('#')} className={activeNavbar==='#' ?'active':''}>
        <AiOutlineHome />
      </a>
      <a href="#about" onClick={()=> setActiveNavbar('#about')} className={activeNavbar==='#About' ?'active':''}>
        <BsFillPersonFill />
      </a>
      <a href="#experience" onClick={()=> setActiveNavbar('#experience')} className={activeNavbar==='#Experience' ?'active':''}>
        <MdWork />
      </a>
      <a href="#contact" onClick={()=> setActiveNavbar('#contact')} className={activeNavbar==='#Contact' ?'active':''}>
        <IoIosContact />
      </a>
    </navbar>
  );
};

export default Navbar;
