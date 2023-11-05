// import * as React from 'react';
// const title = 'React';

const numbers = [1, 2, 3, 4];
const exponentialNumbers = numbers.map(function (number) {
  return number * number;
});
console.log(exponentialNumbers);
// [1, 4, 9, 16]

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
function App() {
  return (
    <div>
      ...
      <ul>
        {list.map(function (item) {
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
    </div>
  );
}

export default App;
