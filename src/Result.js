import { useState,useEffect } from 'react';
import '../src/scss/Style.scss'
import useMbtiStore from './Store';


function Result() {
  const {resultCon} = useMbtiStore();
  const {Kakao} = window;
  const KAKAOKEY = 'd5a45aa11ca1775f9d9a83c615fa9f65';


  function shareKakao(){
    Kakao.cleanup();
    Kakao.init(KAKAOKEY);
    Kakao.isInitialized();

    Kakao.Share.sendDefault({
      objectType: "feed",
      content: {
        title: '이모지 스티커팩', // 인자값으로 받은 title
        description: "나의 MBTI의 이모지는 어떤 모습일지이ㅏㄹ머;ㅣㄴ얼;ㅣ", 
        imageUrl: 'https://mud-kage.kakao.com/dn/NTmhS/btqfEUdFAUf/FjKzkZsnoeE4o19klTOVI1/openlink_640x640s.jpg',
        link: {
          mobileWebUrl: window.location.href, 
          // webUrl: window.location.href
        }
      },
      buttons: [
        {
          title: "테스트하러 가보기",
          link: {
            mobileWebUrl: window.location.href,
            // webUrl: window.location.href
          }
        }
      ]
    });
  }
  
  

  function urlClip(){
    navigator.clipboard.writeText(window.location.href);
    alert("주소가 복사되었습니다.")
  }


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
            
            <img alt="weather" className="weather-icon" src={`${process.env.PUBLIC_URL}/images/${resultCon.mbti.toLowerCase()}.png`} />
            <img alt="weather" className="weather-icon" src={`${process.env.PUBLIC_URL}/images/${resultCon.mbti.toLowerCase()}.png`} />
  
          </div>

          <div className='__left'>
            {resultCon.mbti}
            <div className='__mobilebtns'>
              <button className='noborder'><img alt="weather" className="weather-icon" src={`${process.env.PUBLIC_URL}/kakao.png`} onClick={()=>shareKakao()}/></button>
              <button className='noborder' onClick={()=>urlClip()}><img alt="weather" className="weather-icon" src={`${process.env.PUBLIC_URL}/link.png`} /></button>
            </div>
          </div>
          <div className='__right'>
            <div className='__description'>
            {resultCon.content}
            </div>
            <div className='__btns'>
              <button className='noborder'><img alt="weather" className="weather-icon" src={`${process.env.PUBLIC_URL}/kakao.png`} onClick={()=>shareKakao()}/></button>
              <button className='noborder' onClick={()=>urlClip()}><img alt="weather" className="weather-icon" src={`${process.env.PUBLIC_URL}/link.png`} /></button>
              <button className='retry' onClick={()=>{window.location.reload()}}>다시하기</button>
            </div>
          </div>
        </div>
  

    </div>
  )
}

export default Result;
