import React from 'react';
import logo from './logo.svg';
import './App.css';
import Profile from './components/Profile/Profile';
import { useSelector, useDispatch } from 'react-redux';
import { Dispatch } from 'redux';
import { RootState, 증가, 감소, 더하기, 초기화 } from '.';

//npm install react-create-app react_typescript --template typescript
//타입스크립트(자바스크립트 + 타입명시)
let name : string;
let age : number;
let isStident : boolean;
let hobbies : string[]; // 문자열 배열
let  role : (string|number)[]; //문자열 또는 숫자배열

type Person = {
  name: string,
  age?: number    // ?추가시 null가능
}

let person : Person = {
  name:'Peter',
  age : 22
}


function App() : JSX.Element {
  let 박스 : JSX.Element = <div>박스</div>
  const 리덕스에서꺼내옴 = useSelector((state:RootState)=>state)
  //const 리덕스에서꺼내옴 = useSelector((state:{count:number})=>state)
  const dispatch : Dispatch = useDispatch()
  //리덕스에서 state/변수 꺼내오려면 useSelcttor 사용
  //dispatch라는 키워드를 통해서 리듀서의 함수를 사용가능
  //리듀서의 함수는 리덕스에 보관된 상태/변수를 수정하기 위해 제공

  return (
    <div className="App">
      <Profile 
        name="홍길동" 
        age="20"
      />
      <p>{리덕스에서꺼내옴.리듀서1.count}</p>
      {/* <p>{리덕스에서꺼내옴.count}</p> */}
      <p>{리덕스에서꺼내옴.리듀서1.user}</p>
      <button onClick={()=>{dispatch(증가())}}>증가</button>
      <button onClick={()=>{dispatch(감소())}}>감소</button>
      <button onClick={()=>{dispatch(더하기(3))}}>더하기</button>
      <button onClick={()=>{dispatch(초기화())}}>초기화</button>
      {/* <button onClick={()=>{dispatch({type:'증가'})}}>버튼</button> */}
    </div>
  );
}

export default App;
