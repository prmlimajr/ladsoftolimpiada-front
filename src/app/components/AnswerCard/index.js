import React, { Component } from 'react';

import rightAnswer from '../../../assets/img/rightAnswer.svg';
import wrongAnswer from '../../../assets/img/wrongAnswer.svg';

import './styles.css';

class AnswerCard extends Component {
  render() {
    return (
      <div className={'answer-card'} key={this.props.challenge_id}>
        {`QUESTÃO ${this.props.challenge_id} - NÍVEL ${this.props.level} - RESPOSTA ${this.props.answer} `}
        <img
          src={this.props.point === 1 ? rightAnswer : wrongAnswer}
          alt={this.props.point === 1 ? 'acertou' : 'errou'}
        />
      </div>
    );
  }
}

export default AnswerCard;
