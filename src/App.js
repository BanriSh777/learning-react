import React from 'react';
import './style.css';

export default function App() {
  return <Main />;
}

function Main() {
  return <main class="main-view"></main>;
}

function Header() {
  return (
    <header>
      <h2>My React App</h2>
    </header>
  );
}

function Button() {
  return <button class="my-button">My Button</button>;
}
