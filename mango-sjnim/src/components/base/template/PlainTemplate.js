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
    width: 200px;
    height: 100vh;
    left: 0;
    top: 0;
    background-color: #262626;
  `,
  Main: styled.div`
    padding-left: 200px;
  `,
};

export default PlainTemplate;
