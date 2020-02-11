import React from 'react';
import { ErrorContainer } from './styles';

interface Props {
  error?: string;
}

export const ErrorView: React.FC<Props> = ({ error = 'Something went wrong, try later...' }) => {
  return (
    <ErrorContainer>
      <p>{error}</p>
    </ErrorContainer>
  );
};
