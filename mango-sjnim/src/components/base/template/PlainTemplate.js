import React from 'react';

const PlainTemplate = (props) => {
  const { header, main, children } = props;
  return (
    <>
      <header>{header}</header>
      <main>{main || children}</main>
    </>
  );
};

export default PlainTemplate;
