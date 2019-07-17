import React from "react";
import PropTypes from "prop-types";
import "./Overlay.scss";

const Overlay = props => {
  Overlay.propTypes = {
    goTo: PropTypes.number.isRequired,
    items: PropTypes.number.isRequired,
    classTransition: PropTypes.string,
    className: PropTypes.string
  };

  Overlay.defaultProps = {
    classTransition: "abg-switch__overlay-transition",
    className: ""
  };

  const { goTo, items, classTransition, className, ...rest } = props;
  const classes = [className, "abg-switch__overlay"].join(" ");
  return (
    <span
      className={classes}
      style={{
        width: `${100 / items}%`,
        transform: `translateX(${100 * goTo}%)`
      }}
      {...rest}
    />
  );
};

export default Overlay;
