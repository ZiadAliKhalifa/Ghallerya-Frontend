import React, { useState, useEffect } from "react";
import "./navbar.css";

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
  const [scrollState, setScrollState] = useState("top");

  useEffect(() => {
    // check to see if the page is at the top or scrolled to change navbar styles accordingly
    const listener: any = document?.addEventListener("scroll", (e) => {
      const scrolled: undefined | number = document.scrollingElement?.scrollTop;
      if (scrolled !== undefined && scrolled >= 50) {
        if (scrollState !== "scrolled") {
          setScrollState("scrolled");
        }
      } else {
        if (scrollState !== "top") {
          setScrollState("top");
        }
      }
    });
    // remove eventlistner on unmount
    return () => {
      document.removeEventListener("scroll", listener);
    };
  }, [scrollState]);

  return (
    <nav className={scrollState === "top" ? "nav " : "nav-scrolled "}>
      <div
        className={
          scrollState === "top" ? "nav-container" : "nav-container-scrolled"
        }
      >
        <div className={scrollState === "top" ? "logo" : "logo-scrolled"}>
          Ghallerya
        </div>
        <div className="nav-links">
          <a href="#">feed</a>
          <a href="#">authors</a>
          <a href="#">explore</a>
          <a href="#">blog</a>
          <a href="#">contact</a>
        </div>
        <div className="authentication">
          <a href="#" className="login">
            Log in
          </a>
          <a
            href="#"
            className={scrollState === "top" ? "signup" : "signup-scrolled"}
          >
            <div className="signup-text">Sign Up</div>
          </a>
        </div>
      </div>
      <div className="nav-container-mobile">
        <div className="logo-mobile">Ghallerya</div>
        <i className="fa fa-bars" aria-hidden="true"></i>
        <div className="nav-mobile-menu-closed">
          <i className="fas fa-times"></i>
          <div className="nav-mobile-links">
            <ul>
              <li>
                <a href="#">feed</a>
              </li>
              <li>
                <a href="#">authors</a>
              </li>
              <li>
                <a href="#">explore</a>
              </li>
              <li>
                <a href="#">blog</a>
              </li>
              <li>
                <a href="#">contact</a>
              </li>
            </ul>
          </div>
          <div className="nav-mobile-menu-logo">Ghallerya</div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
