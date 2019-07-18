import React, { Component } from "react";
import PropTypes from "prop-types";
import { Overlay, Item } from "./";
import "./Switch.scss";

export const proxy = fn => fnTarget => (...args) => {
  fn(...args);
  if (!fnTarget) return;
  fnTarget.apply(fnTarget, args);
};

export default class Switch extends Component {
  static propTypes = {
    children: PropTypes.arrayOf(PropTypes.instanceOf(Item)).isRequired,
    onValueChange: PropTypes.func,
    onSelection: PropTypes.func,
    tabIndex: PropTypes.number,
    disable: PropTypes.bool,
    arrowNavigation: PropTypes.bool,
    className: PropTypes.string
  };

  static defaultProps = {
    onValueChange: undefined,
    onSelection: undefined,
    tabIndex: 0,
    disable: false,
    arrowNavigation: true,
    className: ""
  };

  static getDerivedStateFromProps(nextProps, state) {
    const childIndexActive = nextProps.children.findIndex(e => e.props.active);
    if (childIndexActive < 0) {
      return {
        ...state,
        autoControlled: true
      };
    } else if (childIndexActive !== state.activeIndex) {
      return {
        ...state,
        activeIndex: childIndexActive,
        autoControlled: false
      };
    }
    return null;
  }

  constructor(properties) {
    super(properties);
    const hasDefaultProp = properties.children.some(
      child => child.props.default
    );
    const hasActiveProp = properties.children.some(child => child.props.active);
    if (hasDefaultProp && hasActiveProp) {
      throw new Error(
        "Switch component can't have State with default and active property at the same time."
      );
    }
    if (hasActiveProp && this.props.onValueChange) {
      throw new Error(
        "onValueChange() is only available to switch components whose children don't use the 'active' attribute."
      );
    }
  }

  state = {
    activeIndex: this.getDefaultActiveIndex()
  };

  onStateClicked(position) {
    this.onSelection(position);
  }

  onSwitchKeyDown({ key }) {
    if (key === "ArrowLeft" && this.state.activeIndex > 0) {
      this.onSelection(this.state.activeIndex - 1);
    } else if (
      key === "ArrowRight" &&
      this.state.activeIndex < this.props.children.length - 1
    ) {
      this.onSelection(this.state.activeIndex + 1);
    }
  }

  onStateKeyDown(position, { key }) {
    if (key === "Enter" || key === " ") this.onSelection(position);
  }

  onSelection(position) {
    // if <Switch /> has disable props then don't do anything.;
    if (this.props.disable) return;
    // if <Item /> has disable props don't allow to be active;
    if (this.props.children[position].props.disable) return;
    // execute callback if it was defined;
    if (this.props.onSelection) this.props.onSelection(position);
    // if the active state is not managed by switch then return
    if (this.state.autoControlled === false) return;
    // update inner state with the new selected position.
    this.setChecked(position);
  }

  getDefaultActiveIndex() {
    const pos = this.props.children.findIndex(({ props }) => props.default);
    return pos > -1 ? pos : 0;
  }

  setChecked(newPosition) {
    this.setState({
      activeIndex: newPosition
    });
    if (this.props.onValueChange) {
      const child = this.props.children[newPosition];
      const oldPosition = this.state.activeIndex;
      this.props.onValueChange(
        child.props.value,
        newPosition,
        oldPosition,
        child
      );
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
      tabIndex: this.props.disable ? -1 : child.props.tabIndex,
      active: this.state.activeIndex === index
    };
  }

  render() {
    const {
      disable,
      children,
      tabIndex,
      className,
      onValueChange,
      onSelection,
      ...rest
    } = this.props;

    const classes = [
      "abg-switch",
      className,
      disable ? "abg-switch--disable" : ""
    ].join(" ");

    return (
      <div {...rest} className={classes}>
        <div
          onKeyDown={
            this.props.arrowNavigation
              ? e => this.onSwitchKeyDown(e)
              : undefined
          }
          className="abg-switch__container"
          role="radiogroup"
          aria-disabled={disable}
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
