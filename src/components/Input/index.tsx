import { IconContainer, InputContainer, InputText, ErrorText } from './styles';
import { Controller } from 'react-hook-form';
import { IInputProps } from './types';

const InputForm = ({ leftIcon, name, control, errorMessage, ...rest }: IInputProps) => {
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
            </InputContainer>
            {errorMessage ? <ErrorText>{errorMessage}</ErrorText> : null}
        </>
    )
};

export default InputForm;