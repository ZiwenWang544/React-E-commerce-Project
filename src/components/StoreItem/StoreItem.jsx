import { type } from "@testing-library/user-event/dist/type"
import { Card, Form, Row, Button,Col} from "react-bootstrap"
import { storeCarts } from "./StoreCarts";
import  "../../Items/items.json"
import { useState, useEffect, useContext } from 'react'
// import  "../../hooks/index";
// import { useFerch } from "../../hooks/index";
import { ApiStore } from "../API/index";
import { CartContext } from "../../context";


export const StoreItem = () => {

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

  //context
  const cart = useContext(CartContext);
  const productQuanlity = cart.getProductQuantity(products)
  console.log(cart.items);

   return (
     <>
      {products.map((products) => (
        // <storeCarts products={products}/>
        <div className="col animate__animated animate__fadeIn">
        <div className="card">
          <div className="row no-gutters">
            <div className="col-4">
              <img src={products.imgUrl} className="card-img" alt=" "/>
            </div>
            <div className="col-8" key={products.id}>
              <div className="card-body">
                <p className="card-text">
                  <small className="text-muted">Price: {products.price} $</small>
                </p>
              </div>
                    <Form as={Row}>
                        <Col sm="6">
                            <Button sm="6" onClick={() => cart.addOneToCart(products.id)} className="mx-2">+</Button>
                            <Button sm="6" onClick={() => cart.removeOnefromCart(products.id)} className="mx-2">-</Button>
                        </Col>
                    </Form>
                    <Button variant="danger" className="my-2" onClick={() => cart.deleteFromCart(products.id)}>Remove from Cart</Button>
            </div>
          </div>
        </div>
      </div>
      ))}
      </>
);

}
