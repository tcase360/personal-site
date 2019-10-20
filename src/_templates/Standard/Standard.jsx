import React from 'react';

import './Standard.css';

class StandardTemplate extends React.Component {

  render() {
    const { children } = this.props;

    return (
      <div className="standard-template">
        <header className="header">
          <a href="https://taylormcase.com">taylor case.</a>
        </header>

        <div className="body">{children}</div>

        <footer className="footer"></footer>
      </div>
    );
  }
}

export default StandardTemplate;
