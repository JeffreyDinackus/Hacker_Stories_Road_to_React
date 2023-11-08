import * as React from 'react';
// const title = 'React';

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


const list = [
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
    url: 'xd',
    author: 'shad',
    num_comments: 2,
    points: 5,
    objectID: 3,
  }]

const List = () => {
  return (
    <ul>
      {list.map((item) => {
        return (
          <li key={item.objectID}>
            <span>
              <a href={item.url}>{item.title}</a>
            </span>
            <span>{item.author}</span>
            <span>{item.num_comments}</span>
            <span>{item.points}</span>
          </li>
        );
      })}
    </ul>
  );
}

const App = () => {
  return (
    < >
      <h1>Hacker Stories</h1>
      <AddOne />
      <Search />
      <List />
      <List />
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
