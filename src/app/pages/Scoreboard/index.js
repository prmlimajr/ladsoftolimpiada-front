import React, { Component } from 'react';
import Api from '../../services/api';

class Scoreboard extends Component {
  state = {};

  componentDidMount = async () => {
    const res = await Api.get('/score');
  };

  render() {
    return <div>Ranking</div>;
  }
}

export default Scoreboard;
