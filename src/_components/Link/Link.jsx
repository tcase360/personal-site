import React from 'react';

import './Link.css';

function Link({ url, text }) {
  return (
    <a
      href={url}
      className="link"
    >
      {text}
    </a>
  );
}

export default Link;
