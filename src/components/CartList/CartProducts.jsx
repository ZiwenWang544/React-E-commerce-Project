import { useContext } from "react";
import { useState } from "react"
import { Nav,Container, Navbar as NavbarTop, Button , Modal} from "react-bootstrap"
import { NavLink } from "react-router-dom"
import { CartContext } from "../../context";



// function CartProduct(props){
//     const cart = useContext(CartContext);
//     const id = props.id;
//     const quantity = props.quantity;
//     const productData = getProductData(id);

//     return(
//         <>  
//             <h3>NFT ID: {productData.id}</h3>
//             <h3>{productData.name}</h3>
//             <p>{quantity} total</p>
//             <p>{(quantity * productData.price) } $</p>
//             <Button size="sm" onClick={() => cart.deleteFromCart(id)}>Remove</Button>
//             <hr></hr>

//         </>
//     )

// }

// export default CartProduct;