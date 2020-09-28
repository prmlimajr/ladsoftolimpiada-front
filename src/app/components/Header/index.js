import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Api from '../../services/api';

import './styles.css';

class Header extends Component {
  state = {
    user: {},
  };

  componentDidMount = () => {
    const { user } = this.props;

    this.setState({
      user,
    });
  };

  render() {
    const { user } = this.props;
    return (
      <header>
        <div className='header-container'>
          <nav>
            <Link to='/dashboard'>
              <h1>1ª OLÍMPIADA DE PROGRAMAÇÃO</h1>
            </Link>

            <div className='header-profile'>
              <span className='header-user'>{user.profile.name}</span>
              <span className='header-points'>11 PONTOS</span>
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
});
export default connect(mapStateToProps)(Header);
