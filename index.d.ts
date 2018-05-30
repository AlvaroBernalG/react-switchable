import * as React from 'react';

export interface ReactStateProps {
  /**
   * Should the state be checked by default ?.
   *
   * defaults to false. If none of the State component inside a Switch has this attributes
   * it defaults to the first State.
   *
   */
  default?: boolean;

  /**
   * The value/identifier of the State component.
   */
  value: string;

  /**
   * Custom classNames.
   *
   * Defaults to undefined.
   */
  classes?: string;
}
export interface ReactSwitchProps {
  /**
   * Invoked when the user changes the state of the switch.
   *
   * **value** describes the value of the state that is being activate.
   *
   * **newPosition** the index of the item.
   *
   *  **id** is the ID prop of the switch.
   *
   */
  onChange: (value: string, newPosition: number, child: React.CElement) => void;

  /**
   * When true, the switch will no longer be interactive and its colors will be greyed out.
   */
  disabled?: boolean;

  /**
   * The classNames of the outer shell of the switch.
   *
   * Defaults to undefined.
   */
  classes?: string;

  /**
   * The id of the embedded checkbox.
   *
   * Defaults to undefined.
   */
  id?: string;

  /**
   * The tabIndex that the outer switch shell should obtain.
   *
   * Defaults to 0.
   */
  tabIndex?: number;
}

declare class ReactSwitchable extends React.Component<ReactSwitchProps> {}

declare class ReactSwitchableState extends React.Component<ReactStateProps> {}

export default ReactSwitchable;
