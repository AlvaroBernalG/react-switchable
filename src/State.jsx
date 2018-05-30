import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import "./State.scss";

const State = props => {
  const {
    onKeyDown,
    onClick,
    active,
    tabIndex,
    className,
    disable,
    value,
    ...rest
  } = props;
  return (
    <span
      {...rest}
      onKeyDown={onKeyDown}
      onClick={onClick}
      role="radio"
      aria-checked={active}
      tabIndex={tabIndex}
      className={classNames("switch__state", [className], {
        "switch__state--on": active,
        "switch__state--disable": disable
      })}
    >
      {props.children}
      <input type="radio" value={value} hidden />
    </span>
  );
};

State.propTypes = {
  value: PropTypes.string.isRequired,
  children: PropTypes.node,
  onClick: PropTypes.func,
  onKeyDown: PropTypes.func,
  disable: PropTypes.bool,
  active: PropTypes.bool,
  tabIndex: PropTypes.number,
  className: PropTypes.arrayOf(PropTypes.string)
};

State.defaultProps = {
  children: "",
  onClick: () => {},
  onKeyDown: () => {},
  active: false,
  disable: false,
  tabIndex: 0,
  className: []
};

export default State;
