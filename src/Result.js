import { useState,useEffect } from 'react';
import '../src/scss/Style.scss'
import useMbtiStore from './Store';


function Result() {
  const {page ,mbtiList,questionList, mbti,resultCon, setResultCon} = useMbtiStore();
  let MBTI;

  useEffect(()=>{
    console.log(resultCon)
  },[resultCon])



	return (
    <div className="section section-main">
      <div className='header'>

        <div className='inner'>
          <div className='__left'>이모지 스티커팩 성격 테스트</div>
          <div className='__right'>나의 성격 유형에 맞는 이모지 스티커팩은 무엇일까?</div>
        </div>
        </div>
          
        <div className='section-result'>
        <div className='emojis'>
            
            <img alt="weather" className="weather-icon" src={`${process.env.PUBLIC_URL}/infj.png`} />
            <img alt="weather" className="weather-icon" src={`${process.env.PUBLIC_URL}/infj.png`} />
  
          </div>

          <div className='__left'>
            {resultCon.mbti}
            <div className='__mobilebtns'>
              <button className='noborder'><img alt="weather" className="weather-icon" src={`${process.env.PUBLIC_URL}/kakao.png`} /></button>
              <button className='noborder'><img alt="weather" className="weather-icon" src={`${process.env.PUBLIC_URL}/link.png`} /></button>
            </div>
          </div>
          <div className='__right'>
            <div className='__description'>
            {resultCon.content}
            </div>
            <div className='__btns'>
              <button className='noborder'><img alt="weather" className="weather-icon" src={`${process.env.PUBLIC_URL}/kakao.png`} /></button>
              <button className='noborder'><img alt="weather" className="weather-icon" src={`${process.env.PUBLIC_URL}/link.png`} /></button>
              <button className='retry' onClick={()=>{window.location.reload()}}>다시하기</button>
            </div>
          </div>
        </div>
  

    </div>
  )
}

export default Result;
