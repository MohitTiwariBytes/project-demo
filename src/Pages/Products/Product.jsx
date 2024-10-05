import React, { useEffect } from "react";
import "./Product.css";
import Navbar from "../../Components/Navbar/Navbar";
import Card from "../../Components/ProductCard/Card";
import { generateUserToken, database } from "../../Backend/main";

const Product = () => {
  useEffect(() => {
    generateUserToken();
  }, []);
  return (
    <div className="main-product-page">
      <Navbar title={"Products"}></Navbar>
      <div className="productsCards">
        <Card
          title={"Strawberry Jam"}
          sssssss
          description={"Lorem dil cuit, Seit, Sit"}
          price={"328.68"}
          imgUrl={
            "https://mir-s3-cdn-cf.behance.net/project_modules/1400/7072a443494769.57f1f74b9a766.jpg"
          }
        ></Card>
        <Card
          title={"Skin Moisturizer"}
          description={"Lorem dil cuit, Seit, Sit"}
          price={"122.45"}
          imgUrl={
            "https://img.freepik.com/free-photo/organic-cosmetic-product-with-dreamy-aesthetic-fresh-background_23-2151382825.jpg"
          }
        ></Card>
        <Card
          title={"Wall Poster Minimal"}
          description={"Lorem dil cuit, Seit, Sit"}
          price={"670"}
          imgUrl={
            "https://ih1.redbubble.net/image.948763846.9379/ffp,small,black,off_white,box20,wall_texture,product,750x1000.jpg"
          }
        ></Card>
      </div>
    </div>
  );
};

export default Product;
