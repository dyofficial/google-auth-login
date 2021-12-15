import React, { useState } from "react";
import { GoogleLogin, GoogleLogout } from "react-google-login";

export default function Login() {
  const [showLoginButton, setShowLoginButton] = useState(true);
  const [showLogoutButton, setShowLogoutButton] = useState(false);

  const clientId =
    "896508830695-dce8rfvi2htodikfc95a72pmem008hfn.apps.googleusercontent.com";
  const onLoginSuccess = (res) => {
    console.log("Login Success", res.profileObj);
    setShowLoginButton(false);
    setShowLogoutButton(true);
  };

  const onLoginFailure = (res) => {
    console.log("Login Failed", res);
  };

  const OnLogoutSuccess = () => {
    console.log("You have logged out");
    setShowLoginButton(true);
    setShowLogoutButton(false);
    console.clear();
  };

  return (
    <div>
      {showLoginButton ? (
        <GoogleLogin
          clientId={clientId}
          buttonText="Login"
          onSuccess={onLoginSuccess}
          onFailure={onLoginFailure}
          cookiePolicy={"single_host_origin"}
        />
      ) : null}
      {showLogoutButton ? (
        <GoogleLogout
          clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
          buttonText="Logout"
          onLogoutSuccess={OnLogoutSuccess}
        ></GoogleLogout>
      ) : null}
    </div>
  );
}
