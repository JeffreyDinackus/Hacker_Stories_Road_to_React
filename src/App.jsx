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
  }]
function App() {
  return (
    <div>
      <h1>Hello World</h1>

      <label htmlFor="search">Search: </label>
      <input id="search" type="text" />
      <ul>list.map(function(list));</ul>
    </div>
  );
}

export default App;
