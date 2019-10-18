import React from 'react';

import './Typing.css';


/**
 * 1. Start with first word
 * 2. Oscillate typing - type full word, wait, and then delete it one letter at a time
 * 3. setTimeout to pause, and then setInterval and type it out
 */
class Typing extends React.Component {
  state = {
    wordsToType: [
      'Running',
      'Traveling',
      'Programming',
    ],
    currentSubString: '',
    currentWordIndex: 0,
    interval: null,
  };

  componentDidMount() {
    this._setInterval();
  }

  _setInterval = () => {
    const { words } = this.props;

    setInterval(this._updateWordToDisplay, 200);
  }

  _updateWordToDisplay = () => {
    const { words } = this.props;
    const { currentWordIndex, currentSubString } = this.state;

    if (currentSubString.length === words[currentWordIndex].length) {
      this.setState({
        currentWordIndex: currentWordIndex + 1,
        currentSubString
      });
    }


  }

  render() {
    const { currentSubString } = this.state;
    return (
      <p className="typing">
        {currentSubString}
      </p>
    )
  }
}