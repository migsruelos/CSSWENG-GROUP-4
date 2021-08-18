import { Carousel } from 'react-carousel-minimal';
import React, { Component }  from 'react';
import product1 from './images/product 1.jpg';
import product2 from './images/product 2.jpg';
import product3 from './images/product 3.jpg';
import product4 from './images/product 4.JPG';
import product5 from './images/product 5.JPG';
import product6 from './images/product 6.jpg';

function ProductPage() {
 const data = [
    {
      image: product1 
      
    },
    {
      image: product2 
      
    },
    {
      image: product3 
      
    },

    {
      image: product4 
      
    },

    {
      image: product5 
      
    },

    {
      image: product6 
      
    }
    
  ];

  const captionStyle = {
    fontSize: '2em',
    fontWeight: 'bold',
  }
  const slideNumberStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
  }
  return (
    <div className="App">
      <div style={{ textAlign: "center" }}>
        <h2>Product Catalog</h2>
        <p>Different types of products designed for our clients.</p>
        <div style={{
          padding: "0 20px"
        }}>
          <Carousel
            data={data}
            time={2000}
            width="850px"
            height="500px"
            captionStyle={captionStyle}
            radius="10px"
            slideNumber={true}
            slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            thumbnails={true}
            thumbnailWidth="100px"
            style={{
              textAlign: "center",
              maxWidth: "850px",
              maxHeight: "500px",
              margin: "40px auto",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
