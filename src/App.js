import logo from './logo.svg';
import './App.css';



import ProjectPage from './components/ProjectPage.js';
import HomePage from './components/HomePage.js';
import RedesignP4  from './components/pages/RedesignP4.js'; 

import pageData from "./assets/pageData.json"

import { HashRouter, Router, Route, Routes, Link } from 'react-router-dom';


function App() {
  return (
    <div className="App">

      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      <HashRouter>

        <Routes>
          <Route exact path="" element={<HomePage/>}/>
          { pageData.projects.map (( project, index ) =>
            <Route exact  key={index} path={project.path} element={<ProjectPage project={project}/>}/>
          )}
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
