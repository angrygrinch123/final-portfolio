import { Typography } from '@mui/material';
import Link from '@mui/material/Link';

import TitleHeader from './TitleHeader.js';
import SleepRegularity from './pages/SleepRegularity.js';
import Project1 from './pages/Project1.js';

export default function ProjectPage({project}) {
  function renderPage(project){
    if (project.path === "sleepRegularity"){
      return <SleepRegularity/>
    }
    if (project.path ==="Project1"){
      return <Project1/>
    }
  }

  return (
   
      <div className="app-container"> 
        <TitleHeader title={project.name} isProjectTitle={true}/>
        {renderPage(project)}
      </div>
  );
}