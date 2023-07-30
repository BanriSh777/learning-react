import React, { useState } from 'react';
import './style.css';

export default function HelloWorldApp() {
  return <Main className="main-view" />;
}

var isLoggedIn = true;

function Main() {
  let count, setCount;
  const initial = 100;
  if (initial) [count, setCount] = useState(initial);
  else [count, setCount] = useState(0);

  function pad(n, width, z) {
    z = z || '0';
    n = n + '';
    return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
  }

  return (
    <main>
      <Counter func="decrease" count={count} update={setCount} />
      {!!count && <b>{pad(count, 3, 0)}</b>}
      <Counter func="increase" count={count} update={setCount} />
    </main>
  );
}

function Button({ content, clickHandler }) {
  return <button onClick={clickHandler}>{content}</button>;
}

function Counter({ func, count, update }) {
  let increment = () => {
    update(++count);
  };
  let decrement = () => {
    if (count > 0) update(--count);
  };

  return (
    <>
      {func == 'decrease' ? (
        <Button clickHandler={decrement} content="-" />
      ) : (
        <Button clickHandler={increment} content="+" />
      )}
    </>
  );
}

function SayHiButton(props) {
  function sayHi() {
    alert('Hi ' + props.name + ', your number ' + props.number);
  }
  return <button onClick={sayHi}>Say Hi</button>;
}

const data = [
  {
    name: 'Mahesh',
    age: 13,
    roll: 29,
  },
  {
    name: 'Shalom',
    age: 12,
    roll: 32,
  },
  {
    name: 'Sumanth',
    age: 12,
    roll: 36,
  },
];

function StudentData(props) {
  let studentListView = (
    <ol>
      {data.map((studentRecord) => (
        <li>
          <Student data={studentRecord} />
        </li>
      ))}
    </ol>
  );

  return (
    <>
      <h2>Students</h2>
      {studentListView}
    </>
  );
}

function Student(studentProp) {
  return (
    <>
      {studentProp.data.name}, RollNo: {studentProp.data.roll}{' '}
    </>
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

function MyButton() {
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
