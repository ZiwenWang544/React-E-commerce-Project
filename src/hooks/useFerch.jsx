import { useState } from "react";
import { useEffect } from "react";

//  esto esta no la usare de mientra
export const useFerch = () => {

    const UrlStoreItems = "http://localhost:4000/ProductsItem";

    const [products, setProducts] = useState([]);

    const error = "no hay nada" ;

    useEffect((error) => {

        const fetchItem = async () => {
            try{
                const response = await fetch(UrlStoreItems);
                const products = await response.json();
                console.log(products)
                setProducts(products);
            } catch (error) {
                return error;
            }
        
        }
        fetchItem();
        },[UrlStoreItems]);
 return{
    products,
    error,
    
 }
}
// esto