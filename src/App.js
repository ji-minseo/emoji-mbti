import { useEffect, useState } from 'react';
import '../src/scss/Style.scss'
import {useMbtiListStore, useQuestionStore } from './Store';


function App() {
  const [page, setPage] = useState(0);
  const {mbtiList, setMbtiList} = useMbtiListStore();
  const {questionList} = useQuestionStore();

function handleCkAnswer(type, index){
  let ls = mbtiList;
  ls.map((li,idx)=>{li.name === type && li.count++;})

  setMbtiList(ls);
  setPage(page + 1);    
} 

console.log(questionList)


	return (
    page === 0
    ?
		<div className="section section-main">
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

			<div className='btn' onClick={()=>{setPage(1)}}>✨시작하기 ➧</div>
		</div>
    :
    <div className="section section-main">
      <div className='header'>

        <div className='inner'>
          <div className='__left'>이모지 스티커팩 성격 테스트</div>
          <div className='__right'>나의 성격 유형에 맞는 이모지 스티커팩은 무엇일까?</div>
        </div>
        </div>

        <div className='section-question'>                      
            {
              questionList.map((li, idx)=>
                page == idx + 1 &&
                <>
                  <div className='title-wrap'>
                    <div className='number'>Q{page}.</div>
                    <div className='txt'>{li.q[0]}</div>
                  </div>   
                  {console.log(mbtiList)}
                  <div className='button-wrap'>
                    {
                      li.a.map((el,index)=>
                        <button onClick={()=>handleCkAnswer(el.type, idx)} >{el.text}</button>
                      )
                    }
                  </div>    
                </>       
              )
            }
            
          
        </div>

    </div>
  )
}

export default App;
