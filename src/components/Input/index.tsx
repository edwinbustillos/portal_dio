import { IconContainer, InputContainer, InputText, ErrorText } from './styles';
import { ReactNode } from 'react'; // Import ReactNode
import { Controller } from 'react-hook-form';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    leftIcon?: ReactNode; // Change IconType to ReactNode
    control: any;
    name: string;
    errorMessage?: string;
}

const InputForm = ({ leftIcon, name, control, errorMessage, ...rest }: InputProps) => {
    return (
        <>
            <InputContainer>
                {leftIcon ? (<IconContainer>{leftIcon}</IconContainer>) : null}
                <Controller
                    name={name}
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) => <InputText {...field} {...rest} />}
                />
                {/* <input {...rest} /> */}
            </InputContainer>
            {errorMessage ? <ErrorText>{errorMessage}</ErrorText> : null}
        </>
    )
};

export default InputForm;