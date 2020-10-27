import React from "react";
import './Todo.css';
import TodoForm from "./components/TodoForm";
import TodoList from './components/TodoList'

const list = [
  {
    task: "buy groceries",
    id: 1,
    completed: false,
  },
  {
    task: "put away groceries",
    id: 2,
    completed: false,
  },
  {
    task: "cook groceries",
    id: 3,
    completed: false,
  },
  {
    task: "eat groceries",
    id: 4,
    completed: false,
  },
];

// design `App` to be the parent component of your application.
// this component is going to take care of state, and any change handlers you need to work with your state
class App extends React.Component {
  // you will need a place to store your state in this component.
  constructor() {
    super();
    this.state = {
      list: list
    };
  }

  //complete or not complete - that is the question?
  toggleListItem = (itemId) => {
    console.log("TodoForm: toggleListItem: itemId", itemId);
    this.setState({
      list: this.state.list.map((item) => {
        if (item.id === itemId) {
          return {...item, completed: !item.completed}
        };
        return item
      })
    });
  };

  //clearing something that is complete
  clearCompleted = () => {
    this.setState({
      list: this.state.list.filter((item) => !item.completed),
    });
  };

  // add an item?
  addListItem = (itemId) => {
    this.setState({
      list: [
        ...this.state.list,
        { id: Date.now(), task: itemId, completed: false },
      ],
    });
  };

  render() {
    return (
      <div className="App">
        <div className='header'>
          <h1>Welcome to Chad's Todo App!</h1>
          <TodoForm addListItem={this.addListItem} />
        </div>
        <div>
          <TodoList
            list={this.state.list}
            toggleListItem={this.toggleListItem}
            clearCompleted={this.clearCompleted}
          />
        </div>
      </div>
    );
  }
}

export default App;
