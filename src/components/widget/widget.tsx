import React from 'react';
import { Avatar } from 'shared/ui';
import { WidgetWrapper } from './styles';
import { IDoc } from 'types/docs';

interface Props {
  docsInfo: Array<IDoc>;
}

export const Widget: React.FC<Props> = ({ docsInfo }) => {
  return (
    <WidgetWrapper>
      <Avatar size={50} url={docsInfo[0].avatar} />
    </WidgetWrapper>
  );
};
