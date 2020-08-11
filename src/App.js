import React from 'react';
import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import Feed from './components/feed/Feed';
import Widgets from './components/widgets/Widgets';

function App() {
  return (
    //BEM
    <div className="app">
      {/* <h1>building twitter clone</h1> */}

      {/* Sidebar */}
      <Sidebar/>

      {/* Feed */}
      <Feed/>

      {/* Widgets */}
      <Widgets/>

    </div>
  );
}

export default App;
