import {Routes, Route} from "react-router-dom"
import { Container} from "react-bootstrap"
import { BrowserRouter } from 'react-router-dom';
import { Home } from "../pages/Home";
import { Store } from "../pages/Store";
import { About } from "../pages/About";
import { Navbar } from "../components/Navbar/Navbar"
import { CartList } from "../pages/CartList";



export function RouterNav() {
    return (
        <>
        <Navbar/>
    <Container>
      <Routes>
        <Route path="/Home" element= {<Home />} />
        <Route path="/Store" element= {<Store />} />
        <Route path="/CartList" element= {<CartList />} />
        <Route path="*" element= {<div>404 - not found</div>} />
      </Routes>
    </Container>
        </>
    )
}