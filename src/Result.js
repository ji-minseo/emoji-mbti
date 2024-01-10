import { useState } from 'react';
import '../src/scss/Style.scss'


function Result() {
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
            ISTP
          </div>
          <div className='__right'>
            <div className='__description'>
            관심 있는 모든 것에 대한 논리적 설명을 개발하도록 노력합니다. 
            이론적이고 추상적이며 사회적 상호 작용보다 아이디어에 더 관심이 있습니다. 
            조용하고 항상 억제하며 살아가면서도 유연하고 적응력이 있습니다. 
            관심 분야의 문제를 해결하기 위해 깊이 집중하는 능력이 있습니다. 
            회의적이며 때로는 비판적이며 항상 분석적입니다
            </div>
            <div className='__btns'>
              <button className='noborder'><img alt="weather" className="weather-icon" src={`${process.env.PUBLIC_URL}/kakao.png`} /></button>
              <button className='noborder'><img alt="weather" className="weather-icon" src={`${process.env.PUBLIC_URL}/link.png`} /></button>
              <button className='retry' onClick={()=>{window.onload()}}>다시하기</button>
            </div>
          </div>
        </div>
  

    </div>
  )
}

export default Result;
