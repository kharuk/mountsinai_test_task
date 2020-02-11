import * as React from 'react';
export interface IButtonProps {
  children?: React.ReactNode;
  onClick?: (e: any) => void;
  styles?: {};
}

const Button: React.SFC<IButtonProps> = (props) => (
  <button onClick={props.onClick} style={props.styles} type="button">
    {props.children}
  </button>
);

export default Button;
