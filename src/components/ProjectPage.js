import { Typography } from '@mui/material';
import Link from '@mui/material/Link';

import TitleHeader from './TitleHeader.js';
import Project1 from './pages/Project1.js';
import Project2 from './pages/Project2.js';

export default function ProjectPage({project}) {
  function renderPage(project){
    if (project.path ==="Project1"){
      return <Project1/>
    }
    if (project.path ==="Project2"){
      return <Project2/>
    }
  }

  return (
   
      <div className="app-container"> 
        <TitleHeader title={project.name} isProjectTitle={true}/>
        {renderPage(project)}
      </div>
  );
}