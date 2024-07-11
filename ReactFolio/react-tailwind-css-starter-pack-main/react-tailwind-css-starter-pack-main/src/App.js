
// // import BoxOfProduct from "./BoxOfProduct";
// // import Product from "./pages/Product";

import Product from "./Product";

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

{/* // function App() { */}
//   const product =[
//     {
//       id : "p1",
//       title : "SurfExcel",
//       amount : 420,
//       date : "2024-12-12",
   
//   },
//   {
//       id : "p2" ,
//       title : "Nirma",
//       amount : 350,
//       date : "2024-12-12",
      
//   },
//   {
//       id : "p3",
//       title : "Tide",
//       amount : 550,
//       date : "2024-12-12",
//   },
//   {
//       id : "p4",
//       title :"Maggie",
//       amount : 670,
//       date :"2024-12-12",
//   },
// ];
  
//   return (
//   <Product produc={product}/>
//   );
// }

// export default App;

 