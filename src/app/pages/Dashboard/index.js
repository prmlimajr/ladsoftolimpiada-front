import React, { Component } from 'react';
import { Form, Input } from '@rocketseat/unform';
import QuestionCard from '../../components/QuestionCard';

import leftArrow from '../../../assets/img/left.svg';
import rightArrow from '../../../assets/img/right.svg';
import questionMark from '../../../assets/img/question.svg';

import './styles.css';

class Dashboard extends Component {
  render() {
    return (
      <div className='dashboard'>
        <div className='dashboard-left'>
          <div className='db-left-header'>
            <img src={leftArrow} alt='voltar' />
            <h1>NÍVEL 2</h1>
            <img src={rightArrow} alt='avançar' />
          </div>

          <div className='db-left-questions'>
            <QuestionCard />
            <QuestionCard />
            <QuestionCard />
            <QuestionCard />
            <QuestionCard />
            <QuestionCard />
            <QuestionCard />
            <QuestionCard />
            <QuestionCard />
            <QuestionCard />
          </div>
        </div>

        <div className='dashboard-right'>
          <h1>
            <img src={questionMark} alt='desafio' /> QUESTÃO 12 - NÍVEL 2
          </h1>

          <div className='db-right-question'>
            Mussum Ipsum, cacilds vidis litro abertis. Praesent vel viverra
            nisi. Mauris aliquet nunc non turpis scelerisque, eget. Sapien in
            monti palavris qui num significa nadis i pareci latim. Viva Forevis
            aptent taciti sociosqu ad litora torquent. Mais vale um bebadis
            conhecidiss, que um alcoolatra anonimis.
          </div>

          <Form>
            <Input
              name='answer'
              id='answer'
              placeholder='Insira sua resposta'
            />

            <button type='submit' className='btn-answer'>
              ENVIAR
            </button>
          </Form>

          <div className='db-right-alert'>
            Mussum Ipsum, cacilds vidis litro abertis. Interagi no mé, cursus
            quis, vehicula ac nisi. Quem num gosta di mé, boa gentis num é.
            Interessantiss quisso pudia ce receita de bolis, mais bolis eu num
            gostis. Nec orci ornare consequat. Praesent lacinia ultrices
            consectetur. Sed non ipsum felis.
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
