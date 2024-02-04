import React from 'react'
import Navbar from '../../COMPONENTS/Navbar/Navbar'
import BannerSlider from '../../COMPONENTS/Banners/BannerSlider'
import { HomeCategorys } from '../../COMPONENTS/Catagory/HomeCategorys'
 
function Home() {
  return (
    <div>
        <Navbar/>
        <BannerSlider/>
        <HomeCategorys/>
        Home</div>
  )
}

export default Home