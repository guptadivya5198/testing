import React from "react";

function ProductDate(props){

    return(
        <div className="product-date">
            <div className="product-date_month">{props.date.substring(0,4)}</div>
             <div className="product-date_year">{props.date.substring(5,7)}</div>
            <div className="product-date_date">{props.date.substring(9,11)}</div> 
        </div>
    );
};
export default ProductDate;