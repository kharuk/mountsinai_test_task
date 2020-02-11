import React, { useEffect } from 'react';
import { useDocsState, useDocsDispatch } from 'store/context';
import { fetchDoctors } from 'store/actions';
import { Loader, ErrorView } from 'shared/ui';
import { IDoc } from 'types/docs';

export const DoctorList: React.FC = () => {
  const { docs, loading, error } = useDocsState();
  const docsDispatch = useDocsDispatch();

  useEffect(() => {
    fetchDoctors(docsDispatch);
  }, []);

  if (loading) return <Loader />;
  if (error) return <ErrorView />;
  return (
    <div>
      {!!docs.length &&
        docs.map((doc: IDoc) => {
          <div>{doc.firstName}</div>;
        })}
    </div>
  );
};
