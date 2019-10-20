import React from 'react';

import './Standard.css';

class StandardTemplate extends React.Component {
  state = {
    headerLoaded: false,
  };

  componentDidMount() {
    setTimeout(this._fadeInHeader, 100);
  }

  _fadeInHeader = () => {
    this.setState({
      headerLoaded: true
    });
  }

  render() {
    const { headerLoaded } = this.state;
    const { children } = this.props;

    const logoClassName = headerLoaded ? "show" : "hide";

    return (
      <div className="standard-template">
        <header className="header">
          <a 
            href="https://taylormcase.com"
            className={logoClassName}
          >
            Taylor Case
          </a>
        </header>

        <div className="body">{children}</div>

        <footer className="footer"></footer>
      </div>
    );
  }
}

export default StandardTemplate;
