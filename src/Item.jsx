/* eslint react/prop-types: 0 */

import React from "react";
import PropTypes from "prop-types";
import "./Item.scss";

class Item extends React.Component {
  static propTypes = {
    value: PropTypes.string.isRequired,
    children: PropTypes.node,
    disable: PropTypes.bool,
    active: PropTypes.bool
  };

  static defaultProps = {
    children: "",
    active: false,
    disable: false
  };

  render() {
    const { name, active, className, disable, value, ...rest } = this.props;

    const classes = [
      "abg-switch__item",
      className,
      active ? "abg-switch__item--on" : "",
      disable ? "abg-switch__item--disable" : ""
    ].join(" ");

    return (
      <span className={classes} tabIndex={disable ? -1 : 0} {...rest}>
        {this.props.children}
        <input
          tabIndex={disable ? -1 : 0}
          type="radio"
          value={value}
          name={name}
          defaultChecked={active}
        />
      </span>
    );
  }
}

export default Item;
