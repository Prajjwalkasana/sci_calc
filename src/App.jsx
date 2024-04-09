import { useState } from 'react'
import Wrapper from './components/Wrapper'
import Screen from './components/Screen'
import Buttonbox from './components/Buttonbox'
import Button from './components/Button'
import * as math from "mathjs";
import { evaluate } from 'mathjs'


function App() {
  const [exp,setExp] = useState("")
  const [scrn,setScrn] = useState("")
  
  

const numpad =["1","2","3","4","5","6","7","8","9","0"]
const operators = ["+","-","*","/","^","sqrt(","sin(","cos(","tan(","cbrt(","asin(","acos(","atan(","",""]

function calculate(){
  try{

    const result = evaluate(exp)
    if(typeof result==="number" && !isNaN(result)){
      setScrn(Number(result))
    }
    else{
      setScrn("Invalid syntax")
    }
  }
  catch{
    setScrn("INVALID SYNTAX")
  }
}

function onchange(e){
  setExp(e.target.innerHTML)
}

function numclick(e){
let inp = e.target.innerHTML;
setExp((prev)=>prev+inp)
}
function clearScreen(){
  setExp("")
  setScrn("")
}
function back(){
  let newExp = exp.slice(0,-1);
  setExp(newExp)
}
  return (
    <Wrapper>
      <Screen inp={onchange} val={exp} out={scrn}/>
      <Buttonbox>
        <div className="numpad">
        {
          numpad.map((val,i)=>{
            return <Button value={val} key={i} onclick={numclick} class1=""/>
          })
          
        }
        <Button value="." onclick={numclick} class1=""/>
        <Button value="(" onclick={numclick} class1=""/>
        <Button value=")" onclick={numclick} class1=""/>
        <Button value="DEL" onclick={back} class1=""/>
        <Button value="pi" onclick={numclick} class1=""/>
        <Button value="fact(" onclick={numclick} class1=""/>
        <Button value="AC" onclick={clearScreen} class1=""/>
        <Button value="=" onclick={calculate} class1="special"/>
        </div>
        <div className="operator">
        {
          operators.map((val,i)=>{
            return <Button value={val} key={i} onclick={numclick} class1=""/>
          })
        }
        </div>
      </Buttonbox>
    </Wrapper>
  )
}

export default App
