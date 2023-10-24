import React from "react";
import "./navbar.css";
import logo from "../../assets/logo.png";
import github from "../../assets/pngwing.com (12).png";
import linkedin from "../../assets/pngwing.com (7).png";
import X from "../../assets/pngwing.com (6).png";

const Navbar = () => {
  const handleReloadClick = () => {
    window.location.reload();
    window.scrollTo(0, 0);
  };

  return (
    <nav className="navbar">
      <img src={logo} onClick={handleReloadClick} alt="Logo" className="logo" />
      <div className="socialHandles">
        <a
          href="https://www.linkedin.com/in/shiwang-bisht-b5918b269/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={linkedin} alt="" className="socialHandlesLink" />
        </a>
        <a
          href="https://twitter.com/Shiwang0bisht"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={X} alt="" className="socialHandlesLink" target="_blank" />
        </a>

        <a
          href="https://github.com/Shiwang0-0"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={github}
            alt=""
            className="socialHandlesLink"
            target="_blank"
          />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
