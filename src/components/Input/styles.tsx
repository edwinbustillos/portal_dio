import styled from "styled-components";

export const InputContainer = styled.div`
  background: transparent;
  width: 100%;
  max-width: 275px;
  height: 40px;
  border-bottom: 1px solid #999;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  color: #878787;
  input {
    background-color: transparent;
    width: 100%;
    padding: 10px;
    font-size: 16px;
    flex: 1;
    border: 0;
    color: #FFF;
    &:focus {
      outline: none;
    }
  }

`;

export const IconContainer = styled.div`
  margin-right: 10px;
  color: #E23DD7;
`;

export const InputText = styled.input`
  background-color: #151515;
  flex: 1;
  border: 0;
  &:focus {
    outline: none;
  }
  /* width: 100%;
  min-width: 250px;
  color: #FFF;
  border: 0;
  height: 30px;
  padding: 8px;
  font-size:16px; */
`;

export const ErrorText = styled.p`
    font-style: normal;  
    font-weight: 400;
    font-size: 14px;
    line-height: 19px;
    color: #ff4400;
    margin: 5px 0 10px 5px;
`;
