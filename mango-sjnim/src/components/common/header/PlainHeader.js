import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import logo from 'images/logo.png';
import { ImSortNumericAsc } from 'react-icons/im';

const PlainHeader = () => {
  return (
    <Styled.PlainHeader>
      <div className="main__header">
        <NavLink to="/" className="header__list an">
          <img src={logo} alt="logo" />
        </NavLink>
        <NavLink to="/" className="header__list an">
          <ImSortNumericAsc />
          상품순위조회
        </NavLink>
        <NavLink to="/search" className="header__list an">
          search
        </NavLink>
      </div>
    </Styled.PlainHeader>
  );
};

const Styled = {
  PlainHeader: styled.div`
    text-align: center;
    .logo__wrap {
      margin: 10px 0;
    }
    .header__list {
      &.an {
        display: block;
        padding: 5px 0;
        text-decoration: none;
        color: white;
        &:hover {
          color: white;
          text-decoration: underline;
        }
      }
    }
  `,
};

export default PlainHeader;
