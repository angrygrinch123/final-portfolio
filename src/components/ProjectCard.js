import {Box, Card, CardContent, CardMedia, 
        IconButton, Link, Typography, Button} from '@mui/material';

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
    <Card sx={{ display: 'flex', marginTop:'1vw', flexDirection:'row', flexWrap:'wrap', p:'0.8vw'}} elevation={12}>
        <CardContent sx={{height:'15%'}}>
         <Typography color="#A26769" component="div"  variant="subtitle1">
            {project.name}
          </Typography>
          <Typography sx={{fontWeight:'light'}} variant="subtitle2" color="text.secondary" component="div">
              { project.description }
          </Typography>
        </CardContent>
        <CardContent
          component="img"
          sx={{
            height: '55%',
            width: '85%',
            alignSelf:'center'
          }}
          alt={`${project.alt}` }
          src={ require( `../${project.thumbnail}`) }
        />
        <CardContent sx={{width:'100%'}}>
          <Box sx={{display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
            <Box>
              {renderButton(project)}
            </Box>
            <Box>
            <Button size="small" 
                    style={{color:"#A26769"}}
                    onClick={handleClick}
            > 
              See More
            </Button>
            </Box>
          </Box>
        </CardContent>
    </Card>

 

  );
}
