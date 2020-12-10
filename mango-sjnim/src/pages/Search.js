import React from 'react';
import { PlainHeader } from 'components/common/header';
import { PlainTemplate } from 'components/base/template';
import SearchContainer from 'containers/search/SearchContainer';

const Main = () => {
  return (
    <PlainTemplate header={<PlainHeader />}>
      <SearchContainer />
    </PlainTemplate>
  );
};

export default Main;
