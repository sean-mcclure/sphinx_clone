import './App.css';

import LogoSearch from "./LogoSearch";
import TOC from "./TOC";

function App() {
  return (
    <div className="wrapper">
        <div className="item">
            <LogoSearch/>
        </div>
        <div className="item">
            <TOC/>
        </div>
        <div className="item"></div>
    </div>
  );
}

export default App;
