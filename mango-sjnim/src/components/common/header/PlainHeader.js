import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import logo from 'images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortNumericDown } from '@fortawesome/free-solid-svg-icons';

const PlainHeader = () => {
  return (
    <Styled.PlainHeader>
      <div className="main__logo">
        <NavLink to="/">
          <img src={logo} alt="logo" />
        </NavLink>
      </div>
      <div className="main__header">
        <NavLink to="/" className="header__list an">
          <FontAwesomeIcon icon={faSortNumericDown} />
          <span>상품순위조회</span>
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
    .main__logo {
      margin: 10px 0;
    }
    .header__list {
      &.an {
        display: block;
        padding: 5px;
        text-decoration: none;
        color: white;
        transition: all 0.2s;

        &:hover {
          padding-left: 15px;
        }
      }
    }
  `,
};

export default PlainHeader;
