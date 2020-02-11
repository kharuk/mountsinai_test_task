import React from 'react';
import { IDoc } from 'types/docs';
import { InfoWrapper, UserName } from './styles';
import { Avatar } from '..';

interface Props {
  docInfo: IDoc;
}

export const DoctorInfo: React.FC<Props> = ({ docInfo: { id, firstName, lastName, avatar } }) => {
  return (
    <InfoWrapper onClick={() => console.log(id)}>
      <Avatar url={avatar} size={100} />
      <UserName>
        {firstName} {lastName}
      </UserName>
    </InfoWrapper>
  );
};
