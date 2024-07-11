

import React from "react";

export default function BoxOfProduct({item}){

    return <div className="w-[50%] bg-green-200 flex justify-between items-center p-5">
    <div>
       {item.title}
    </div>
    <div>
      <p>{item.date}</p>
      <p>{item.amount}</p>
    </div>
</div>
}