import React, { useState } from "react";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import { Link } from "react-router-dom";

const items = [
  {
    label: <Link to={"/"}>Home</Link>,
    key: "home",
    // icon: <MailOutlined />,
  },
  {
    label: <Link to={"/login"}>login</Link>,
    key: "login",
    icon: <MailOutlined />,
  },
  {
    label: <Link to={"/register"}>Register</Link>,
    key: "register",
    icon: <AppstoreOutlined />,
    disabled: false,
  },
  // {
  //   label: "Navigation Three - Submenu",
  //   key: "SubMenu",
  //   icon: <SettingOutlined />,
  //   children: [
  //     {
  //       type: "group",
  //       label: "Item 1",
  //       children: [
  //         {
  //           label: "Option 1",
  //           key: "setting:1",
  //         },
  //         {
  //           label: "Option 2",
  //           key: "setting:2",
  //         },
  //       ],
  //     },
  //     {
  //       type: "group",
  //       label: "Item 2",
  //       children: [
  //         {
  //           label: "Option 3",
  //           key: "setting:3",
  //         },
  //         {
  //           label: "Option 4",
  //           key: "setting:4",
  //         },
  //       ],
  //     },
  //   ],
  // },
  // {
  //   label: (
  //     <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
  //       Navigation Four - Link
  //     </a>
  //   ),
  //   key: "alipay",
  // },
];

const Navbar = () => {
  const [current, setCurrent] = useState("home");
  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };
  return (
    <Menu
      onClick={onClick}
      selectedKeys={[current]}
      mode="horizontal"
      items={items}
    />
  );
};

export default Navbar;