import React from 'react';
import { Avatar, DoctorInfo } from 'shared/ui';
import { WidgetWrapper } from './styles';
import { IDocFullInfo } from 'types/docs';
import { XSquare as Close } from 'styled-icons/boxicons-solid/XSquare';
import { Dispatch } from 'store/types';
import { useDocsDispatch } from 'store/context';

interface Props {
  scheduleInfo: IDocFullInfo;
  handleClose: (dispatch: Dispatch) => void;
}

export const Widget: React.FC<Props> = ({ scheduleInfo, handleClose }) => {
  const docsDispatch = useDocsDispatch();
  return (
    <WidgetWrapper>
      <Close size="1.8rem" title="Remove" onClick={(e) => handleClose(docsDispatch)} />
      <DoctorInfo
        docInfo={{
          id: scheduleInfo.id,
          firstName: scheduleInfo.firstName,
          lastName: scheduleInfo.lastName,
          avatar: scheduleInfo.avatar,
        }}
      />
    </WidgetWrapper>
  );
};
