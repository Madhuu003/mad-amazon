import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://wallpaperaccess.com/full/2483952.png"
          alt=""
        />

        <div className="home__row">
          <Product
            id="12321341"
            title="Apple iphone 12 Purple"
            price={11.96}
            rating={5}
            image="https://m.media-amazon.com/images/I/71hIfcIPyxS._AC_UY436_FMwebp_QL65_.jpg"
          />
          <Product
            id="49538094"
            title="Sony PlayStation Console PS5"
            price={239.0}
            rating={4}
            image="https://m.media-amazon.com/images/I/41BR-uI9jkL._AC_SR400,600_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="4903850"
            title="i-Mac 2021 with 4K Retina Display with Keyboard and Mouse"
            price={199.99}
            rating={3}
            image="https://m.media-amazon.com/images/I/31FeKzJzVOS._AC_SR400,600_.jpg"
          />
          <Product
            id="23445930"
            title="Msi Ryzen 7 with 40CM display"
            price={98.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/41BR-uI9jkL._AC_SR400,600_.jpg"
          />
          <Product
            id="3254354345"
            title="Noise Smart Watch"
            price={598.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/61QPhnYlfoL._SX679_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="90829332"
            title="Truke Airdopes"
            price={1094.98}
            rating={4}
            image="https://m.media-amazon.com/images/I/61qrgxwXboL._SX679_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
