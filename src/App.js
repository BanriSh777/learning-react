import React, { useState } from 'react';
import './style.css';

export default function App() {
  return <Main className="main-view" />;
}

var isLoggedIn = true;

function Main() {
  return (
    <main>
      Decreases until 0 : <Counter func={0} initial={100} />
      Increases: <Counter />
    </main>
  );
}

function Counter(props) {
  let count, setCount;
  if (props.initial) [count, setCount] = useState(props.initial);
  else [count, setCount] = useState(0);
  let increment = () => {
    setCount(++count);
  };
  let decrement = () => {
    if (count > 0) setCount(--count);
  };

  return (
    <>
      <button onClick={props.func == 0 ? decrement : increment}>
        Click Me
      </button>
      {!!count && <b>Clicked - {count} times</b>}
      <br />
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
