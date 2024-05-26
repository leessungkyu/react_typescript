//리액트 기반 컴포넌트는 .tsx로 생성
// .ts 사용불가 (jsx문법 사용 불가)

import { useState } from "react"

//JSX.Element는 자동지정으로 생략가능
export default function Profile(props : {name: string, age:string}) : JSX.Element {
  // state는 일반적으로 타입을 명시 x(자동적용)
  let [mystate, setMystate] = useState(0);
  return (
    <>
      <p>{props.name} , {props.age}살 입니다. </p>
    </>
  )
}