import '../src/scss/Style.scss'
import Result from './Result';
import Test from './Test';
import Intro from './intro';
import { Routes, Route } from 'react-router-dom';



function App() {
  return (
    <Routes>
      <Route path="/" element={<Intro />} />
      <Route path="/test" element={<Test />} />
      <Route path={`/result`} element={<Result/>}/>
    </Routes>

   
  )
}

export default App;
