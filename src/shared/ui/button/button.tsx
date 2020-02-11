import React from 'react';
import { DefaultButton } from './styles';

interface Props extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  children?: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  ref?: ((instance: HTMLButtonElement | null) => void) | React.RefObject<HTMLButtonElement> | null | undefined;
}

export const Button: React.FC<Props> = ({ children, onClick, disabled, type, ...props }) => (
  <DefaultButton onClick={onClick} disabled={disabled} type={type} {...props}>
    {children}
  </DefaultButton>
);
