import * as React from 'react';
// const title = 'React';
/* eslint-disable */ // TODO: upgrade to latest eslint tooling

const numbers = [1, 2, 3, 4];
const exponentialNumbers = numbers.map(function (number) {
  return number * number;
});
console.log(exponentialNumbers);
// [1, 4, 9, 16]

const AddOne = (x) => x + 1;





function Counter() {

  const [count, setCount] = React.useState(0);

  function handleCount(delta) {
    setCount(count + delta);
  }

  return (
    <div>
      Count: {count}

      <button type="button" onClick={() => handleCount(1)}>
        Increase Count
      </button>
      <button type="button" onClick={() => handleCount(-1)}>
        Decrease Count
      </button>
    </div>
  );
}




const List = (props) => (
  <ul>
    {props.list.map((item) => (
      <Item key={item.objectID} item={item} />
    ))}
  </ul>
);

const Welcome = ({ text }) => {
  return <h1 style={{ color: 'red' }}>{text.greeting}</h1>;
};


const Item = (props) => (
  <li>
    <span>
      <a href={props.item.url}>{props.item.title}</a>
    </span>
    <span>{props.item.author}</span>
    <span>{props.item.num_comments}</span>
    <span>{props.item.points}</span>
  </li>
);
const App = () => {
  const stories = [
    {
      title: 'React',
      url: 'https://reactjs.org/',
      author: 'Jordan Walke',
      num_comments: 3,
      points: 4,
      objectID: 0,
    },
    {
      title: 'Redux',
      url: 'https://redux.js.org/',
      author: 'Dan Abramov, Andrew Clark',
      num_comments: 2,
      points: 5,
      objectID: 1,
    },
    {
      title: 'shadcnui',
      url: 'https://ui.shadcn.com/',
      author: 'shad',
      num_comments: 2,
      points: 5,
      objectID: 3,
    }]
  const greetingObject = { greeting: 'Welcome to React' };

  return (
    < >
      <h1>Hacker Stories</h1>
      <AddOne />
      <Search />
      <Welcome text={greetingObject} />
      <List list={stories} />
      <Counter />
    </ >)
}



const Search = () => {

  const [text, setText] = React.useState('');

  function handleChange(event) {
    setText(event.target.value);
  }


  return (
    <div>





      <label htmlFor="search">Search: </label>
      Fundamentals of React
      40
      <input id="search" onChange={handleChange} type="text" />
      <p>{text}</p>







    </div>
  )
};


console.log(App())

export default App;
