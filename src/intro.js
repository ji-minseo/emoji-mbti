import { useEffect } from 'react';
import '../src/scss/Style.scss'
import  useMbtiStore  from './Store';
import { Link } from 'react-router-dom';


export default function Intro(){
  const {setPage} = useMbtiStore();

  return <div className="section section-main">
    <div className='header'>

      <div className='inner'>
        <div className='__left'>이모지 스티커팩 성격 테스트</div>
        <div className='__right'>나의 성격 유형에 맞는 이모지 스티커팩은 무엇일까?</div>
      </div>
    </div>
    <div className='emojis'>
        
        <img alt="weather" className="weather-icon" src={`${process.env.PUBLIC_URL}/11.png`} />
        <img alt="weather" className="weather-icon" src={`${process.env.PUBLIC_URL}/22.png`} />
        <img alt="weather" className="weather-icon" src={`${process.env.PUBLIC_URL}/33.png`} />
    </div>
      <div className='credit'>20240109 jmseo, nhhong</div>

   
    <div className='btn'> <Link to='/test' > ✨시작하기 ➧</Link></div>
  </div>
}
