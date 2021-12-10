import React from "react";
import "./footerMenu.css";

function FooterMenu() {
  return (
    <div className="footerMenu">
      <ul className="nopadding" style={{ listStyleType: "none" }}>
        <li>
          <a href="/">LOREM</a>
        </li>
        <span className="pointsymbol">•</span>
        <li>
          <a href="/">LOREM</a>
        </li>
        <span className="pointsymbol">•</span>
        <li>
          <a href="/">LOREM</a>
        </li>
        <span className="pointsymbol">•</span>
        <li>
          <a href="/">LOREM</a>
        </li>
        <span className="pointsymbol">•</span>
        <li>
          <a href="/">LOREM</a>
        </li>
      </ul>
    </div>
  );
}

export default FooterMenu;
