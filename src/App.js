import React from 'react';
import './style.css';

export default function App() {
  return <Main className="main-view" />;
}

function Main() {
  return (
    <main>
      <Name />
    </main>
  );
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

function Name() {
  const fname = 'mahesh';
  const lname = 'addipalli';
  let nameColor = 'red';
  let name = fname.toUpperCase() + ' ' + lname.toUpperCase();
  return <span style={{ color: nameColor }}>{name}</span>;
}
