import * as React from 'react';
export interface Props {
  children?: React.ReactNode;
  onClick?: (e: any) => void;
  styles?: {};
}

export const Button: React.FC<Props> = (props) => (
  <button onClick={props.onClick} style={props.styles} type="button">
    {props.children}
  </button>
);
