import React, { Component } from 'react';
import { Form, Input } from '@rocketseat/unform';
import QuestionCard from '../../components/QuestionCard';
import { connect } from 'react-redux';
import * as Yup from 'yup';

import Api from '../../services/api';

import leftArrow from '../../../assets/img/left.svg';
import rightArrow from '../../../assets/img/right.svg';
import questionMark from '../../../assets/img/question.svg';
import alert from '../../../assets/img/alert.svg';

import { answerQuestionRequest } from '../../store/modules/score/actions';

import './styles.css';

const schema = Yup.object().shape({
  answer: Yup.string().required(),
});

class Dashboard extends Component {
  state = {
    userLevel: null,
    currentLevel: null,
    selectedQuestion: {
      id: null,
      description: null,
      level: null,
    },
    questions: {
      easy: [],
      normal: [],
      hard: [],
    },
    input: '',
  };

  componentDidMount = async () => {
    const request = await Api.get('/challenges');
    const easy = request.data.filter((challenge) => challenge.level === 1);
    const normal = request.data.filter((challenge) => challenge.level === 2);
    const hard = request.data.filter((challenge) => challenge.level === 3);

    const { level } = this.props;
    console.log('O LVL é', level);
    this.setState({
      userLevel: level,
      currentLevel: 1,
      questions: {
        easy,
        normal,
        hard,
      },
    });
  };

  changeLevel = (e) => {
    const { currentLevel } = this.state;
    const { level } = this.props;

    if (e.target.id === 'next') {
      if (currentLevel < level) {
        this.setState({
          currentLevel: currentLevel + 1,
        });
      }
    }

    if (e.target.id === 'previous') {
      if (currentLevel > 1) {
        this.setState({
          currentLevel: currentLevel - 1,
        });
      }
    }
  };

  handleSelectQuestion = (id, level, description) => {
    this.setState({
      selectedQuestion: {
        id,
        level,
        description,
      },
    });
  };

  renderLevel = (level) => {
    const { easy, normal, hard } = this.state.questions;
    if (level === 1) {
      const easyList = easy.map((challenge) => {
        return (
          <QuestionCard
            id={challenge.id}
            level={challenge.level}
            description={challenge.description}
            handleSelectQuestion={() =>
              this.handleSelectQuestion(
                challenge.id,
                challenge.level,
                challenge.description
              )
            }
          />
        );
      });
      return easyList;
    } else if (level === 2) {
      const normalList = normal.map((challenge) => {
        return (
          <QuestionCard
            id={challenge.id}
            level={challenge.level}
            description={challenge.description}
            handleSelectQuestion={() =>
              this.handleSelectQuestion(
                challenge.id,
                challenge.level,
                challenge.description
              )
            }
          />
        );
      });
      return normalList;
    } else {
      const hardList = hard.map((challenge) => {
        return (
          <QuestionCard
            id={challenge.id}
            level={challenge.level}
            description={challenge.description}
            handleSelectQuestion={() =>
              this.handleSelectQuestion(
                challenge.id,
                challenge.level,
                challenge.description
              )
            }
          />
        );
      });
      return hardList;
    }
  };

  handleSubmit = async (challengeId) => {
    const answer = this.state.input;
    const userId = this.props.user.profile.id;

    const data = { userId, challengeId, answer };

    if (challengeId <= 10) {
      const updatedList = this.state.questions.easy.filter(
        (challenge) => challenge.id !== challengeId
      );
      this.setState({
        questions: {
          ...this.state.questions,
          easy: updatedList,
        },
      });
    } else if (challengeId > 10 && challengeId <= 20) {
      const updatedList = this.state.questions.normal.filter(
        (challenge) => challenge.id !== challengeId
      );
      this.setState({
        questions: {
          ...this.state.questions,
          normal: updatedList,
        },
      });
    } else {
      const updatedList = this.state.questions.hard.filter(
        (challenge) => challenge.id !== challengeId
      );
      this.setState({
        questions: {
          ...this.state.questions,
          hard: updatedList,
        },
      });
    }

    this.setState({
      input: '',
    });
    this.props.dispatch(answerQuestionRequest(data));
  };

  handleInputChange = (e) => {
    this.setState({
      input: e.target.value,
    });
  };

  render() {
    const { questions, currentLevel, selectedQuestion } = this.state;
    const userLevel = this.props.level;
    const { easy, normal, hard } = questions;

    const checkLevel = currentLevel <= userLevel ? currentLevel : userLevel;

    return (
      <div className='dashboard'>
        <div className='dashboard-left'>
          <div className='db-left-header'>
            <img
              src={leftArrow}
              alt='voltar'
              id='previous'
              onClick={this.changeLevel}
            />
            <h1>{`NÍVEL ${checkLevel}`}</h1>
            <img
              src={rightArrow}
              alt='avançar'
              id='next'
              onClick={this.changeLevel}
            />
          </div>

          <div className='db-left-questions'>
            {questions ? this.renderLevel(checkLevel) : null}
          </div>
        </div>

        <div className='dashboard-right'>
          <h1>
            <img src={questionMark} alt='desafio' />{' '}
            {`QUESTÃO ${selectedQuestion.id || ''} - NÍVEL ${
              selectedQuestion.level || ''
            }`}
          </h1>

          <div className='db-right-question'>
            <pre className='pre-question'>{selectedQuestion.description}</pre>
          </div>

          <Form
            schema={schema}
            onSubmit={() => this.handleSubmit(selectedQuestion.id)}
          >
            {selectedQuestion.id && (
              <Input
                name='answer'
                id='answer'
                placeholder='Insira sua resposta'
                onChange={this.handleInputChange}
                value={this.state.input}
              />
            )}

            {selectedQuestion.id && (
              <button type='submit' className='btn-answer'>
                ENVIAR
              </button>
            )}
          </Form>

          <div className='db-right-alert'>
            <h1>
              <img src={alert} alt='Atenção' /> ATENÇÃO
            </h1>
            <p>
              Você tem apenas uma chance para responder cada questão. Após
              apertar o botão de enviar, ou apertar a tecla Enter, a resposta o
              sistema não permite que você envie uma nova resposta para a mesma
              questão, portanto apenas aperte o botão quando estiver certo de
              que deseja fazê-lo.
            </p>
            <p>
              O sistema compara a sua resposta com a resposta correta através de
              igualdade, então atente para informar a resposta no padrão exato
              que está sendo solicitado. Caso sua resposta seja A, insira apenas
              A e não "letra A" ou "alternativa A".
            </p>
            <p>
              Em caso de necessidade consulte o suporte imediatamente através do
              whatsapp:{' '}
              <a
                href='https://api.whatsapp.com/send?phone=5581999813319&text=Oi%2C%20Paulo%2C%20eu%20tenho%20um%20problema%20com%20a%20ol%C3%ADmpiada%3A'
                target='_blank'
              >
                (81)99981-3319
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  user: state.user,
  points: state.score.points,
  level: state.score.level,
});

export default connect(mapStateToProps)(Dashboard);
