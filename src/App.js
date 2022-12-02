
import { useState } from 'react';
import './App.css';
import { ButtonArea } from './components/ButtonArea';
import { Display } from './components/Display';
const operationCharacter = ["%", "/", "*", "-", "+","."];
function App() {
  const [str, setStr] = useState("");
  const onClick = (value) => {
    if (value === "AC") {
      setStr("")
      return;
    }
    if (value === "C") {
      const tempStr = str.slice(0, -1);
      setStr(tempStr);
      return;

    }
      if (value === "=") {
        const calc=total(str);
        setStr(calc);
        return;
      }
    if (operationCharacter.includes(value)) {
    const lastCharacter = str.slice(-1);
      const stringArray = str.split()
      if (str.includes(".")) {
        if (value === ".") {
          return;
        }
      }
      if (value === lastCharacter) {
        return;
    }
      if (operationCharacter.includes(lastCharacter)) {
       const previousCharacter = str.slice(0, -1);
        setStr(previousCharacter + value);
        return;
      }
      console.log(stringArray)
    }
    setStr(str + value);
  }
  const total = (val) => {
    return eval(val).toString();
  }
  return (
    <div className="App"> ``
      <div className="wrapper">
        <Display str={str}></Display>
        {/* <!-- correct way is to give different div to input and all the buttons --> */}
       <ButtonArea onClick={onClick} ></ButtonArea>
      </div>
    </div>
  );
}

export default App;
