import styled from 'styled-components';

export const Container = styled.button`
  width: 130px;
  height: 42px;
  border: 1px solid #17a4d0;
  color: #17a4d0;
  font-family: 14px;
  margin-left: 25px;
  border-radius: 10px;
  transition: all 0.25s ease-out;
  


  &:hover{
    color: #fff;
    background-color: #17a4d0;
    box-shadow: 0 3px 6px rgba(0,0,0,0.3);
  }
`