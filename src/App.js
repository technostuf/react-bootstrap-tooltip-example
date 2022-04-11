import './App.css';
import TooltipComponent from './TooltipComponent';
import TooltipHoverComponent from './TooltipHoverComponent';
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <div className="App">
      <div className='row'>
        <h1>React bootstrap Tooltip example - technostuf.com</h1>
        <div className='col-md-3'>
          <TooltipComponent />
        </div>
        <div className='col-md-3'>
          <TooltipHoverComponent />
        </div>
      </div>
    </div>
  );
}

export default App;
