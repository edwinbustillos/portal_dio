import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  max-width: 80%;
  height: 47px;
  background-color: #151515;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;

  h1 {
    font-size: 24px;
  }
`;

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: #151515;
    height: 47px;
`;

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Wrapper = styled.div`
    background-color: #151515;
    width: 100%;
    height: 47px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const BuscarInputContainer = styled.div`
    width: 175px;
    height: 30px;
    background-color: #2D2D37;
    border-radius: 8px;
    padding: 2px 5px;
    margin: 0 12px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const Menu = styled.a`
    font-weight: normal;
    font-size: 12px;
    line-height: 25px;
    color: #fff;
    margin-right: 12px;
    text-decoration: none;
    background-color: #151515;
`;

export const MenuRight = styled.a`
    font-weight: normal;
    font-size: 12px;
    line-height: 25px;
    color: #fff;
    margin-right: 12px;
    text-decoration: none;
`;

export const UserPicture = styled.img`
    width: 32px;
    height: 32px;
    border-radius: 22px;
    border: 1px solid #fff;
    background-color: #151515;
`;

export const Input = styled.input`
    background-color: transparent;
    flex: 1;
    border: 0;
    color: #fff;
    margin: 0 5px;
    font-size: 14px;
    &:focus {
      outline: none;
  }
`;