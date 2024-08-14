import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { endPoints } from './Pages/services';

const CardItems = () => {
  const [product, setProduct] = useState([]);
  const [likedItem, setLikedItem] = useState([]);

  async function getProduct() {
    try {
      const { data } = await axios.get(endPoints.getProduct);
      setProduct(data?.product);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getProduct();
  }, []);
  return (
    <div className="mt-[15vh">
      <p className="font-bold text-lg">All Items</p>
      <div className="flex gap-2 flex-wrap justify-evenly">
        {product.map((i, index) => {
          return (
            <Cards
              key={index}
              likedItem={likedItem}
              setLikedItem={setLikedItem}
              item={i}
            />
          );
        })}
      </div>
      <p>Liked Items</p>
      <div className="flex gap-2 flex-wrap justify-evenly ">
        {product
          ?.filter((i) => likedItem?.includes(i.id))
          .map((i, index) => {
            return (
              <Cards
                key={index}
                likedItem={likedItem}
                setLikedItem={setLikedItem}
                item={i}
              />
            );
          })}
      </div>
    </div>
  );
};

export default CardItems;
