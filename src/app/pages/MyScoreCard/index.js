import React, { Component } from 'react';
import AnswerCard from '../../components/AnswerCard';

import { connect } from 'react-redux';

import { listUserAnswersRequest } from '../../store/modules/score/actions';

import './styles.css';

class MyScoreCard extends Component {
  componentDidMount = () => {
    const { user } = this.props;

    this.props.dispatch(listUserAnswersRequest(user.profile.id));
  };

  render() {
    const { userAnswerList } = this.props;
    console.log(userAnswerList);
    return (
      <div className='my-score'>
        <h1 className='my-score-title'>MEUS ACERTOS</h1>

        <div className='answer-container'>
          {userAnswerList.map((answer) => {
            return (
              <AnswerCard
                key={answer.challenge_id}
                challenge_id={answer.challenge_id}
                level={answer.level}
                answer={answer.answer}
                point={answer.point}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  user: state.user,
  userAnswerList: state.score.userAnswerList,
});

export default connect(mapStateToProps)(MyScoreCard);
