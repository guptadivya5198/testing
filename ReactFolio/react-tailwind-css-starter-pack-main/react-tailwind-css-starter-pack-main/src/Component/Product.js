import React from "react";
import ProductItem from "./ProductItem";
import Card from './Card';

const Product =(produc) =>{
    return(
        <Card className='products'>
            <ProductItem
                title = {produc[0].title}
                amount ={produc[0].amount}
                date = {produc[0].date}
            />
            <ProductItem
                title = {produc[1].title}
                amount ={produc[1].amount}
                date = {produc[1].date}
            />
            <ProductItem
                title = {produc[2].title}
                amount ={produc[2].amount}
                date = {produc[2].date}
            />
            <ProductItem
                title = {produc[3].title}
                amount ={produc[3].amount}
                date = {produc[3].date}
            />
            
           </Card>
    );
}
export default Product;

