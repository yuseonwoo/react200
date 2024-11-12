import React from 'react';
import './App.css'
import ImportComponent from './component/R003_ImportComponent'
import LifeCycleEx from './component/R004_LifecycleEx';

function App(){
  return(
    <div>
      <h1>Start React200!</h1>
      <p>HTML 적용하기</p>
      <ImportComponent></ImportComponent>
      <LifeCycleEx></LifeCycleEx>
    </div>
  );
}

export default App;