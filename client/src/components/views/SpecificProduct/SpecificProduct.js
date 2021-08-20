import React from "react";
import './specific-product.css';
import product1 from './images/product 1.jpg';
import product2 from './images/product 2.jpg';
import product3 from './images/product 3.jpg';
import product4 from './images/product 4.JPG';
import product5 from './images/product 5.JPG';
import product6 from './images/product 6.jpg';

function SpecificProduct() {
    return (
      <div>
        
        <div className="splash">
          <img className="splash-img" img src={product1} />
          <div className="splash-text">
            <h1 className="splash-title">PRODUCT</h1>
            <p className="splash-subtext"> Lorem ipsum dolor sit amet, consectetur <br />adipiscing elit, sed do eiusmod tempor <br />incididunt ut labore et dolore magna aliqua.</p>
            <ul> 
              <li>Dimensions</li> <br />
              <li>Material</li> <br />
              <li>Price</li> <br />
            </ul>
          </div>
        </div>
        <div className="related-products">
          <h1 className="related-products-title"> RELATED PRODUCTS</h1>
          <div className="products-catalog">
            <div className="product-block">
              <img className="product-img" img src={product2} />
              <p className="product-name"> NAME</p>
            </div>
            <div className="product-block">
              <img className="product-img" img src={product3} />
              <p className="product-name"> NAME</p>
            </div>
            <div className="product-block">
              <img className="product-img" img src={product4} />
              <p className="product-name"> NAME</p>
            </div>
            <div className="product-block">
              <img className="product-img" img src={product5} />
              <p className="product-name"> NAME</p>
            </div>
          </div>
        </div>
        <div className="footer">
          <div className="footer-left">
            <h1>TRADE</h1>
            <div className="footer-left-text">
              <h2 className="left-text-top">Latest Blog Post</h2>
              <p className="left-text-middle">Ready to get started?</p>
              <p className="left-text-bottom">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed <br />do eiusmod tempor incididunt ut labore et dolore magna <br />aliqua. Ut enim ad minim veniam, quis nostrud exercitation <br />ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
          </div>
          <div className="break" />
          <div className="footer-right">
            <div className="footer-product-info">
              <p className="title">Product</p>
              <p>Product</p>
              <p>Product</p>
              <p>Product</p>
              <p>Product</p>
              <p>Product</p>
              <p className="copyright-text">© 2010 — 2020</p>
            </div>
            <div className="footer-company-info">
              <p className="title">Company</p>
              <p>Company</p>
              <p>Company</p>
              <p>Company</p>
              <p>Company</p>
              <p>Company</p>
              <p className="privacy-text">Privacy — Terms</p>
            </div>
          </div>
        </div></div>
    );
  }


export default SpecificProduct