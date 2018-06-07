import * as React from 'react';

export interface ReactStateProps {
  /**
   * Should the state be checked by default ?.
   *
   * Defaults to false. Activates the state.
   *
   */
  default?: boolean;

  /**
   * The value/identifier of the State component.
   */
  value: string;

  /**
   * The tab index of the State component.
   *
   * https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex
   *
   * Defaults to 0.
   *
   */
  tabIndex?: number;
}

export interface ReactSwitchProps {
  /**
   * Invoked when the user changes the state of the switch.
   *
   * **value** describes the value of the state that is being activate.
   *
   * **newPosition** the index of the state that is being activate.
   *
   * **child** child instance that is being activate.
   *
   * */
  onValueChange: (
    value: string,
    newPosition: number,
    child: React.Element
  ) => void;

  /**
   * When true, the switch will no longer be interactive * and the colors will
   * be greyed out.
   */
  disable?: boolean;

  /**
   * The tab index of the state component.
   *
   * https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex
   *
   * Defaults to 0.
   */
  tabIndex?: number;
}

declare class ReactSwitchable extends React.Component<ReactSwitchProps> {}

declare class ReactSwitchableState extends React.Component<ReactStateProps> {}

export default ReactSwitchable;
