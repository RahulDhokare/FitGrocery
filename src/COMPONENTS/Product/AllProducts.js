import React from 'react'
import './AllProducts.css'
import ProductCart from './ProductCart'
import img1 from '../../ASSETS/Images/1.png'
import img2 from '../../ASSETS/Images/2.png'
import img3 from '../../ASSETS/Images/3.png'
import img4 from '../../ASSETS/Images/4.png'
import ProductCard from './ProductCart'
const AllProducts = () => {
    const products = [
        {
            id:1,
            productimage:img1,
            productname:'product 1',
            productprice:100,
            countype:'1 each kg',
            discountpercent:12
        },
        {
            id:2,
            productimage:img2,
            productname:'product 2',
            productprice:200,
            countype:'1 each kg',
            discountpercent:12
        },
        {
            id:3,
            productimage:img3,
            productname:'product 3',
            productprice:300,
            countype:'1 each kg',
            discountpercent:12
        },
        {
            id:4,
            productimage:img4,
            productname:'product 4',
            productprice:500,
            countype:'1 each kg',
            discountpercent:19
        },
        {
            id:5,
            productimage:img1,
            productname:'product 5',
            productprice:100,
            countype:'5 each kg',
            discountpercent:12
        },
        {
            id:6,
            productimage:img3,
            productname:'product 6',
            productprice:100,
            countype:'5 each kg',
            discountpercent:12
        },
        {
            id:7,
            productimage:img3,
            productname:'product 7',
            productprice:100,
            countype:'2 each kg',
            discountpercent:12
        },
        {
            id:8,
            productimage:img4,
            productname:'product 8',
            productprice:100,
            countype:'5 each',
            discountpercent:12
        },
        {
            id:9,
            productimage:img2,
            productname:'product 9',
            productprice:100,
            countype:'5 each kg',
            discountpercent:12
        },
        {
            id:10,
            productimage:img3,
            productname:'product 10',
            productprice:100,
            countype:'1 each kg',
            discountpercent:12
        },
    ]
  return (
    <div className='allproduct'>
        <h1>All Products</h1>
        <div className='products'>
           {
            products.map((item)=>{
                return(
                    <ProductCart data={item} key={item.id}/>
                )
            })
           }
        </div>
    </div>
  )
}

export default AllProducts