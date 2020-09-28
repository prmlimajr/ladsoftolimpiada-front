import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { signInRequest } from '../../store/modules/auth/actions';

import login from '../../../assets/img/login.svg';
import './styles.css';
import { signIn } from '../../store/modules/auth/sagas';

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
  function handleSubmit({ email, password }) {
    dispatch(signInRequest(email, password));
  }

  return (
    <div className='signin'>
      <div className='left'>
        <h1>1ª Olímpiada de Programação</h1>
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

        <Link to='/register'>
          Ainda não criou sua conta? Faça o seu cadastro aqui.
        </Link>

        <p>Desenvolvido por Paulo Lima</p>
      </div>

      <div className='right'>
        <img src={login} alt='Olímpiada de programação' />
      </div>
    </div>
  );
}