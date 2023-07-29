import React from 'react';
import './style.css';

export default function App() {
  return <Main className="main-view" />;
}

var isLoggedIn = true;

function Main() {
  return (
    <main>
      <Session />
    </main>
  );
}

function Session() {
  let content;
  if (isLoggedIn) {
    console.log('Logged in - Name will be displayed');
    content = <Name />;
  } else {
    console.log('Not Logged in - Btn will be displayed to log in');
    content = <LoginButton />;
  }
  return (
    <div className={isLoggedIn ? 'authenticated' : 'unauthenticated'}>
      {content}
    </div>
  );
}

function LoginButton() {
  console.log('Button displayed');
  let count = 0;
  let counter;

  let login = () => {
    isLoggedIn = true;
    console.log('Logged in');
    counterFn();
  };

  let counterFn = () => {
    counter = 'You pressed no of times: ';
    count = count + 1;

    if (count) {
      counter = counter + count;
      console.log(counter);
    } else {
      counter = '';
    }
  };

  return (
    <>
      <button className="login-button" onClick={login}>
        Login Button
      </button>
    </>
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
  return <button className="my-button">My Button</button>;
}

function Name() {
  const fname = 'mahesh';
  const lname = 'addipalli';
  let nameColor = 'red';
  let name = fname.toUpperCase() + ' ' + lname.toUpperCase();
  return (
    <span style={{ color: nameColor, fontWeight: 'bold', fontSize: '40px' }}>
      {name}
    </span>
  );
}
