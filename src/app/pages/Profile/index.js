import React, { Component } from 'react';
import { connect } from 'react-redux';

import './styles.css';
class Profile extends Component {
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
    const { profile } = user;
    const { name, course, semester, studentId, email } = profile;
    return (
      <div className='profile-user'>
        <h1>MEU PERFIL</h1>

        <div className='profile-data'>
          <span>
            <strong>Nome:</strong> {name}
          </span>
          <span>
            <strong>Curso:</strong> {course}
          </span>
          <span>
            <strong>Período:</strong> {semester}
          </span>
          <span>
            <strong>Matrícula:</strong> {studentId}
          </span>
          <span>
            <strong>Email:</strong> {email}
          </span>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  user: state.user,
});
export default connect(mapStateToProps)(Profile);
