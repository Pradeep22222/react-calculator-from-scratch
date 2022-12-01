
import { useState } from 'react';
import './App.css';
import { ButtonArea } from './components/ButtonArea';
import { Display } from './components/Display';

function App() {
  const [str, setStr] = useState("");
  const onClick = (value) => {
    setStr(str + value);
  }
  console.log(str);
  return (
    <div className="App">
      <div className="wrapper">
        <Display str={str}></Display>
        {/* <!-- correct way is to give different div to input and all the buttons --> */}
       <ButtonArea onClick={onClick}></ButtonArea>
      </div>
    </div>
  );
}

export default App;
