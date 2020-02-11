import React from 'react';
import { Avatar } from 'shared/ui';
import { WidgetWrapper } from './styles';

interface Props {
  size?: number;
  avatar: string;
}

export const Widget: React.FC<Props> = ({ avatar }) => {
  return (
    <WidgetWrapper>
      <Avatar size={50} url={avatar} />
    </WidgetWrapper>
  );
};
