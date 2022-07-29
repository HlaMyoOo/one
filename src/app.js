import React from "react";

class Item extends React.Component {
  render() {
    return <li>Fruit</li>
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello React</h1>
        <ul>
          <Item name="Apple" price="2.1" />
        </ul>
      </div>
    )
  }
}

export default App;
