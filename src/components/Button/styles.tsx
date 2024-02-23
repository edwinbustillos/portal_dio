import styled, { css } from "styled-components";

interface ButtonContainerProps {
    variant: string;
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  /* background-color: #565656; */
  background: linear-gradient(to right, #565656, #858383);
  border-radius: 12px;
  position: relative;
  color: #fff;
  padding: 2px 12px;
  min-width: 120px;
  width: 100%;
  border: none;
  height: 30px;
  margin-right: 10px;

  /* box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); */
  /* transition: all 0.3s ease; */
  &:hover {
    /* background-color: #444; */
    color: #fff;
    opacity: 0.8;
  }
  ${({ variant }) => variant !== "primary" && css` 
    min-width: 167px;
    height: 33px;

    /* background-color: #E41050; */
    background: linear-gradient(to right, purple, #E41050);
    &::after {
        content: "";
        position: absolute;
        border: 1px solid #E41050;
        top: -5px;
        left: -6px;
        width: calc(100% + 10px);
        height: calc(100% + 10px);
        border-radius: 12px;
        background: linear-gradient(to right, purple, #E41050);
        z-index: -1;

    }
    `} 
    
`;