import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #000;
  font-weight: 500;
  margin-top: 0;
  border-top: 3px solid #e9e9e9;
  border-bottom: 10px solid #e9e9e9;

  div > div {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const Footer: React.FC = () => {
  return (
    <StyledDiv>
      <div>
        <div>Copyright @2020 Devnology (v.1.0.0)</div>
        <div>mansoo.app@gmail.com</div>
      </div>
    </StyledDiv>
  );
};

export default Footer;
