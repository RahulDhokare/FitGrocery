import React from 'react'
import Navbar from '../../COMPONENTS/Navbar/Navbar'
import BannerSlider from '../../COMPONENTS/Banners/BannerSlider'
import { HomeCategorys } from '../../COMPONENTS/Catagory/HomeCategorys'
import Product_Slider from '../../COMPONENTS/Product/Product_Slider'
import Footer1 from '../../COMPONENTS/Footer/Footer1' 
import Footer2 from '../../COMPONENTS/Footer/Footer2'
function Home() {
  return (
    <div>
        <Navbar/>
        <BannerSlider/>
        <HomeCategorys/>
        <Product_Slider/>
        <Footer1/>
        <Footer2/>
        Home</div>
  )
}

export default Home