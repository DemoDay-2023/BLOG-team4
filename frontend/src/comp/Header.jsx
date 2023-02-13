import React from "react";
import { Link, useLocation } from "react-router-dom";

export const Header = () => {
  return (
    <div>
      <Link to="/" onClick={useLocation().pathname === "/"}>
        <button>Home</button>
      </Link>

      <Link to="/Blogpost" onClick={useLocation().pathname === "/Blogpost"}>
        <button>Blogpost</button>
      </Link>

      <Link to="/Blog" onClick={useLocation().pathname === "/Blog"}>
        <button>Blog</button>
      </Link>
    </div>
  );
};

export default Header;
