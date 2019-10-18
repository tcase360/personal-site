import React from 'react';
import logo from './logo.svg';
import './App.css';
import Link from './_components/Link/Link';

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <section className="body">
        <p>Hi! I'm Taylor.</p>

        <p>I'm a front-end engineer, currently working at <Link url="//myshyft.com" text="Shyft"/>.</p>

        <p>I live in Seattle. </p>

        <p>I love to read. </p>

        <p>I love to travel. </p>

        <p>I love to code.</p>

        <p>I love to write.</p>
      </section>

      <footer className="">

      </footer>"
    </div>
  );
}

export default App;
