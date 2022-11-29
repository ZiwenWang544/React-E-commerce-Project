import React from "react"
import { CartContext } from "../../context";
import { useState, useEffect, useContext } from 'react'
import './StoreItem'



// export function StoreButtom(props){
//     const products = props.products;
//     //Context
//     const cart = useContext(CartContext);
//     const produdctQuanlity = cart.getProductQuantity(products.id);
//     console.log(cart.items);



//     return(
//         <>
//           <button type="button" className="btn btn-primary btn-sm"
//                  onClick={() => cart.addOneToCart(products.id)}
//                 >
//                 Add
//                 </button>
//         </>
//     )
// }