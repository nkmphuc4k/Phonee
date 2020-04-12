import React from 'react'
import {Product} from './Product';
import "./Product.css";

export function ProductList() {
    var products = [
        {
            id:1,
            image:"https://cdn.tgdd.vn/Products/Images/42/214924/xiaomi-redmi-note-9s-4gb-green-400x460-400x400.jpg",
            name: "OPPO Reno2 F",
            price: "7.990.000"
        },
        {
            id:2,
            image:"https://cdn.tgdd.vn/Products/Images/42/210246/samsung-galaxy-a71-blue-600x600-1-400x400.jpg",
            name: "Samsung Galaxy A71",
            price: "8.990.000"
        },

        {
            id:3,
            image:"https://cdn.tgdd.vn/Products/Images/42/153856/iphone-11-red-400x400.jpg",
            name: "iPhone 11 64GB",
            price: "7.990.000"
        },
        {
            id:4,
            image:"https://cdn.tgdd.vn/Products/Images/42/210246/samsung-galaxy-a71-blue-600x600-1-400x400.jpg",
            name: "Samsung Galaxy S10 Lite",
            price: "8.990.000"
        }
    ];

    let elements = products.map(
        (product, index)=>{
             return  <div class="product-card"><Product key={product.index} image={product.image} name={product.name} price={product.price}/></div>
        }
    )
  return (
 <div>
  <section class="products">
  {elements}
  {elements}
  {elements}
</section>
</div>

  )
}

export default ProductList
