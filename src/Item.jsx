import React from "react";
import PropTypes from "prop-types";
import "./Item.scss";

const Item = props => {
  const { active, tabIndex, className, disable, value, ...rest } = props;

  const classes = [
    "abg-switch__item",
    className,
    active ? "abg-switch__item--on" : "",
    disable ? "abg-switch__item--disable" : ""
  ].join(" ");

  return (
    <span
      tabIndex={tabIndex}
      className={classes}
      {...rest}
      role="radio"
      aria-checked={active}
    >
      {props.children}
      <input type="radio" value={value} defaultChecked={active} />
    </span>
  );
};

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

export default Item;
