import '../src/scss/Style.scss'
import { useEffect } from 'react';
import Result from './Result';
import Test from './Test';
import Intro from './intro';
import useMbtiStore from './Store';
import { Routes, Route } from 'react-router-dom';



function App() {
  const {page,questionList, resultCon} = useMbtiStore();

  return (
    <Routes>
      <Route path="/" element={<Intro />} />
      <Route path="/test" element={<Test />} />
      <Route path={`/result`} element={<Result/>}/>
    </Routes>

   
  )
}

export default App;
