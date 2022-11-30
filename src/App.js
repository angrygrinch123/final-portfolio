import logo from './logo.svg';
import './App.css';

import TitleHeader from "./components/TitleHeader.js";
import AboutMe from './components/AboutMe.js'

import Divider from '@mui/material/Divider';

function App() {
  return (
    <div className="App">

      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />

      <div id="app-container"> 
        <TitleHeader/>
        <Divider variant="left"/>  

        <AboutMe/>
 
      </div>



    </div>
  );
}

export default App;
