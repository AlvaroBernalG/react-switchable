import React from "react";
import PropTypes from "prop-types";
import "./Item.scss";

const Item = props => {
  Item.propTypes = {
    value: PropTypes.string.isRequired,
    children: PropTypes.node,
    disable: PropTypes.bool,
    active: PropTypes.bool,
    tabIndex: PropTypes.number,
    className: PropTypes.string
  };

  Item.defaultProps = {
    children: "",
    active: false,
    disable: false,
    tabIndex: 0,
    className: ""
  };

  const { active, className, disable, value, ...rest } = props;
  // console.log("Should be disable", props, disable);

  const classes = [
    "abg-switch__item",
    className,
    active ? "abg-switch__item--on" : "",
    disable ? "abg-switch__item--disable" : ""
  ].join(" ");

  return (
    <span
      className={classes}
      {...rest}
      role="radio"
      aria-checked={active}
      aria-disabled={disable}
    >
      {props.children}
      <input type="radio" value={value} defaultChecked={active} />
    </span>
  );
};

export default Item;
