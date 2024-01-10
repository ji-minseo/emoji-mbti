import '../src/scss/Style.scss'
import { useEffect, useState } from 'react';
import Result from './Result';
import Test from './Test';
import Intro from './intro';
import useMbtiStore from './Store';

function App() {
  const {page, setPage, questionList} = useMbtiStore();

  return (
    page === 0 ?  <Intro/>
    : page <= questionList.length ? <Test/>
    : <Result/>
  )
}

export default App;
