import { useContext } from "react";
import { useState, useEffect } from "react"
import { Nav,Container, Navbar as NavbarTop, Button , Modal} from "react-bootstrap"
import { NavLink } from "react-router-dom"
import { CartContext } from "../../context";
import CartProduct from "../CartList/CartProducts";
import { ApiStore } from "../API";

export function  NavModal() {

    const Url = "http://localhost:4000/ProductsItem";

    const [products, setProducts] = useState([]);
  
    useEffect(() =>{
      const connect = async() =>{
        const response = await ApiStore(Url);
        const products = await response;
        setProducts(products);
      }
      connect();
    },[Url])
    console.log(products);
  


    const cart = useContext(CartContext);

    const [showModal, setShowModal ] = useState(false);
    const handleClose = () => setShowModal(false);
    const handleShowModal = () => setShowModal(true);
    const productsCount = cart.items.reduce((sum, products) => sum + products.quantity, 0);
    return(
        <>
         <Button 
                style= {{
                    width: "3rem",
                     height : "3rem",
                      position:"relative"
                    }}
                variant="outline-primary"
                className="rounded-circle"
                onClick={handleShowModal}>
                    {/* aqui tocara modificar */}
                <img src="/imgs/ShopCartIcon.png" style={{position:"center"}}/>
                    {/* aqui */}
                <div
                    className="rounded-circle bg-danger d-flex justify-content-center
                    align-items-center"
                    style={{
                        color:"white",
                        width:"1.5rem",
                        height:"1.5rem",
                        position:"absolute",
                        bottom: 0,
                        right: 0,
                        transform : "translate(25%,25%)",
                    }}
                >
                    {productsCount}
                </div>
            </Button>
            <Modal show={showModal} onHide={handleClose}>
                <Modal.Header closeButton>
                   <Modal.Title>SHOPPING CART</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {productsCount > 0 ?
                        <>
                            <p>Items in your Cart: </p>
                            {cart.items.map((currentProduct, idx) =>(
                                <h1>NFT Product ID: {currentProduct.id}</h1>
                                // <CartProduct key={idx} id={currentProduct.id}
                                //  quantity={currentProduct.quantity}
                                //  ></CartProduct>
                            ))}

                            <h1>Total: {cart.getTotalCost()}</h1>
                            
                            <Button variant="success">
                                Purchase NFTS!
                            </Button>
                        </>
                        :
                        <h1>There no NFTS</h1>
                    }
                </Modal.Body>
            </Modal>
        
        </>
    )

}