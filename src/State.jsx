import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import "./State.scss";

const State = props => {
  const { active, tabIndex, className, disable, value, ...rest } = props;
  return (
    <span
      {...rest}
      role="radio"
      aria-checked={active}
      tabIndex={tabIndex}
      className={classNames("abg-switch__state", [className], {
        "abg-switch__state--on": active,
        "abg-switch__state--disable": disable
      })}
    >
      {props.children}
      <input type="radio" value={value} checked={active} />
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
