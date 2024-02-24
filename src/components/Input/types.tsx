import { Control } from "react-hook-form";
import { IFormLogin } from "../../pages/Login/types";
import { IFormSignUp } from "../../pages/SignUp/types";

export interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    name: any;
    errorMessage?: string;
    control: Control<IFormLogin, IFormSignUp, any>;
    leftIcon?: React.ReactNode;
}