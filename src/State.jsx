import React from "react";
import PropTypes from "prop-types";
import "./State.scss";

const State = props => {
  const { active, tabIndex, className, disable, value, ...rest } = props;
  const classes = [
    "abg-switch__state",
    className,
    active ? "abg-switch__state--on" : "",
    disable ? "abg-switch__state--disable" : ""
  ].join(" ");

  return (
    <span
      tabIndex={tabIndex}
      className={classes}
      {...rest}
      role="radio"
      aria-checked={active}
      tabIndex={tabIndex}
      className={classes}
    >
      {props.children}
      <input type="radio" value={value} defaultChecked={active} />
    </span>
  );
};

State.propTypes = {
  value: PropTypes.string.isRequired,
  children: PropTypes.node,
  disable: PropTypes.bool,
  active: PropTypes.bool,
  tabIndex: PropTypes.number,
  className: PropTypes.string
};

State.defaultProps = {
  children: "",
  active: false,
  disable: false,
  tabIndex: 0,
  className: ""
};

export default State;
