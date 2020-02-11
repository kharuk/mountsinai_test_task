import React, { useContext } from 'react';
import { DocsProvider, useCountState, useCountDispatch } from 'store/context';
import { Widget } from 'components/widget/widget';

const App = () => {
  //const docsInfo = useContext(DataContext);
  return (
    <DocsProvider>
      <Widget docsInfo={[]} />
    </DocsProvider>
  );
};

export default App;

/*      <DataContext.Provider value={null}>
      <div> Hello</div>
    </DataContext.Provider>  */
