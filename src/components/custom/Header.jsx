import React from "react";
import logo from "../../../public/logo.png";
import { Button } from "../ui/button";
import { UserButton, useUser } from "@clerk/clerk-react";
import { Link } from "react-router-dom";

const Header = () => {
  const { isSignedIn } = useUser();

  return (
    <header className="flex items-center justify-between p-4 bg-white shadow-md md:p-6">
      <img src={logo} alt="Logo" className="w-24 h-auto md:w-32" />
      {isSignedIn ? (
        <div className="flex items-center gap-4">
          <Link to={"/dashboard"}>
            <Button>Get Started</Button>
          </Link>
          <UserButton />
        </div>
      ) : (
        <div>
            <Link to={"/auth/sign-in"}>
                <Button>Sign In</Button>
            </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
