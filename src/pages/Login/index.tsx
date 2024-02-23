import React from 'react';
//import { useNavigate } from 'react-router-dom';
import { MdEmail, MdLock } from 'react-icons/md';
import Button from '../../components/Button';
import Header from '../../components/Header';
import InputForm  from '../../components/Input';
import { Column, LoginContainer, CriarText, EsqueciText, Row, SubTitleLogin, Title, TitleLogin, Wrapper } from './styles';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { api } from '../../services/api';


const schema = yup.object({
    email: yup.string().email('E-mail inválido').required('Campo obrigatório'),
    password: yup.string().required('Campo obrigatório')
}).required();

const Login = () => {

    //const navigate = useNavigate();

    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
        mode: 'onChange',
        defaultValues: {
            email: '',
            password: ''
        }
    });

    const onSubmit = async (formData: any) => {
        try {
            const response = await api.get(`users?email=${formData.email}&senha=${formData.password}`);
            const data = response.data;
            console.log(`Retorno api:`+ JSON.stringify(data));
        } catch (error) {
            alert('Erro ao fazer login, tente novamente.');
        }
    };
    // const handleClickSignIn = () => {
    //     navigate('/feed');
    // }
    
    return (<>
        <Header />
        <LoginContainer>
            <Column>
                <Title>
                    A plataforma de estudos online para você aprender as melhores tecnologias, com melhores experts.
                </Title>
            </Column>
            <Column>
                <Wrapper>
                    <TitleLogin> Faça seu cadastro </TitleLogin>
                    <SubTitleLogin> Faça seu login e makethe change._ </SubTitleLogin>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <InputForm name="email" placeholder='seu@email.com' errorMessage={errors.email?.message} control={control} type='text' leftIcon={<MdEmail/>} />
                        <InputForm name="password" placeholder='*******' errorMessage={errors.password?.message} control={control} type="password" leftIcon={<MdLock/>} />
                        <Button title="Entrar" variant='secondary' onClick={()=>null} type="submit" />
                    </form>
                    <Row>
                        <EsqueciText> Esqueci minha senha </EsqueciText>
                        <CriarText href='/signup'> Criar uma conta </CriarText>
                    </Row>
                </Wrapper>
            </Column>
        </LoginContainer>
    </>);
}

export default Login;