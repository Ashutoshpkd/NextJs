import React from 'react';
import SwipeDownDrawer from '../../components/drawer/index';

const App = () => {
  return (
    <div>
      <h1>My App</h1>
      <SwipeDownDrawer title="Drawer">
        <p>Drawer content goes here.</p>
      </SwipeDownDrawer>
    </div>
  );
};

export default App;

