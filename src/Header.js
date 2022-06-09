import React, { PureComponent } from "react";
import "./Header.css";

export default class Header extends PureComponent {
  render() {
    return (
      <header className="component-header">
        <img
          src="//cdn.jsdelivr.net/emojione/assets/png/1f420.png"
          width="32"
          height="32"
          alt=""
        />
        Emoji Search SAFe DevSecOps Iberia 2022 Final Class
        <img
          src="//cdn.jsdelivr.net/emojione/assets/png/1f640.png"
          width="32"
          height="32"
          alt=""
        />
      </header>
    );
  }
}
