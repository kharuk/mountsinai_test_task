import React, { useEffect } from 'react';
import { useDocsState, useDocsDispatch } from 'store/context';
import { fetchDoctors } from 'store/actions';
import { Loader, ErrorView, DoctorInfo } from 'shared/ui';
import { IDoc } from 'types/docs';
import { DoctorItem, Wrapper, DoctorListWrapper, Header } from './styles';

export const DoctorList: React.FC = () => {
  const { docs, loading, error } = useDocsState();
  const docsDispatch = useDocsDispatch();

  useEffect(() => {
    fetchDoctors(docsDispatch);
  }, []);

  if (loading) return <Loader />;
  if (error) return <ErrorView />;
  return (
    <Wrapper>
      <Header>Click to choose a doctor</Header>
      <DoctorListWrapper>
        {!!docs.length &&
          docs.map((doc: IDoc) => (
            <DoctorItem key={doc.id}>
              <DoctorInfo docInfo={doc} />
            </DoctorItem>
          ))}
      </DoctorListWrapper>
    </Wrapper>
  );
};
