import React from 'react'
import { func, string } from 'prop-types';
import styled from 'styled-components';
import { ReactComponent as MoonIcon } from '../icons/moon.svg';
import { ReactComponent as SunIcon } from '../icons/sun.svg';

import './content/style.scss'

// Toggle.styled.js

const ToggleContainer = styled.button`
  background: ${({ theme }) => theme.gradient};
  border: 2px solid ${({ theme }) => theme.toggleBorder};
  border-radius: 50px;
  cursor: pointer;
  display: flex;
  font-size: 0.8rem;
  justify-content: space-between ;
  // margin: 0 auto;
  overflow: hidden;
  padding: 0.5rem;
  position: relative;
  width: 8rem;
  height: 4rem;

  svg {
    height: auto;
    width: 2.5rem;
    transition: all 0.3s linear;
    
    // sun icon
    &:first-child{
      transform: ${({ lightTheme }) => lightTheme ? 'translateY(0)' : 'translateY(100px)'};
    }
    
    // moon icon
    &:nth-child(2) {
      transform: ${({ lightTheme }) => lightTheme ? 'translateY(-100px)' : 'translateY(0)'};
    }
  }
`;

const Toggle = ({ theme, toggleTheme }) => {
  const isLight = theme === 'light';
  return (
    <div className="nav" >
    <h1>DEV:Abdullh Rtima</h1>
    <ToggleContainer lightTheme={isLight} onClick={toggleTheme} >
            <SunIcon />
            <MoonIcon/>
    </ToggleContainer>
    </div>
  );
};

Toggle.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
}

export default Toggle;