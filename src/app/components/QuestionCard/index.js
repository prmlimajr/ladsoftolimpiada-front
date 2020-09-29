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

  handleSelection = (e) => {
    console.log(e);
    const { selected } = this.state;
    this.setState({
      selected: !selected,
      question: {
        id: e.id,
        description: e.description,
      },
    });
  };

  render() {
    console.log(this.state);
    const { selected } = this.state;
    return (
      <div
        key={this.props.id}
        className={selected ? 'qcard-selected' : 'qcard'}
        selected={selected}
        // onClick={() => {
        //   this.setState({
        //     selected: !selected,
        //     question: {
        //       id: this.props.id,
        //       description: this.props.description,
        //     },
        //   });
        // }}
        onClick={() => this.props.handleSelectQuestion()}
      >
        {`QUESTÃO ${this.props.id} - NÍVEL ${this.props.level}`}
      </div>
    );
  }
}

export default QuestionCard;
