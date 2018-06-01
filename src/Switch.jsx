import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Overlay } from "./";
import "./Switch.scss";

export const proxy = fn => fnTarget => (...args) => {
  fn(...args);
  if (!fnTarget) return;
  fnTarget.apply(fnTarget, args);
};

export default class Switch extends Component {
  static propTypes = {
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.element)])
      .isRequired,
    onValueChange: PropTypes.func,
    tabIndex: PropTypes.number,
    disable: PropTypes.bool,
    className: PropTypes.string
  };

  static defaultProps = {
    onValueChange: undefined,
    tabIndex: 0,
    disable: false,
    className: ""
  };

  state = {
    activeIndex: this.getDefaultActiveIndex()
  };

  onStateClicked(position) {
    if (this.props.disable) return;

    this.setChecked(position);
  }

  onSwitchKeyDown({ key }) {
    if (key === "ArrowLeft" && this.state.activeIndex > 0) {
      this.setChecked(this.state.activeIndex - 1);
    } else if (
      key === "ArrowRight" &&
      this.state.activeIndex < this.props.children.length - 1
    ) {
      this.setChecked(this.state.activeIndex + 1);
    }
  }

  onStateKeyDown(position, { key }) {
    if (key === "Enter" || key === " ") this.setChecked(position);
  }

  getDefaultActiveIndex() {
    const pos = this.props.children
      .map(({ props }) => props.default)
      .indexOf(true);
    return pos > -1 ? pos : 0;
  }

  setChecked(newPosition) {
    this.setState({
      activeIndex: newPosition
    });

    if (this.props.onValueChange) {
      const child = this.props.children[newPosition];
      this.props.onValueChange(child.props.value, newPosition, child);
    }
  }

  injectChildCapabilities(child, index) {
    return {
      onClick: proxy(this.onStateClicked.bind(this, index))(
        child.props.onClick
      ),
      onKeyDown: proxy(this.onStateKeyDown.bind(this, index))(
        child.props.onKeyDown
      ),
      active: index === this.state.activeIndex,
      tabIndex: this.props.disable ? -1 : child.props.tabIndex,
      disable: this.props.disable
    };
  }

  render() {
    const {
      disable,
      children,
      tabIndex,
      className,
      onValueChange,
      ...rest
    } = this.props;

    const classStyle = classNames(
      "abg-switch",
      [className],
      ("abg-switch--disable": disable)
    );

    return (
      <div {...rest} className={classStyle}>
        <div
          onKeyDown={e => this.onSwitchKeyDown(e)}
          className="abg-switch__container"
          role="radiogroup"
          tabIndex={disable ? -1 : tabIndex}
        >
          {React.Children.map(children, (child, index) =>
            React.cloneElement(
              child,
              this.injectChildCapabilities(child, index)
            )
          )}
          <Overlay goTo={this.state.activeIndex} items={children.length} />
        </div>
      </div>
    );
  }
}
