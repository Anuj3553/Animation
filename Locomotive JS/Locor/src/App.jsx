import React from 'react';
import Page1 from './components/Page1';
import './index.css';

import LocomotiveScroll from 'locomotive-scroll';
const locomotiveScroll = new LocomotiveScroll();


const App = () => {
  return (
    <div>
      <Page1 className="page page1"/>
      <Page1 className="page page2"/>
      <Page1 className="page page3"/>
    </div>
  );
};

export default App;
