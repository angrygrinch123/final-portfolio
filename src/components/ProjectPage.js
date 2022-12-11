import { Typography } from '@mui/material';
import Link from '@mui/material/Link';

import TitleHeader from './TitleHeader.js';
import Project1 from './pages/Project1.js';
import Project2 from './pages/Project2.js';
import Project3 from './pages/Project3.js';
import Project4 from './pages/Project4.js';


export default function ProjectPage({project}) {
  function renderPage(project){
    if (project.path ==="Project1"){
      
      return <Project1/>
    }
    if (project.path ==="Project2"){
      return <Project2/>
    }

    if (project.path ==="Project3"){
  

    const win = window.open("https://sleepypinks.github.io/koko", '_');
      return <Project3/>
    }

    if (project.path ==="Project4"){
      return <Project4/>
    }
  }

  return (
   
      <div className="app-container"> 
        <TitleHeader title={project.name} isProjectTitle={true}/>
        {renderPage(project)}
      </div>
  );
}