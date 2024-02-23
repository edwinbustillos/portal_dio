import React from "react";
import { ButtonContainer } from "./styles";

interface ButtonProps {
    title: string;
    variant?: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    type?: "submit" | "button" | "reset";
}

const Button = ({ title, variant = "primary", onClick , type, ...rest} : ButtonProps ) => {
    return <ButtonContainer variant={variant} onClick={onClick} type={type} {...rest}>{title}</ButtonContainer>;
};

export default Button;