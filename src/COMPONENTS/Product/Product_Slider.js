import React from 'react'
import './Product_slider.css'
import  CategorySlidebar from './CategorySlidebar'
import AllProducts from './AllProducts'
const Product_Slider = () => {
  return (
    <div className='product_slidebar'>
        <CategorySlidebar/>
        <AllProducts/>

    </div>
  )
}

export default Product_Slider