import React from 'react';
import { IDoc } from 'types/docs';
import { InfoWrapper, UserName } from './styles';
import { Avatar } from '..';

interface Props {
  docInfo: IDoc;
}

export const DoctorInfo: React.FC<Props> = ({ docInfo: { firstName, lastName, avatar } }) => {
  return (
    <InfoWrapper>
      <Avatar url={avatar} size={70} />
      <UserName>
        {firstName} {lastName}
      </UserName>
    </InfoWrapper>
  );
};
