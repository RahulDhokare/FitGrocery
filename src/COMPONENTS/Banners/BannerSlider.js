import React from "react";
import Slider from 'react-slick'
import './BannerSlider.css'

const BannerSlider = () => {
  const data = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      titel : 'Fresh Vegetavles & Fruits at your doorstep',
      description : 'we deliver fresh vegetables & fruits at your doorstep',
      button : 'htttps://www.google.com'
    },
    {
        id: 2,
      image:
        "https://images.unsplash.com/photo-1506617564039-2f3b650b7010?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      titel : 'Fresh Vegetavles & Fruits at your doorstep',
      description : 'we deliver fresh vegetables & fruits at your doorstep',
      button : 'htttps://www.google.com'
    },
    {
        id: 3,
      image:
        "https://images.unsplash.com/photo-1506617420156-8e4536971650?q=80&w=1123&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      titel : 'Fresh Vegetavles & Fruits at your doorstep',
      description : 'we deliver fresh vegetables & fruits at your doorstep',
      button : 'htttps://www.google.com'
    }
  ];

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return <div className="bannerslider">
   <Slider className="bannerslider" {...settings}>
      {
        data.map(item=> {
            return (
                <div className="imggecont" key={item.id}>
                    <img src={item.image} alt='noimg'/>
                    <div className="content">
                        <h1>{item.titel}</h1>
                        <p>{item.description}</p>
                        <button>Shop More</button>
                    </div>
                </div>
            )
        })
      }
   </Slider>
  </div>
};

export default BannerSlider;
