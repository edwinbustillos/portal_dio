import React from 'react';
//import { useNavigate } from 'react-router-dom';
import { MdEmail, MdLock, MdOutlineCatchingPokemon } from 'react-icons/md';
import Button from '../../components/Button';
import Header from '../../components/Header';
import InputForm from '../../components/Input';
import { Column, SignUpContainer, TextLink, Text, Row, SubTitleSignUp, Title, TitleSignUp, Wrapper } from './styles';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { api } from '../../services/api';
import { IFormSignUp, defaultValues } from './types';


const schemaSignUp = yup.object({
    fullname: yup.string().required('Campo obrigatório'),
    email: yup.string().email('E-mail inválido').required('Campo obrigatório'),
    password: yup.string().required('Campo obrigatório'),
}).required();

const SignUp = () => {

    //const navigate = useNavigate();

    const { control, handleSubmit, formState: { errors, isValid } } = useForm<IFormSignUp>({
        resolver: yupResolver(schemaSignUp) as any,
        mode: 'onChange',
        defaultValues,
    });

    const onSubmit = async (formData: any) => {
        try {
            const response = await api.get(`users`);
            const data = response.data;
            console.log(`Retorno api:` + JSON.stringify(data));
        } catch (error) {
            alert('Erro ao fazer login, tente novamente.');
        }
    };
    // const handleClickSignIn = () => {
    //     navigate('/feed');
    // }

    return (<>
        <Header />
        <SignUpContainer>
            <Column>
                <Title>
                    A plataforma de estudos online para você aprender as melhores tecnologias, com os melhores experts.
                </Title>
            </Column>
            <Column>
                <Wrapper>
                    <TitleSignUp> Comece agora grátis </TitleSignUp>
                    <SubTitleSignUp> Crie sua conta e makethe change._ </SubTitleSignUp>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <InputForm name="fullname" placeholder='Nome Completo' errorMessage={errors.fullname?.message?.toString()} control={control} type='text' leftIcon={<MdOutlineCatchingPokemon />} />
                        <InputForm name="email" placeholder='seu@email.com' errorMessage={errors.email?.message?.toString()} control={control} type='text' leftIcon={<MdEmail />} />
                        <InputForm name="password" placeholder='*****' errorMessage={errors.password?.message?.toString()} control={control} type="password" leftIcon={<MdLock />} />
                        <Button title="Entrar" variant='secondary' onClick={() => null} type="submit" disabled={!isValid} />
                    </form>
                    <Row>
                        <Text> Ao clicar em 'Criar minha Conta', declaro que aceito as Politicas de Privacidade e os Termos de Uso da DIO. </Text>
                    </Row>
                    <Row>
                        <Text><b>Já tenho uma conta.</b> <TextLink>Fazer Login</TextLink></Text>
                    </Row>
                </Wrapper>
            </Column>
        </SignUpContainer>
    </>);
}

export default SignUp;