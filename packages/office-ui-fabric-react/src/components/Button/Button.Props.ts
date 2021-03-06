import * as React from 'react';
import { BaseButton } from './BaseButton';
import { Button } from './Button';

export interface IButton {
  /**
   * Focuses the button.
   */
  focus();
}

export interface IButtonProps extends React.HTMLProps<HTMLButtonElement | HTMLAnchorElement | BaseButton | Button> {
  /**
   * If provided, this component will be rendered as an anchor.
   * @default ElementType.anchor
   */
  href?: string;

  /**
   * Whether the button is disabled
   */
  disabled?: boolean;

  /**
   * If provided, additional class name to provide on the root element.
   */
  className?: string;

  /**
   * The aria label of the button for the benefit of screen readers.
   */
  ariaLabel?: string;

  /**
   * Detailed description of the button for the benefit of screen readers.
   *
   * Besides the compound button, other button types will need more information provided to screen reader.
   */
  ariaDescription?: string;

  /**
   * The button icon shown in command or hero type.
   * Deprecated at v1.2.3, to be removed at >= v2.0.0. Use IconButton instead.
   */
  icon?: string;

  /**
   * Description of the action this button takes.
   * Only used for compound buttons
   * Deprecated at v1.2.3, to be removed at >= v2.0.0. Use CompoundButton instead
   */
  description?: string;

  /**
   * The type of button to render.
   * @defaultvalue ButtonType.default
   * @deprecated
   * Deprecated at v1.2.3, to be removed at >= v2.0.0. Use specific button component instead
   */

  buttonType?: ButtonType;

  /**
   * @deprecated
   * Deprecated at v0.56.2, to be removed at >= v1.0.0. Just pass in button props instead;
   * they will be mixed into the button/anchor element rendered by the component.
   */
  rootProps?: React.HTMLProps<HTMLButtonElement> | React.HTMLProps<HTMLAnchorElement>;
}

export enum ElementType {
  /** <button> element. */
  button,
  /** <a> element. */
  anchor
}

export enum ButtonType {
  default,
  normal,
  primary,
  hero,
  compound,
  command,
  icon,
  clean
}