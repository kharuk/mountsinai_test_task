import React, { useEffect } from 'react';
import { useDocsState, useDocsDispatch } from 'store/context';
import { fetchDoctors, fetchDoctorFullInfo, closeWidget } from 'store/actions';
import { Loader, ErrorView, DoctorInfo } from 'shared/ui';
import { IDoc } from 'types/docs';
import { DoctorItem, Wrapper, DoctorListWrapper, Header } from './styles';
import { Widget } from 'components/widget/Widget';

export const DoctorList: React.FC = () => {
  const { docs, doctorInfo, isOpen, loading, error } = useDocsState();
  const docsDispatch = useDocsDispatch();

  useEffect(() => {
    fetchDoctors(docsDispatch);
  }, []);

  const handleClick = (id: string) => {
    fetchDoctorFullInfo(docsDispatch, id);
  };

  if (loading) return <Loader />;
  if (error) return <ErrorView />;
  return (
    <Wrapper>
      <Header>Click to choose a doctor</Header>
      <DoctorListWrapper>
        {!!docs.length &&
          docs.map((doc: IDoc) => (
            <DoctorItem key={doc.id} onClick={() => handleClick(doc.id)}>
              <DoctorInfo docInfo={doc} />
            </DoctorItem>
          ))}
      </DoctorListWrapper>
      {isOpen && doctorInfo && <Widget scheduleInfo={doctorInfo} handleClose={closeWidget} />}
    </Wrapper>
  );
};
