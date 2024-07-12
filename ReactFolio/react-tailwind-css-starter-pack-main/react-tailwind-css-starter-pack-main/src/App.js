
import Product from "./Product";
import React from "react";

function App() {
  const product =[
    {
      title: " SurfExcel",
      amount : 450,
      date : "20-12-2024"
    },
    {
      title: " Tide",
      amount : 350,
      date : "30-01-2021"
    },
    {
      title: " SurfExcel",
      amount : 450,
      date : "18-01-2025"
    },
  ];
  return(
    <Product produc = {product}/>
  );
}


export default App;
