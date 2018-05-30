import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import "./Overlay.scss";


const Overlay = props => {
  const { goTo, items, classTransition, className, ...rest } = props;
  return (
    <span
      {...rest}
      className={classNames("abg-switch__overlay", [className])}
      style={{
        width: `${100 / items}%`,
        transform: `translateX(${100 * goTo}%)`
      }}
    />
  );
};

Overlay.propTypes = {
  goTo: PropTypes.number.isRequired,
  items: PropTypes.number.isRequired
};

Overlay.defaultProps = {
  classTransition: "abg-switch__overlay-transition"
};

export default Overlay;
