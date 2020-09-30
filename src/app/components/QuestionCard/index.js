import React, { Component } from 'react';

import './styles.css';

class QuestionCard extends Component {
  state = {
    selected: false,
    question: {
      id: null,
      description: null,
    },
  };

  render() {
    const { selected } = this.state;
    return (
      <div
        key={this.props.id}
        className={selected ? 'qcard-selected' : 'qcard'}
        selected={selected}
        onClick={() => this.props.handleSelectQuestion()}
      >
        {`QUESTÃO ${this.props.id} - NÍVEL ${this.props.level}`}
      </div>
    );
  }
}

export default QuestionCard;
