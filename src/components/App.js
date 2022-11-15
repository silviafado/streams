import React from 'react';
import { Router, Route } from 'react-router-dom';
import StreamCreate from './streams/StreamCreate';
import StreamDelete from './streams/StreamDelete';
import StreamEdit from './streams/StreamEdit';
import StreamList from './streams/StreamList';
import StreamShow from './streams/StreamShow';
import Header from './Header';
import history from '../history';

function App() {
  return (
    <div className="ui container">
      <Router history={history}>
        <div>
          <Header />
          <Route path="/" exact component={StreamList}></Route>
          <Route path="/streams/new" component={StreamCreate}></Route>
          <Route path="/streams/delete/:id" component={StreamDelete}></Route>
          <Route path="/streams/edit/:id" component={StreamEdit}></Route>
          <Route path="/streams/show/:id" component={StreamShow}></Route>
        </div>
      </Router>
    </div>
  );
}

export default App;
