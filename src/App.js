
import './App.css';
import { ButtonArea } from './components/ButtonArea';
import { Display } from './components/Display';

function App() {
  return (
    <div className="App">
      <div class="wrapper">
        <Display></Display>
        {/* <!-- correct way is to give different div to input and all the buttons --> */}
       <ButtonArea></ButtonArea>
      </div>
    </div>
  );
}

export default App;
