import '../src/scss/Style.scss'
import { Fragment, useEffect, useState } from 'react';
import  useMbtiStore  from './Store';


export default function Test(){
  const {page, setPage, mbtiList, setMbtiList, questionList} = useMbtiStore();

  function handleCkAnswer(type, index){
    let ls = mbtiList;
    ls.map((li,idx)=>{li.name === type && li.count++;})
  
    setMbtiList(ls);
    setPage(page + 1);    
  } 

  return <div className="section section-main">
      <div className='header'>

        <div className='inner'>
          <div className='__left'>이모지 스티커팩 성격 테스트</div>
          <div className='__right'>나의 성격 유형에 맞는 이모지 스티커팩은 무엇일까?</div>
        </div>
        </div>

        <div className='section-question'>           
            {
              questionList?.map((li, idx)=>{
                { return page == idx + 1 &&
                <Fragment key={idx}>
                  <div className='title-wrap'>
                    <div className='number'>Q{page}.</div>
                    <div className='txt'>{li.q[0]}</div>
                  </div>   
                  <div className='button-wrap'>
                    {
                      li.a.map((el,index)=>
                        {return <button key={index} onClick={()=>handleCkAnswer(el.type, idx)} >{el.text}</button>}
                      )
                    }
                  </div>    
                </Fragment> }
              }
                      
              )
            }
            
          
        </div>
    </div>
}

