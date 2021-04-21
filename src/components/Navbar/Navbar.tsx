import React, { useState, useEffect } from "react";
import "./navbar.css";

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
  enum hamburgerState {
    initial = "initial",
    closed = "closed",
    opened = "opened",
  }

  enum pagePosition {
    top = "top",
    scrolled = "scrolled",
  }

  const [scrollState, setScrollState] = useState(pagePosition.top);
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(
    hamburgerState.initial
  );
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowSize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  useEffect(() => {
    // check to see if the page is at the top or scrolled to change navbar styles accordingly
    const listener: any = document?.addEventListener("scroll", (e) => {
      const scrolled: undefined | number = document.scrollingElement?.scrollTop;
      if (scrolled !== undefined && scrolled >= 50) {
        if (scrollState !== pagePosition.scrolled) {
          setScrollState(pagePosition.scrolled);
        }
      } else {
        if (scrollState !== pagePosition.top) {
          setScrollState(pagePosition.top);
        }
      }
    });
    // remove eventlistner on unmount
    return () => {
      document.removeEventListener("scroll", listener);
    };
  }, [scrollState, pagePosition.top, pagePosition.scrolled]);

  useEffect(() => {
    if (
      isHamburgerOpen === hamburgerState.opened ||
      isHamburgerOpen === hamburgerState.initial ||
      windowSize > 800
    ) {
      document.getElementsByTagName("html")[0].style.overflow = "scroll";
    } else {
      document.getElementsByTagName("html")[0].style.overflow = "hidden";
    }
  }, [
    isHamburgerOpen,
    hamburgerState.initial,
    windowSize,
    hamburgerState.opened,
  ]);

  const hamburgerMenuHandler = () => {
    switch (isHamburgerOpen) {
      case hamburgerState.initial:
        //for safari
        document.body.scrollTop = 0;
        //for chrome and firefox
        document.documentElement.scrollTop = 0;
        setIsHamburgerOpen(hamburgerState.closed);
        break;
      case hamburgerState.opened:
        //for safari
        document.body.scrollTop = 0;
        //for chrome and firefox
        document.documentElement.scrollTop = 0;
        setIsHamburgerOpen(hamburgerState.closed);
        break;
      case hamburgerState.closed:
        setIsHamburgerOpen(hamburgerState.opened);

        break;
    }
  };

  return (
    <div>
      <nav
        className={scrollState === pagePosition.top ? "nav " : "nav-scrolled "}
      >
        <div
          className={
            scrollState === pagePosition.top
              ? "nav-container"
              : "nav-container-scrolled"
          }
        >
          <div
            className={
              scrollState === pagePosition.top ? "logo" : "logo-scrolled"
            }
          >
            Ghallerya
          </div>
          <div className="nav-links">
            <a href="t">feed</a>
            <a href="t">authors</a>
            <a href="t">explore</a>
            <a href="t">blog</a>
            <a href="t">contact</a>
          </div>
          <div className="authentication">
            <a href="t" className="login">
              Log in
            </a>
            <a
              href="t"
              className={
                scrollState === pagePosition.top ? "signup" : "signup-scrolled"
              }
            >
              <div className="signup-text">Sign Up</div>
            </a>
          </div>
        </div>
        <div
          className={
            isHamburgerOpen === hamburgerState.closed
              ? "nav-background-container"
              : "nav-background-container-close"
          }
        >
          <div
            className={
              isHamburgerOpen === hamburgerState.closed
                ? "nav-mobile-background"
                : "nav-mobile-background-close"
            }
            style={
              isHamburgerOpen === hamburgerState.initial
                ? { display: "none" }
                : { display: "inline-block" }
            }
          ></div>
        </div>
        <div className="nav-container-mobile">
          <div
            className="logo-mobile"
            style={
              isHamburgerOpen === hamburgerState.closed
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
                    isHamburgerOpen === hamburgerState.closed
                      ? { backgroundColor: "var(--bar-bg, black)" }
                      : { backgroundColor: "var(--bar-bg, white)" }
                  }
                ></span>
                <span
                  style={
                    isHamburgerOpen === hamburgerState.closed
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
          isHamburgerOpen === hamburgerState.closed
            ? { display: "block" }
            : { display: "none" }
        }
      >
        <ul>
          <li>
            <a href="t">feed</a>
          </li>
          <li>
            <a href="t">authors</a>
          </li>
          <li>
            <a href="t">explore</a>
          </li>
          <li>
            <a href="t">blog</a>
          </li>
          <li>
            <a href="t">contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Navbar;
