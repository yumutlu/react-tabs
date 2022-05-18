import React from 'react';
import './App.css';

import Tabs from './Components/Tabs';
import TabPane from './Components/Tabs/TabPane';

const App = (): JSX.Element => (
  <div className="App">
    <Tabs>
      <TabPane title="Tab 1">
        <div>Basic</div>
      </TabPane>
      <TabPane title="Tab 2">
        <div>Standard</div>
      </TabPane>
      <TabPane title="Tab 3">
        <div>Premium</div>
      </TabPane>
    </Tabs>
  </div>
);

export default App;
