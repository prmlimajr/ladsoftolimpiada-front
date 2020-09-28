import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input, Select } from '@rocketseat/unform';
import * as Yup from 'yup';

import login from '../../../assets/img/login.svg';
import { signUpRequest } from '../../store/modules/auth/actions';

import './styles.css';

const schema = Yup.object().shape({
  name: Yup.string().required('O nome é obrigatório'),
  email: Yup.string()
    .email('Insira um email válido')
    .required('O email é obrigatório'),
  password: Yup.string()
    .min(6, 'A senha deve ter no mínimo 6 caracteres')
    .required('A senha é obrigatória'),
  course: Yup.string().required('O curso é obrigatório'),
  semester: Yup.number().positive().required('O período é obrigatório'),
  studentId: Yup.string().required('O número de matrícula é obrigatório'),
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
          />
          <Input
            name='email'
            id='email'
            type='email'
            placeholder='Insira o seu email'
          />
          <Input
            name='password'
            id='password'
            type='password'
            placeholder='Insira a sua senha'
          />
          {/* <Select
            name='course'
            placeholder='Escolha o seu curso'
            options={[
              { id: 1, title: 'Ciência da Computação' },
              { id: 2, title: 'Sistemas de Informação' },
              { id: 3, title: 'Engenharia da Computação' },
              { id: 4, title: 'Outro' },
            ]}
          /> */}
          <Input name='course' id='course' placeholder='Insira o seu curso' />

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
            placeholder='Insira o seu número de matrícula'
          />

          <button type='submit'>CADASTRAR</button>
        </Form>

        <Link to='/'>Faça o seu login aqui</Link>
      </div>
    </div>
  );
}
