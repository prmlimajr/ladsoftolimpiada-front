import React, { Component } from 'react';
import { Form, Input } from '@rocketseat/unform';
import QuestionCard from '../../components/QuestionCard';
import { connect } from 'react-redux';
import * as Yup from 'yup';

import Api from '../../services/api';

import leftArrow from '../../../assets/img/left.svg';
import rightArrow from '../../../assets/img/right.svg';
import questionMark from '../../../assets/img/question.svg';

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
            {selectedQuestion.description}
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

const mapStateToProps = (state) => ({
  auth: state.auth,
  user: state.user,
  points: state.score.points,
  level: state.score.level,
});

export default connect(mapStateToProps)(Dashboard);
