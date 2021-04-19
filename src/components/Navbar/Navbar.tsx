import React, { useState, useEffect } from "react";
import "./navbar.css";

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
  const [scrollState, setScrollState] = useState("top");
  const [isHamburgerOpen, setIsHamburgerOpen] = useState("initial");

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

  useEffect(() => {
    if (isHamburgerOpen === "opened") {
      document.getElementsByTagName("html")[0].style.overflow = "scroll";
    } else {
      document.getElementsByTagName("html")[0].style.overflow = "hidden";
    }
  }, [isHamburgerOpen]);

  const hamburgerMenuHandler = () => {
    switch (isHamburgerOpen) {
      case "initial":
        setIsHamburgerOpen("closed");
        break;
      case "opened":
        setIsHamburgerOpen("closed");
        break;
      case "closed":
        setIsHamburgerOpen("opened");
        break;
    }
  };

  return (
    <div>
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
        <div
          className={
            isHamburgerOpen === "closed"
              ? "nav-background-container"
              : "nav-background-container-close"
          }
        >
          <div
            className={
              isHamburgerOpen === "closed"
                ? "nav-mobile-background"
                : "nav-mobile-background-close"
            }
            style={
              isHamburgerOpen === "initial"
                ? { display: "none" }
                : { display: "inline-block" }
            }
          ></div>
        </div>
        <div className="nav-container-mobile">
          <div
            className="logo-mobile"
            style={
              isHamburgerOpen === "closed"
                ? { color: "black" }
                : { color: "white" }
            }
          >
            Ghallerya
          </div>
          <div className="hamburger-icon">
            <div className="menu-icon" onClick={hamburgerMenuHandler}>
              <input className="menu-icon__cheeckbox" type="checkbox" />
              <div>
                <span
                  style={
                    isHamburgerOpen === "closed"
                      ? { backgroundColor: "var(--bar-bg, black)" }
                      : { backgroundColor: "var(--bar-bg, white)" }
                  }
                ></span>
                <span
                  style={
                    isHamburgerOpen === "closed"
                      ? { backgroundColor: "var(--bar-bg, black)" }
                      : { backgroundColor: "var(--bar-bg, white)" }
                  }
                ></span>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div
        className="nav-links-container"
        style={
          isHamburgerOpen === "closed"
            ? { display: "block" }
            : { display: "none" }
        }
      >
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
    </div>
  );
};
export default Navbar;
