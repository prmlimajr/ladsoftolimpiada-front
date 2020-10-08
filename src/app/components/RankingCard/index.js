import React, { Component } from 'react';

import './styles.css';

class RankingCard extends Component {
  render() {
    return (
      <div className='rc-container'>
        <li key={this.props.id}>
          <strong>{this.props.name}</strong> - Matrícula: {this.props.studentId}{' '}
          - {this.props.course} - {this.props.semester}º período -{' '}
          <strong>{this.props.points} PONTOS</strong>
        </li>
      </div>
    );
  }
}

export default RankingCard;
