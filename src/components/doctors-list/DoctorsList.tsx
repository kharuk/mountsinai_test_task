import React, { useEffect, useState } from 'react';
import withWidth from '@material-ui/core/withWidth';
import { useDocsState, useDocsDispatch } from 'store/context';
import { fetchDoctors } from 'store/actions';
import { getWidgetAmount } from 'helpers';
import { Widget } from 'components/widget/Widget';
import { Loader, ErrorView } from 'shared/ui';
import { IDocFullInfo } from 'types/docs';
import { ChevronLeft as Left } from 'styled-icons/boxicons-regular/ChevronLeft';
import { ChevronRight as Right } from 'styled-icons/boxicons-regular/ChevronRight';
import { Wrapper, DoctorListWrapper, Header, PreviousButton, NextButton } from './styles';

interface Props {
  width: string;
}

const DoctorList: React.FC<Props> = ({ width }) => {
  const [startIndex, setStartIndex] = useState<number>(0);
  const { docs, loading, error } = useDocsState();
  const docsDispatch = useDocsDispatch();

  useEffect(() => {
    fetchDoctors(docsDispatch);
  }, []);

  const handlePreviousClick = () => {
    const widgetAmount = getWidgetAmount(width);
    setStartIndex(Math.max(startIndex - widgetAmount, 0));
  };

  const handleNextClick = () => {
    const widgetAmount = getWidgetAmount(width);
    const newStartIndex = Math.min(startIndex + widgetAmount, docs.length - widgetAmount);
    setStartIndex(newStartIndex);
  };

  const getEndIndex = () => {
    const widgetAmount = getWidgetAmount(width);
    const index = startIndex + widgetAmount;
    return index > docs.length ? docs.length : index;
  };

  const displayedDocs = docs.slice(startIndex, getEndIndex());

  if (loading) return <Loader />;
  if (error) return <ErrorView />;
  return (
    <Wrapper>
      <Header>Doctor schedule</Header>
      <DoctorListWrapper>
        <>
          <PreviousButton disabled={startIndex <= 0} onClick={handlePreviousClick}>
            <Left size="2.5rem" title="Previous" />
          </PreviousButton>
          <NextButton disabled={getEndIndex() >= docs.length} onClick={handleNextClick}>
            <Right size="2.5rem" title="Next" />
          </NextButton>
        </>
        {!!displayedDocs.length && displayedDocs.map((doc: IDocFullInfo) => <Widget key={doc.id} scheduleInfo={doc} />)}
      </DoctorListWrapper>
      {/*  {isOpen && doctorInfo && <Widget scheduleInfo={doctorInfo} />} */}
    </Wrapper>
  );
};

export default withWidth()(DoctorList);
