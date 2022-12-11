import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';

import ProjectCard from './ProjectCard.js';

import pageData from "../assets/pageData.json";

export default function ProjectList() {
  return (
    <div id="project-list-container">
      <Typography sx={{marginTop:'5vw'}}  align="left" color="#A26769" variant="h5">
        Projects
      </Typography>

      <Box sx={
        {
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          '& > :not(style)': {
          marginBottom:'2vw',
          alignItems: 'center',
          width:'100%',
          marginTop:'2vw',
          overflow:'auto',
        }}}>
       { pageData.projects.map (( project, index ) =>
          <ProjectCard key={index} project={project}/>
        )}
 
      </Box>
    </div>
  );
}




