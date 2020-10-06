import React, { Component } from 'react';
// import { dispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { getUserPointsRequest } from '../../store/modules/score/actions';
import { signOut } from '../../store/modules/auth/actions';

import './styles.css';

class Header extends Component {
  componentDidMount = () => {
    const { user } = this.props;
    this.props.dispatch(getUserPointsRequest(user.profile.id));
  };

  handleSignOut = () => {
    this.props.dispatch(signOut());
  };

  render() {
    const { user, points, level } = this.props;

    return (
      <header>
        <div className='header-container'>
          <nav>
            <Link to='/dashboard' className='logo'>
              <h1>1ª OLÍMPIADA DE PROGRAMAÇÃO</h1>
            </Link>

            <div className='header-profile'>
              <span className='header-user'>{user.profile.name}</span>
              <span className='header-points'>
                {points || '0'} PONTOS - NÍVEL {level || 1}
              </span>
              <Link to='/' className='logout' onClick={this.handleSignOut}>
                SAIR
              </Link>
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
  level: state.score.level,
});

export default connect(mapStateToProps)(Header);
