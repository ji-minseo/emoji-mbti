import '../src/scss/Style.scss'
import { Fragment } from 'react';
import  useMbtiStore  from './Store';
import { Link } from 'react-router-dom';


export default function Test(){
  const {page, setPage, mbtiList, setMbtiList, questionList, mbti, setResultCon, resultCon} = useMbtiStore();
  let MBTI;
  // const [resultCon, setResultCon] = useState({});

  function handleCkAnswer(type, index){
    let ls = mbtiList;
    ls.map((li)=> {return li.name === type && li.count++})
  
    setMbtiList(ls);
    setPage(page + 1);    

    if(page+1 === questionList.length-1){
      console.log('실행')
      MBTI =    
          resultHandler('I', 'E') 
        + resultHandler('S', 'N') 
        + resultHandler('T', 'F') 
        + resultHandler('P', 'J');

        setResultCon(Object.keys(mbti).filter((el)=> el===MBTI)[0]);
    }
  }
  
  function resultHandler(txt1, txt2){
    let type;

    mbtiList.find((e)=>{return e.name === txt1}).count 
    > mbtiList.find((e)=>{return e.name === txt2}).count
    ? type = txt1 
    : type= txt2;

    return type;
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
              return page === idx &&
                <Fragment key={idx}>
                  <div className={`title-wrap ${idx+1 >= questionList.length && 'test-end'}`}>
                    <div className='number'>Q{page + 1}.</div>
                    <div className='txt'>{li.q[0]}</div>
                  </div> 
                  <div className='button-wrap'>
                    {
                      li.a.map((el,index)=>
                        {return (
                          idx+1 >= questionList.length
                          ? <Link key={index} to={`/result?mbti=${resultCon?.toLowerCase()}`}>  <button>{el.text}</button></Link>
                          : <button key={index} onClick={()=>handleCkAnswer(el.type, idx)} >{el.text}</button>
                        )}
                      )
                    }
                  </div>    
                </Fragment> }
              
                      
              )
            }
            
          
        </div>
    </div>
}

