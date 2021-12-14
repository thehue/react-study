/* eslint-disable react/prop-types */
/* @jsx React.createElement */
import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function Counter({ count, onClick }) {
  return <button type="button" onClick={onClick}>Click me!({count})</button>;
}

function Page({ count, onClick }) {
  return <div>
    <Buttons />
    <Counter count={count} onClick={onClick}/>
  </div>;
}

function Button({ children }) {
  return <button type="button">{children}</button>;
}

function Buttons() {
  return (
    <p>
      {
        [1, 2, 3].map((i) => <Button key={i}>{i}</Button>)
      }
    </p>
  );
}

function App() {
  const [state, setState] = useState({
    count: 0,
  });
  const { count } = state;

  function handleClick() {
    setState({
      count: count + 1,
    });
  }

  return <div>
    <Page count={count} onClick={handleClick} />
  </div>;
}

ReactDOM.render(<App />, document.getElementById('app'));
