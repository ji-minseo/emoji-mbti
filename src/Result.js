import { useState } from 'react';
import '../src/scss/Style.scss'


function App() {

  const questionList = [
    // I - E
    {q:['처음 보는 사람과 스몰토크 하는 것은'],
    a:[{type : 'I', text : '나의 관심분야가 비슷한 사람들과만 가능하다.'},
      {type : 'E', text : ' 거의 대부분의 사람들과 가능하다. '}]
    },
    {q:['나는 다른 사람들이'],
    a:[{type : 'I', text : '시간이 좀 지나야 알 수 있는 사람이다.'},
      {type : 'E', text : ' 쉽게 알 수 있는 사람이다. '}]
    },
    {q:['놀고 집에 가는 길! 나와 같은 방향인 친구가 있다면?'],
    a:[{type : 'I', text : '혼자 가고 싶었는데ㅠ 어쩔 수 없지 뭐'},
      {type : 'E', text : ' 이런 우연이, 가는 길 덜 심심하겠다! '}]
    },

    // S - N
    {q:['음악을 들을 때 나는?'],
    a:[{type : 'S', text : '멜로디가 좋으면 일단 재생목록에 저장한다.'},
      {type : 'N', text : '가사를 들어보고 마음에 안 들면 넘긴다.'}]
    },
    {q:['나에게 죽음이란?'],
    a:[{type : 'S', text : '딱히 생각해보지 않았다. 나이가 들면 죽는거지!'},
      {type : 'N', text : '다른 것으로 환생하거나 천국에 가지 않을까?'}]
    },
    {q:['내가 더 자신있는 글쓰기는?'],
    a:[{type : 'S', text : '보고서나 계획서'},
      {type : 'N', text : '소설이나 시같은 문학'}]
    },

    // T - F
    {q:[' 나는 친구의 고민을 들어줄때'],
    a:[{type : 'T', text : '최대한 해결하려고 한다.'},
      {type : 'F', text : '최대한 들어주려고 한다.'}]
    },
    {q:['나는'],
    a:[{type : 'T', text : '감정보다 이성을 더 내세우는 편이다.'},
      {type : 'F', text : '이성보다 감정을 더 내세우는 편이다.'}]
    },
    {q:['나에게 있어 더 나은 칭찬은'],
    a:[{type : 'T', text : '능력 있는 사람이라고 불리는 것이다.'},
      {type : 'F', text : '따뜻하고 친절한 사람이라고 불리는 것이다.'}]
    },

    // P - J
    {q:['나는 대체로'],
    a:[{type : 'P', text : '그날의 상황에 따라 일을 처리하는 편이다.'},
      {type : 'J', text : '정해진 계획에 따라 일을 처리하는 편이다.'}]
    },
    {q:['나는 계획에 따라 생활하는 것이'],
    a:[{type : 'P', text : '때로 필요하다고 생각하지만 별로 선호하지 않는 편이다.'},
      {type : 'J', text : '도움이 되기 때문에 대부분의 경우 선호하는 편이다.'}]
    },
    {q:['일주일 안에 마무리 지어야 할 큰 일을 시작할 때, 나는'],
    a:[{type : 'P', text : '바로 뛰어들어 일부터 시작한다.'},
      {type : 'J', text : '시간을 내어 일의 목록과 처리 순서를 먼저 정한다.'}]
    },


    {q:['당신의 MBTI는'],
    a:[{type : '', text : '테스트 결과 보러 가기'}]
    }
  ]

  const [mbtiList, setMbtiList] = useState([
    {name : 'I', count :0},{name : 'E', count :0},{name : 'S', count :0},{name : 'N', count :0},
    {name : 'T', count :0},{name : 'F', count :0},{name : 'P', count :0},{name : 'J', count :0},
  ])


	return (
    // page === 0
    // ?
		// <div className="section section-main">
		// 	<div className='header'>

		// 		<div className='inner'>
		// 			<div className='__left'>이모지 스티커팩 성격 테스트</div>
		// 			<div className='__right'>나의 성격 유형에 맞는 이모지 스티커팩은 무엇일까?</div>
		// 		</div>
		// 	</div>
		// 	<div className='emojis'>
					
		// 			<img alt="weather" className="weather-icon" src={`${process.env.PUBLIC_URL}/11.png`} />
		// 			<img alt="weather" className="weather-icon" src={`${process.env.PUBLIC_URL}/22.png`} />
		// 			<img alt="weather" className="weather-icon" src={`${process.env.PUBLIC_URL}/33.png`} />
		// 	</div>
		// 		<div className='credit'>20240109 jmseo, nhhong</div>

		// 	<div className='btn' onClick={()=>{setPage(1)}}>✨시작하기 ➧</div>
		// </div>
    // :
    <div className="section section-main">
      <div className='header'>

        <div className='inner'>
          <div className='__left'>이모지 스티커팩 성격 테스트</div>
          <div className='__right'>나의 성격 유형에 맞는 이모지 스티커팩은 무엇일까?</div>
        </div>
        </div>
        <div className='emojis'>
            
            <img alt="weather" className="weather-icon" src={`${process.env.PUBLIC_URL}/11.png`} />
            <img alt="weather" className="weather-icon" src={`${process.env.PUBLIC_URL}/11.png`} />
  
          </div>
          
        <div className='section-result'>

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
              <button><img alt="weather" className="weather-icon" src={`${process.env.PUBLIC_URL}/kakao.png`} /></button>
              <button><img alt="weather" className="weather-icon" src={`${process.env.PUBLIC_URL}/link.png`} /></button>
              <button>다시하기</button>
            </div>
          </div>
        </div>
  

    </div>
  )
}

export default App;
