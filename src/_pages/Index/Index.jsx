import React from 'react';
import StandardTemplate from '../../_templates/Standard/Standard';
import Link from '../../_components/Link/Link';

import './Index.css';

function showOrHide(index, array) {
  return array[index] ? 'show' : 'hide';
}

class IndexPage extends React.Component {
  state = {
    loadedCount: 0,
    textsLoaded: {},
    
  };

  componentDidMount() {
    const interval = setInterval(this._renderNextPieceOfText, 50);

    this.setState({
      interval,
    });
  }

  _renderNextPieceOfText = () => {
    const { loadedCount, textsLoaded } = this.state;

    textsLoaded[loadedCount] = 1;

    this.setState({
      loadedCount: loadedCount + 1,
      textsLoaded
    });

    if (loadedCount === 8) {
      this.setState({
        interval: null,
      });
    }
  };

  render() {
    const { textsLoaded } = this.state;

    return (
      <StandardTemplate>
        <p className={showOrHide(1, textsLoaded)}>Hi! I'm Taylor.</p>

        <p className={showOrHide(2, textsLoaded)}>
          I'm a front-end engineer currently working at{" "}
          <Link url="//myshyft.com" text="Shyft" />.
        </p>

        <p className={showOrHide(3, textsLoaded)}>I live in Seattle. </p>

        <p className={showOrHide(4, textsLoaded)}>
          I love to{" "}
          <Link
            url="https://www.goodreads.com/user/show/53231383-taylor-case"
            text="read"
          />
          .{" "}
        </p>

        <p className={showOrHide(5, textsLoaded)}>I love to run. </p>

        <p className={showOrHide(6, textsLoaded)}>I love to travel. </p>

        <p className={showOrHide(7, textsLoaded)}>
          I love to <Link url="//github.com/tcase360" text="code" />.
        </p>

        <p className={showOrHide(8, textsLoaded)}>I love to write.</p>
      </StandardTemplate>
    );
  }
}

export default IndexPage;
