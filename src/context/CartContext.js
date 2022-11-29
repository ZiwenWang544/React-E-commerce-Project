import { createContext, useState } from "react";



export const CartContext = createContext({
    items: [],
    getProductQuantity : () => {},
    addOneToCart: () => {},
    removeOnefromCart: () => {},
    deleteFromCart: () => {},
    getTotalCost: () => {},
    getProductData: () => {}
});


export function CartProvider({children}){
    
    const [cartProducts, setCartProducts] = useState([]);
    


    function getProductQuantity(id) {
        const quantity = cartProducts.find(products => products.id === id)?.quantity;

        if (quantity === undefined){
            return 0;
        }
        return quantity;
    }

    function getProductData(id) {
        let quantity = cartProducts.find(product => product.id === id);
        
        if(quantity == undefined) {
            console.log("Product data does not exist for ID " + id);
            return undefined;
        }
        return quantity;
    }

    function addOneToCart(id) {
        const quantity = getProductQuantity(id);

        if(quantity === 0) {// product is not in cart
            setCartProducts(
                [
                    ...cartProducts, {id:id,quantity:1}
                ]
            )
        } else{
            setCartProducts(// product in cart
            cartProducts.map( product =>
                product.id === id
                ? {...product, quantity: product.quantity + 1}
                : product
                )
            )
        }
    } 

    function removeOnefromCart(id) {
        const quantity = getProductQuantity(id);

        if(quantity == 1){
            deleteFromCart(id);
        } else{
            setCartProducts(
                cartProducts.map( product =>
                    product.id === id
                    ? {...product, quantity: product.quantity - 1}
                    : product
                    )
            )
        }
    }

    function deleteFromCart(id){
        setCartProducts(
            cartProducts => cartProducts.filter(currentProduct => {
                return currentProduct.id != id;
            })
        )
    }

    function getTotalCost() {
        let totalCost = 0;
        cartProducts.map((cartItem)=> {
            const productData = getProductData(cartItem.id);
            totalCost += (productData.price * cartItem.quantity);
        })
        return totalCost;
    }


    const contextValue = {
        items: cartProducts,
        getProductQuantity,
        addOneToCart,
        removeOnefromCart,
        deleteFromCart,
        getTotalCost,
    }

    return(
        <>
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
        </>
    )
}
export default CartProvider;