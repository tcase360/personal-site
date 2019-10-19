import React from 'react';
import StandardTemplate from '../../_templates/Standard/Standard';
import Link from '../../_components/Link/Link';

import './Index.css';

class IndexPage extends React.Component {
  render() {
    return (
      <StandardTemplate>
        <p>Hi! I'm Taylor.</p>

        <p>
          I'm a front-end engineer, currently working at{" "}
          <Link url="//myshyft.com" text="Shyft" />.
        </p>

        <p>I live in Seattle. </p>

        <p>
          I love to{" "}
          <Link
            url="https://www.goodreads.com/user/show/53231383-taylor-case"
            text="read"
          />
          .{" "}
        </p>

        <p>I love to run. </p>

        <p>I love to travel. </p>

        <p>
          I love to <Link url="//github.com/tcase360" text="code" />.
        </p>

        <p>I love to write.</p>
      </StandardTemplate>
    );
  }
}

export default IndexPage;
