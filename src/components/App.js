import React from 'react';
import Header from "./Header";
import SharedView from "./SharedView";

function App(){
  return (
    <React.Fragment>
      <Header />
      <hr/>
      <SharedView />
    </React.Fragment>
  );
}

export default App;