import { Button } from "@material-ui/core";
import React from "react";
import "./Login.css";

function Login() {
  const signIn = () => {};

  return (
    <div className="login">
      <div className="login__logo">
        <img
          src="https://cdn.arstechnica.net/wp-content/uploads/2017/08/Discord-LogoWordmark-Color-760x272.png"
          alt=""
        />
      </div>
      <Button onClick={signIn}>Sign IN</Button>
    </div>
  );
}

export default Login;
