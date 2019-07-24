/* eslint no-unneeded-ternary: 0 */
import React, { Component } from "react";
import PropTypes from "prop-types";
import Overlay from "./Overlay";
import Item from "./Item";
import "./Switch.scss";

const everyChildren = (children, fn) => {
  let res = true;
  React.Children.forEach(children, (...args) => {
    if (fn(...args) === false) {
      res = false;
    }
  });
  return res;
};

const ofType = (reactChildren, type) => reactChildren.type === type;

export const proxy = fn => fnTarget => (...args) => {
  fn(...args);
  if (!fnTarget) return;
  fnTarget.apply(fnTarget, args);
};

export default class Switch extends Component {
  static propTypes = {
    children: props => {
      const { children } = props;
      if (Array.isArray(children) === false)
        return new Error("Children must be an array of <Item />.");
      if (everyChildren(children, child => ofType(child, Item)) === false)
        return new Error("All Children of <Switch /> must be of type <Item />");
      const hasDefaultProp = children.some(child => child.props.default);
      const hasActiveProp = children.some(child => child.props.active);
      if (hasDefaultProp && hasActiveProp) {
        return new Error(
          "Switch component can't have State with default and active property at the same time."
        );
      }
      if (
        (hasActiveProp && props.onValueChange) ||
        (hasActiveProp && props.onItemChanged)
      ) {
        return new Error(
          "onValueChange() | onItemChanged() is only available to switch components whose children don't use the 'active' attribute."
        );
      }
      return "";
    },
    onValueChange: PropTypes.func, // deprecated
    onSelection: PropTypes.func, // deprecated
    onItemChanged: PropTypes.func,
    onItemSelected: PropTypes.func,
    tabIndex: PropTypes.number,
    disable: PropTypes.bool,
    arrowSelection: PropTypes.bool,
    className: PropTypes.string,
    name: PropTypes.string.isRequired,
    customOverlay: PropTypes.func,
    onKeyDown: PropTypes.func
  };

  static defaultProps = {
    onValueChange: undefined, // deprecated
    onSelection: undefined, // deprecated
    onItemChanged: undefined,
    onItemSelected: undefined,
    onKeyDown: undefined,
    customOverlay: undefined,
    tabIndex: 0,
    disable: false,
    arrowSelection: true,
    className: "",
    children: []
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
    if (this.props.onSelection) this.props.onSelection(position); // deprecated
    // execute callback if it was defined;
    if (this.props.onItemSelected) this.props.onItemSelected(position);
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
    const { onValueChange, onItemChanged } = this.props;
    const fn = onValueChange !== undefined ? onValueChange : onItemChanged;
    if (fn !== undefined) {
      const child = this.props.children[newPosition];
      const oldPosition = this.state.activeIndex;
      fn(child.props.value, newPosition, oldPosition, child);
    }
  }

  getItemProps(child, index) {
    return {
      onClick: proxy(this.onStateClicked.bind(this, index))(
        child.props.onClick
      ),
      onKeyDown: proxy(this.onStateKeyDown.bind(this, index))(
        child.props.onKeyDown
      ),
      tabIndex: this.props.disable ? -1 : child.props.tabIndex,
      active: this.state.activeIndex === index,
      name: this.props.name
    };
  }

  render() {
    const {
      disable,
      children,
      tabIndex,
      className,
      name,
      onValueChange,
      onSelection,
      onItemSelected,
      onItemChanged,
      arrowSelection,
      customOverlay: CustomOverlay,
      onKeyDown,
      ...rest
    } = this.props;

    const classes = [
      "abg-switch abg-switch__container",
      className,
      disable ? "abg-switch--disable" : ""
    ].join(" ");

    const FinalOverlay = CustomOverlay ? CustomOverlay : Overlay;

    return (
      <div
        role="radiogroup"
        aria-disabled={disable}
        tabIndex={disable ? -1 : tabIndex}
        {...rest}
        className={classes}
        onKeyDown={
          arrowSelection
            ? proxy((...args) => this.onSwitchKeyDown(...args))(onKeyDown)
            : this.props.onKeyDown
        }
      >
        {React.Children.map(children, (child, index) =>
          React.cloneElement(child, this.getItemProps(child, index))
        )}
        <FinalOverlay
          selectedIndex={this.state.activeIndex}
          totalItems={children.length}
        />
      </div>
    );
  }
}
