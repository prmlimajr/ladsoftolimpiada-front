import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { signInRequest } from '../../store/modules/auth/actions';

import login from '../../../assets/img/login.svg';
import uninassau from '../../../assets/img/uninassau.png';
import ladsoft from '../../../assets/img/ladsoft.png';
import semana from '../../../assets/img/semana.png';
import laftec from '../../../assets/img/laftec.png';
import './styles.css';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um email válido')
    .required('O email é obrigatório'),
  password: Yup.string()
    .min(6, 'A senha tem de ter ao menos 6 caracteres')
    .required('A senha é obrigatória'),
});

export default function SignIn() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.auth.loading);
  const isSigned = useSelector((state) => state.auth.isSigned);

  function handleSubmit({ email, password }) {
    dispatch(signInRequest(email, password));
  }

  function renderForm() {
    return (
      <>
        <h2>Faça o seu login</h2>

        <Form schema={schema} onSubmit={handleSubmit}>
          <Input name='email' type='email' placeholder='Insira o seu email' />
          <Input
            name='password'
            type='password'
            placeholder='Insira a sua senha'
          />
          <button type='submit'>{loading ? 'Carregando...' : 'ENTRAR'}</button>
        </Form>

        <Link to='/register' className='register'>
          Ainda não criou sua conta? Faça o seu cadastro aqui.
        </Link>
      </>
    );
  }

  function renderLoggedIn() {
    return (
      <>
        <p>Bem vindo, você está logado!</p>

        <p>Acesse a olímpiada agora mesmo!</p>

        <Link to='/dashboard' className='login-access-btn'>
          ACESSAR
        </Link>
      </>
    );
  }

  return (
    <div className='signin'>
      <div className='left'>
        <img src={semana} alt='semana' className='logo-semana' />
        <h1 className='signin-title'>1ª Olímpiada de Programação</h1>

        {isSigned ? renderLoggedIn() : renderForm()}

        <p>
          Desenvolvido por <a href='https://github.com/prmlimajr'>Paulo Lima</a>{' '}
          e <a href='https://github.com/ThalysRossi'>Thalys Rossi</a>
        </p>

        <div className='logos'>
          <img src={uninassau} alt='uninassau' className='logo-uninassau' />
          <img src={ladsoft} alt='ladsoft' className='logo-ladsoft' />
          <img src={laftec} alt='laftec' className='logo-laftec' />
        </div>
      </div>

      <div className='right'>
        <img src={login} alt='Olímpiada de programação' />
      </div>
    </div>
  );
}
