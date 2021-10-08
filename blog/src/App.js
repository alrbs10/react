/*eslint-disable */
//노랑 워닝 안뜨게 하는 것

import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import react from 'react';

function App() {
  let [modal, modalChange] = useState(0);{/*스위치*/}
  let [글제목, 글제목변경] = useState(["HTML이란?", 'CSS란?','JS란?','REACT란?']); //state는 변경되어도 새로고침되지 않음. 재렌더링됨.
  let [날짜, 날짜변경] = useState(["9월 1일 발행","9월 8일 발행","9월 15일 발행","9월 22일 발행"]);
  let [따봉, 따봉변경] = useState([0,0,0,0]);
  let [누른제목, 누른제목변경] = useState(0);
  let [입력값, 입력값변경] = useState('');

  function 따봉바꾸기(a){
    var goodArray = [...따봉];
    goodArray[a]+=1;
    따봉변경(goodArray);
  }
  function 싹다변경(a){
    누른제목변경(a);
    modalChange(modal+1);
  }
  return (
    <div className="App">
       <div className="black-nav">
         <div> 개발 Blog</div>
       </div>
       {
         글제목.map(function(글, i){
           return (
             <div className="list" key={i}>
          <h3 onClick={()=>{싹다변경(i)}}>{ 글 }<span onClick={ ()=>{따봉바꾸기(i)} }>👍</span> {따봉[i]}</h3>
          <p>{날짜[i]}</p>
          <hr/>
         </div>
          )
        })
      }
      
      {/* <button onClick={()=>{modalChange(modal+1)}}>버튼</button> */}
      
      {
        modal%2===1 
        ? <Modal 글제목={글제목} 누른제목={누른제목} 날짜={날짜}></Modal> 
        : null
      }
      {/* 삼항연산자: {조건식 ? 참일 경우 실행되는 코드 : 거짓일 경우 실행되는 코드} */}
      <div className="publish">
        <input onChange={ (e) => {입력값변경(e.target.value)}} />
        <button onClick={()=>{
          let 새로운글제목 = [...글제목];
          새로운글제목.unshift(입력값);
          글제목변경(새로운글제목)
        }} >저장</button>
      </div>
    </div>
  );
}
{/* component: html 줄이는 방법 
유의사항: 1. 이름은 대괄호
        2. return()안에 있는 건 태그 하나로 묶여있어야 함.(fragment: <> </>로 div 대체 가능)
        3. functiona app도 하나의 컴포먼트, 새로 만드는 컴포먼트들은 app과 같은 위치에 놓기( 수평적인 관계 ).
        4. 컴포먼트로 만들면 좋은 것: list처럼 반복되는 div class들. 자주 바뀌는 UI

        5. 단, 너무 많이 만들면 state 쓸 때 복잡해짐. function 밖으로 나가게 되기 때문에 다시 가져다가 쓸 수 있음. ex. Modal에 글제목[0]이런 식으로 써줄 수 있음. props라는 문법을 이해해서 써야함.
*/}
function Modal(props){
  return(
    <div className="modal">
      <h2 >{props.글제목[props.누른제목]}</h2>
      <p> {props.날짜[props.누른제목]} </p>
      <p>상세 내용</p>
    </div>
  )
}
//props: 부모 컴퍼먼트의 state를 자식에게 전달하는 법. 부모 컴포넌트 안에 들어가이있는 태그에 name = {state} 이런식으로 작성
//자식컴포넌트에서 props 파라미터 입력하면 거기에 정보 다 담기게 됨.
//오브젝트 형식으로 props.state~ 이런식으로 씀


//옛날문법
class Profile extends React.Component{
  constructor(){
    super();
    this.state = { name : "kim", age: 30}
  }
  changeName(){
    this.setState({name: "Park"})  //usestate의 변경함수와 비슷, 그러나 얘는 하나만 대체 가능
  }
  render(){
    return(
      <div>
        <h3> 프로필입니다.</h3>
        <p>저는 {this.state.name}입니다.</p>
        <button onClick = {this.changeName.bind(this)}>이름 바꾸기</button>
        </div>
    )
  }
}
export default App;
