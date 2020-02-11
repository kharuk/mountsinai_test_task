import React from 'react';
import { DoctorInfo, Schedule } from 'shared/ui';
import { WidgetWrapper, DoctorSchedule } from './styles';
import { IDocFullInfo } from 'types/docs';

interface Props {
  scheduleInfo: IDocFullInfo;
}

export const Widget: React.FC<Props> = ({ scheduleInfo }) => {
  return (
    <WidgetWrapper>
      <DoctorInfo
        docInfo={{
          id: scheduleInfo.id,
          firstName: scheduleInfo.firstName,
          lastName: scheduleInfo.lastName,
          avatar: scheduleInfo.avatar,
        }}
      />
      <DoctorSchedule>
        <Schedule
          schedule={scheduleInfo.schedule}
          docInfo={{
            id: scheduleInfo.id,
            firstName: scheduleInfo.firstName,
            lastName: scheduleInfo.lastName,
            avatar: scheduleInfo.avatar,
          }}
        />
      </DoctorSchedule>
    </WidgetWrapper>
  );
};
