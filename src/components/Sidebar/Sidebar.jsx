import React, { useState, useContext } from "react";
import Offcanvas from 'react-bootstrap/Offcanvas'
import { MenuButton, ChangeBackgroundButton, Input } from "./Sidebar.styles";
import menu from "../../assets/menu.svg"
import { BackgroundContext } from "../../context/background.context";

export const Sidebar = () => {
    const ctx = useContext(BackgroundContext)
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleBackgroundChange = (e) => {
        console.log(URL.createObjectURL(e.target.files[0]))
        ctx.changeBackground(URL.createObjectURL(e.target.files[0]))
    }
    return (
      <>
        <MenuButton variant="primary" onClick={handleShow}>
          <img src={menu} alt="showgun"/>
        </MenuButton>
        
        <Offcanvas show={show} onHide={handleClose} placement={'end'}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Menu</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <ChangeBackgroundButton for="background">Change background</ChangeBackgroundButton>
            <Input type="file" accept="image/*" id="background" onChange={handleBackgroundChange}/>
          </Offcanvas.Body>
        </Offcanvas>
      </>
    );
}
  