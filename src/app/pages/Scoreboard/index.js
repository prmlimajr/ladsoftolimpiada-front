import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getRankingRequest } from '../../store/modules/score/actions';

import RankingCard from '../../components/RankingCard';

import './styles.css';

class Scoreboard extends Component {
  state = {
    ranking: [],
  };

  componentDidMount = () => {
    console.log('montou');
    this.props.dispatch(getRankingRequest());
  };

  render() {
    const { ranking } = this.props;

    return (
      <div className='ranking-container'>
        <h1>RANKING</h1>
        <p>Acompanhe o progresso de todos os competidores!</p>
        <ol>
          {ranking.map((user) => {
            console.log(user);
            return (
              <RankingCard
                id={Math.random()}
                name={user.name}
                studentId={user.studentId}
                course={user.course}
                semester={user.semester}
                points={user.points}
              />
            );
          })}
        </ol>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  user: state.user,
  points: state.score.points,
  level: state.score.level,
  ranking: state.score.ranking,
});
export default connect(mapStateToProps)(Scoreboard);
