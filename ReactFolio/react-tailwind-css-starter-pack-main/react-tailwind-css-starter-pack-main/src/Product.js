import React from "react";
import BoxOfProduct from "./BoxOfProduct";

export default function Product({produc}){
    return (
        <div className="w-screen h-screen bg-red-200 flex flex-col gap-2 items-center justify-center">
    
    {
      produc.map((i)=>{
        return <BoxOfProduct item={i}/>
      })
    }
   
  </div>
    )
}