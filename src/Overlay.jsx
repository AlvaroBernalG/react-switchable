import React from "react";
import PropTypes from "prop-types";
import "./Overlay.scss";

const Overlay = props => {
  Overlay.propTypes = {
    selectedIndex: PropTypes.number.isRequired,
    totalItems: PropTypes.number.isRequired,
    className: PropTypes.string
  };

  Overlay.defaultProps = {
    className: ""
  };

  const { selectedIndex, totalItems, className, ...rest } = props;
  const classes = [className, "abg-switch__overlay"].join(" ");
  return (
    <span
      className={classes}
      style={{
        width: `${100 / totalItems}%`,
        transform: `translateX(${100 * selectedIndex}%)`
      }}
      {...rest}
    />
  );
};

export default Overlay;
