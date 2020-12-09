import React from 'react';
import { PlainHeader } from 'components/common/header';
import { PlainTemplate } from 'components/base/template';
import MainContainer from 'containers/main/MainContainer';

const Main = () => {
  return (
    <PlainTemplate header={<PlainHeader />}>
      <MainContainer />
    </PlainTemplate>
  );
};

export default Main;
