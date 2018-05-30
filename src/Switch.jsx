import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Overlay } from "./";
import { proxy } from "./utils";
import "./Switch.scss";

export default class Switch extends Component {
  static propTypes = {
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.element)])
      .isRequired,
    onChange: PropTypes.func,
    tabIndex: PropTypes.number,
    classes: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.string)]),
    disable: PropTypes.bool
  };

  static defaultProps = {
    onChange: () => {},
    tabIndex: 0,
    classes: [],
    disable: false
  };

  state = {
    activeIndex: this.getDefaultActiveIndex()
  };

  onButtonClicked(position) {
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

    if (this.props.onChange) {
      const child = this.props.children[newPosition];
      this.props.onChange(child.props.value, newPosition, child);
    }
  }

  injectChildCapabilities(child, index) {
    return {
      onClick: child.props.onClick
        ? proxy(this.onButtonClicked.bind(this, index))(child.props.onClick)
        : this.onButtonClicked.bind(this, index),
      onKeyDown: e => this.onStateKeyDown(index, e),
      active: index === this.state.activeIndex,
      tabIndex: this.props.disable ? -1 : child.props.tabIndex,
      disable: this.props.disable
    };
  }

  render() {
    const { disable, children, tabIndex, classes } = this.props;
    const classStyle = classNames(
      "switch",
      [classes],
      ("switch--disable": disable)
    );

    return (
      <div className={classStyle}>
        <div
          onKeyDown={e => this.onSwitchKeyDown(e)}
          className="switch__container"
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
