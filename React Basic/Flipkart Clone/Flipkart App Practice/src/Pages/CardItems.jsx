import React, { useEffect, useState } from 'react';
import Cards from './Cards';
import axios from 'axios';
import { endPoints } from '../services';

const CardItems = () => {
  const [product, setProduct] = useState([]);
  const [likedItem, setLikedItem] = useState([]);
  async function getProduct() {
    try {
      const res = await axios.get(endPoints.getProduct);
      setProduct(res?.data?.products);
      console.log(res?.data?.products);
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    getProduct();
  }, []);

  console.log(likedItem);
  return (
    <div className="mt-[15vh] ">
      <p className="!font-bold text-lg">All Items</p>
      <div className="flex gap-2 flex-wrap justify-evenly ">
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
