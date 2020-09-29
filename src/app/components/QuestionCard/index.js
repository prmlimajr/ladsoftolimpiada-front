import React, { Component } from 'react';

import './styles.css';

class QuestionCard extends Component {
  state = {
    selected: false,
  };

  handleSelection = (e) => {
    console.log(e);
    const { selected } = this.state;
    this.setState({
      selected: !selected,
    });
  };

  render() {
    const { selected } = this.state;
    return (
      <div
        className={selected ? 'qcard-selected' : 'qcard'}
        selected={selected}
        onClick={() => {
          this.setState({ selected: !selected });
        }}
      >
        QUESTÃO 12 - NÍVEL 2
      </div>
    );
  }
}

export default QuestionCard;
