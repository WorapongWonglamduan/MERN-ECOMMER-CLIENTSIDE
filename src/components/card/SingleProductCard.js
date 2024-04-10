import React from "react";
import { Card, Tabs } from "antd";
import { HeartOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
const { Meta } = Card;
const { TabPane } = Tabs;
const SingleProductCard = ({ product }) => {
  const { _id, title, description, images, price, quantity, sold, category } =
    product;
  const itemsTabs = [
    {
      key: "1",
      label: "Description",
      children: description,
    },
    {
      key: "2",
      label: " More ...",
      children: " More ...",
    },
  ];
  return (
    <>
      <div className="col-md-7">
        <Carousel autoPlay showArrows infiniteLoop>
          {images &&
            images.map((item, index) => {
              return (
                <div key={index}>
                  <img src={item.url} alt="" />
                </div>
              );
            })}
        </Carousel>

        <Tabs defaultActiveKey="1" items={itemsTabs} />
      </div>
      <div className="col-md-5">
        <h1 className="bg-info p-3">{title}</h1>
        <Card
          key={_id}
          actions={[
            <Link to={"/"}>
              <HeartOutlined className="text-info" />
              <br />
              Add to wishlist
            </Link>,
            <>
              <ShoppingCartOutlined className="text-danger" />
              <br />
              Add to cart,
            </>,
          ]}
        >
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              Price
              <span className="float-end">{price}</span>
            </li>
            <li className="list-group-item">
              Quantity
              <span className="float-end">{quantity}</span>
            </li>
            <li className="list-group-item">
              Sold
              <span className="float-end">{sold}</span>
            </li>
            {category && (
              <li className="list-group-item">
                Category
                <span className="float-end">{category.name}</span>
              </li>
            )}
          </ul>
        </Card>
      </div>
    </>
  );
};

export default SingleProductCard;