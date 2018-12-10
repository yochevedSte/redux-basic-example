import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux';


import PostForm from './components/PostForm';
import Posts from './components/Posts';
import store from './store';


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <PostForm />
          <Posts />
        </div>
      </Provider>
    );
  }
}

export default App;
