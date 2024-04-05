import React, { useState } from "react";
import { login } from "../../../function/auth";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Login = ({ history }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [value, setValue] = useState({
    username: "",
    password: "",
  });

  const roleBaseRedirect = (role) => {
    if (role === "admin") {
      navigate("/admin/index");
    } else {
      navigate("/user/index");
    }
  };

  const onHandleChange = (e) => {
    const keyStr = e.target.name;
    const value = e.target.value;

    setValue((prev) => ({ ...prev, [keyStr]: value }));
  };

  const onHandleSubmit = async (e) => {
    e.preventDefault();
    login(value)
      .then((res) => {
        console.log("res-===>", res.data);

        dispatch({
          type: "LOGIN",
          payload: {
            token: res.data.token,
            role: res.data.payload.user.role,
            username: res.data.payload.user.username,
          },
        });
        localStorage.setItem("token", res.data.token);
        roleBaseRedirect(res.data.payload.user.role);
      })
      .catch((err) => {
        console.error(err);
        alert(err.response.data);
      });
  };
  return (
    <div>
      <h1>Login</h1>
      <form action="" onSubmit={onHandleSubmit}>
        <label>username</label>
        <input
          type="text"
          name="username"
          placeholder="username"
          onChange={onHandleChange}
        />
        <label>password</label>
        <input
          type="text"
          name="password"
          placeholder="password"
          onChange={onHandleChange}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Login;