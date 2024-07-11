import React from "react";
import ProductDate from "./ProductDate";
import Card from "./Card";

function ProductItem(props){
    return(
        <Card className = 'product-item'>
            <ProductDate date = {props.date}/>
            {/* <p>{props.date}</p> */}
           <div className="product-item_description">
            <h2>
                {props.title}
            </h2>
           </div>
        </Card>
    );
    
}
export default ProductItem;