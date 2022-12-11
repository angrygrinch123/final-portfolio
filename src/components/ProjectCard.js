import {Box, Card, CardContent, CardMedia, 
        IconButton, Link, Typography, Button, Divider,
      } from '@mui/material';

import { useNavigate } from "react-router-dom";

import { BrowserRouter, Router, Route, Routes } from 'react-router-dom';


import GitHubIcon from '@mui/icons-material/GitHub';

export default function ProjectCard({project}) {
  function renderButton(project){
    if(project.github){
      return <Button size="small" 
                    style={{color:"#A26769"}}
             > 
                <GitHubIcon/>
             </Button>;

    }
  }

 const navigate = useNavigate();

 const handleClick = () => {
  const projectPath = project.path;
    navigate("/" + projectPath);
  };


  return (
    <Card sx={{  display:'flex', alignItems:'center',
    flexDirection:'row', flexWrap:'wrap', justifyContent:'space-evenly',
    "&:hover": {
      border: "1px solid #A26769",
      cursor: 'pointer'
    },
    
    }} elevation={3} onClick={handleClick}>
  <CardContent
    component="img"
sx={{
        height: '30%',
        width: '30%',
  selfAlign:'center'
      }}
      alt={`${project.alt}` }
          src={ require( `../${project.thumbnail}`) }
  />
  
  <CardContent 	
    sx={{
        width: '60%',
      }}>
    <Typography gutterBottom variant="h6" sx={{fontWeight:'light'}}  color="#A26769"  component="div">
      {project.name}
    </Typography>
    <Typography variant="body2" sx={{fontWeight:'light'}}>
    { project.description }
    </Typography>
     <Button size="small" 
                    style={{color:"#A26769", marginTop:'2vw', padding:'0'}}
                    onClick={handleClick}>See More
    </Button>
  </CardContent>
</Card>
  );
}
