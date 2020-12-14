import React from 'react';
import styled from 'styled-components';

const PlainTemplate = (props) => {
  const { header, main, children } = props;
  return (
    <>
      <Styled.Header>{header}</Styled.Header>
      <Styled.Main>{main || children}</Styled.Main>
    </>
  );
};

const Styled = {
  Header: styled.div`
    position: fixed;
    width: 260px;
    height: 100vh;
    left: 0;
    top: 0;
    background-color: #34495e;
  `,
  Main: styled.div`
    padding-left: 260px;
  `,
};

export default PlainTemplate;
