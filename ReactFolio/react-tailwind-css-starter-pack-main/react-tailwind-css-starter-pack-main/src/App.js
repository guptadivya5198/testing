import React from "react";
import Item from './Component/Item';
import ItemDate from "./Component/ItemDate";
import Card from "./Component/Card";


function App() {
   const Response =[
    {
      Itemname : "Nirma",
      Itemdate : " 20 ",
      Itemmonth : " June ",
      Itemyear : " 2000 ",
    },

    {
      Itemname : "Nirma2",
      Itemdate : " 202",
      Itemmonth : " July ",
      Itemyear : " 2002 ",
    },
    {
      Itemname : "Nirma3",
      Itemdate : " 203 ",
      Itemmonth : " August ",
      Itemyear : " 2003 ",
    },
  ];
  return (
    <div>
      <Card>
      <Item name ={Response[0].Itemname}></Item> 
      <ItemDate day = {Response[0].Itemdate} month={Response[0].Itemmonth} year={Response[0].Itemyear}></ItemDate>

      <Item name ={Response[1].Itemname}></Item> 
      <ItemDate  day = {Response[1].Itemdate} month={Response[1].Itemmonth} year={Response[1].Itemyear}></ItemDate>

      <Item name ={Response[2].Itemname}></Item> 
      <ItemDate  day = {Response[2].Itemdate} month={Response[2].Itemmonth} year={Response[2].Itemyear}></ItemDate>
      <div className="w-[100vw] h-[100vh] bg-blue-200 text-6xl text-center ">Hello Jii</div>
</Card>
    </div>
  );
}

export default App;
