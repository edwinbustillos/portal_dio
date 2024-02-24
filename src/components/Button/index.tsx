import React from "react";
import { ButtonContainer } from "./styles";

interface ButtonProps {
    title: string;
    variant?: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    type?: "submit" | "button" | "reset";
    disabled?: boolean;
}

const Button = ({ title, variant = "primary", onClick , type, disabled, ...rest} : ButtonProps ) => {
    return <ButtonContainer variant={variant} onClick={onClick} type={type} disabled={disabled} {...rest}>{title}</ButtonContainer>;
};

export default Button;