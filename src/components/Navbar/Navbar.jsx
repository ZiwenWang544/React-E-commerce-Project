import { useState } from "react"
import { Nav,Container, Navbar as NavbarTop, Button , Modal} from "react-bootstrap"
import { NavLink } from "react-router-dom"
import { NavModal } from "./NavModal";


export function Navbar() {

    return (
        <>
        <NavbarTop sticky="top" className="bg-white shadow-lg mb-3">
            <Container>
            <Nav className="me-auto">
                <Nav.Link to="/Home" as={NavLink}>
                    Home
                </Nav.Link>
                <Nav.Link to="/store" as={NavLink}>
                    Store
                </Nav.Link>
                <Nav.Link to="/CartList" as={NavLink}>
                    Cart
                </Nav.Link>
            </Nav>
            <NavModal/>
            </Container>
        </NavbarTop>
        </>
    )
}