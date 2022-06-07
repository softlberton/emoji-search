import React, { PureComponent } from "react";
import "./Header.css";

export default class Header extends PureComponent {
  render() {
    return (
      <header className="component-header">
        <img
          src="//cdn.jsdelivr.net/emojione/assets/png/1f644.png"
          width="32"
          height="32"
          alt=""
        />
        Emoji Search SAFe DevSecOps Iberia
        <img
          src="//cdn.jsdelivr.net/emojione/assets/png/1f644.png"
          width="32"
          height="32"
          alt=""
        />
      </header>
    );
  }
}
