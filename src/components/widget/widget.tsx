import React from 'react';
import { Avatar } from 'shared/ui';
import { WidgetWrapper } from './styles';
import { IDocFullInfo } from 'types/docs';

interface Props {
  docsInfo: Array<IDocFullInfo>;
}

export const Widget: React.FC<Props> = ({ docsInfo }) => {
  return (
    <WidgetWrapper>
      <Avatar size={50} url={docsInfo[0].avatar} />
    </WidgetWrapper>
  );
};
