import React, { Component } from 'react';
// import { dispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { getUserPointsRequest } from '../../store/modules/score/actions';

import Api from '../../services/api';

import './styles.css';

class Header extends Component {
  componentDidMount = () => {
    const { user } = this.props;
    const pointsRequest = this.props.dispatch(
      getUserPointsRequest(user.profile.id)
    );
  };

  render() {
    const { user, points } = this.props;

    return (
      <header>
        <div className='header-container'>
          <nav>
            <Link to='/dashboard'>
              <h1>1ª OLÍMPIADA DE PROGRAMAÇÃO</h1>
            </Link>

            <div className='header-profile'>
              <span className='header-user'>{user.profile.name}</span>
              <span className='header-points'>{points} PONTOS</span>
            </div>
          </nav>
        </div>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  user: state.user,
  points: state.score.points,
});

export default connect(mapStateToProps)(Header);
