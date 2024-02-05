import React from 'react'
import Navbar from '../../COMPONENTS/Navbar/Navbar'
import BannerSlider from '../../COMPONENTS/Banners/BannerSlider'
import { HomeCategorys } from '../../COMPONENTS/Catagory/HomeCategorys'
import Product_Slider from '../../COMPONENTS/Product/Product_Slider'
 
function Home() {
  return (
    <div>
        <Navbar/>
        <BannerSlider/>
        <HomeCategorys/>
        <Product_Slider/>
        Home</div>
  )
}

export default Home