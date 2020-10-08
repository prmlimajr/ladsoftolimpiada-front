import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import login from '../../../assets/img/login.svg';
import { signUpRequest } from '../../store/modules/auth/actions';

import './styles.css';

const schema = Yup.object().shape({
  name: Yup.string().required(),
  email: Yup.string().email().required(),
  password: Yup.string()
    .min(6, 'A senha deve ter no mínimo 6 caracteres')
    .required('A senha deve ter no mínimo 6 caracteres'),
  course: Yup.string().required(),
  semester: Yup.number().positive().required(),
  studentId: Yup.string().required(),
});

export default function SignUp() {
  const dispatch = useDispatch();
  function handleSubmit({
    name,
    email,
    password,
    course,
    semester,
    studentId,
  }) {
    dispatch(signUpRequest(name, email, password, course, semester, studentId));
  }

  return (
    <div className='signup'>
      <div className='sup-left'>
        <img src={login} alt='Olímpiada de programação' />
      </div>

      <div className='sup-right'>
        <h1>1ª Olímpiada de Programação</h1>
        <h2>Faça o seu cadastro</h2>

        <Form schema={schema} onSubmit={handleSubmit}>
          <Input
            name='name'
            id='name'
            type='text'
            placeholder='Insira o seu nome'
            required
          />
          <Input
            name='email'
            id='email'
            type='email'
            placeholder='Insira o seu email'
            required
          />
          <Input
            name='password'
            id='password'
            type='password'
            placeholder='Insira a sua senha'
            required
          />
          <Input
            name='course'
            id='course'
            placeholder='Insira o seu curso'
            required
          />

          <div className='semester-stdid'>
            <Input
              name='semester'
              id='semester'
              type='number'
              placeholder='Insira o seu período'
              min={1}
              max={10}
              required
            />

            <Input
              name='studentId'
              type='text'
              placeholder='Número de matrícula'
              required
            />
          </div>

          <button type='submit'>CADASTRAR</button>
        </Form>

        <Link to='/'>Faça o seu login aqui</Link>
      </div>
    </div>
  );
}
