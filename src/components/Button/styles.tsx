import styled, { css } from "styled-components";

interface ButtonContainerProps {
  variant: string;
  disabled?: boolean;
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
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
  transition: all 0.3s ease;
  &:hover {
    color: #fff;
    opacity: 0.8;
  }
  ${({ variant, disabled }) => variant !== "primary" && css` 
    min-width: 167px;
    height: 33px;
    background: ${disabled ? 'linear-gradient(to right, #565656, purple)' : 'linear-gradient(to right, purple, #E41050)'};

    &::after {
        content: "";
        position: absolute;
        border: ${disabled ? '1px solid #858383' : '1px solid #E41050'};
        top: -5px;
        left: -6px;
        width: calc(100% + 10px);
        height: calc(100% + 10px);
        border-radius: 12px;
        z-index: -1;
    }
    `} 
`;