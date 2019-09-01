import React from 'react';
import { BrowserRouter, Route, Link} from 'react-router-dom';
import Header from './header/header';
import streamList from './streams/streamList';
import streamCreate from './streams/streamCraete';
import streamShow from './streams/streamShow';
import streamEdit from './streams/streamEdit';
import streamDelete from './streams/streamDealet';


import SearchBar from '../forms-sec/SearchBar';




function App() {
  return (
    <div>

      <BrowserRouter>
        <div>
          <Header />
          <Link to='/list'>Router_Sec</Link>
          <Route path='/list' exact component={streamList} />
          <Route path='/stream/new' component={streamCreate} />
          <Route path='/stream/delete' component={streamDelete} />
          <Route path='/stream/show' component={streamShow} />
          <Route path='/stream/edit' component={streamEdit} />

          <Link to='/form'>Form_Sec</Link>
          <Route path='/form' component={SearchBar} />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
