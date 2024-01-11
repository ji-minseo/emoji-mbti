import '../src/scss/Style.scss'
import { useEffect } from 'react';
import Result from './Result';
import Intro from './intro';
import useMbtiStore from './Store';


function App() {
  const {page,questionList} = useMbtiStore();

  useEffect(()=>{
    console.log(page)
  },[page])

  return (
    page === 0 ?  <Intro/>
    : page <= questionList.length ? <Test/>
    : <Result/>
  )
}

export default App;
