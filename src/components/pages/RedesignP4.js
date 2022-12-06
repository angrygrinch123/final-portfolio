import { Typography, Divider, Container, 
    Box, Card, CardContent, CardMedia,
    Button} from '@mui/material';
import Link from '@mui/material/Link';

import Iframe from 'react-iframe';

import AutoAccordian from '../AutoAccordion.js';
import BoldText from '../BoldText';
import TitleHeader from '../TitleHeader.js';


import project4 from "../../assets/project4.json";
import sushiCat from "../../images/project3/sushiCat.svg";


export default function RedesignP4() {
return (

    <div className="app-container"> 
    <TitleHeader title="Are we Actually Accessible?" isProjectTitle={true}/>
    <div id="description-container">
        <Typography sx={{marginTop:"2vw", marginBottom:'1vw',fontWeight:'light'}} align="left" variant="h5" color="#A26769"> 
        Background and Problem Statement
        </Typography>
        <Typography align="left"  variant="body1" sx={{fontWeight:'light'}} component='div' >
        This was a
        <BoldText txt="redesign project "/> 
        in which I re-designed a pre-existing website, the Brown CS PhD Website for better accessibility and usability. 
        The main focus of the project was to <BoldText txt="change the visual hierarchy and add more alt text for visual accessibility."/> 
    
        <BoldText txt="my personal reflections on the project and summary of feedback."/>

        For a more elaborate exploration of the first iteration, please view: <Link href="https://angrygrinch123.github.io/redesign/" color="#A26769" underline="hover"> 
                {`First Redesign.`} 
            </Link>
        </Typography>
        <Typography sx={{marginTop:"2vw", marginBottom:'1vw',fontWeight:'light'}} align="left" variant="h5" color="#A26769"> 
        First Redesign Iteration
        </Typography>
        <Typography align="left"  variant="body1" sx={{fontWeight:'light'}} component='div' >
        I have provided an following embedding for quick access. For more detailed introspection, please go to the actual project link. 
        </Typography>
        <p></p>
        
        <Iframe url="https://angrygrinch123.github.io/redesign/"
        width="100%"
        height="300rem"
        id=""
        className=""
        display="block"
        position="relative"/>
        <Typography align="right"  variant="body1" sx={{fontWeight:'light', marginTop:'1vw'}} component='div' >
            <Link href="https://angrygrinch123.github.io/redesign/" target="_" color="#A26769" underline="hover" > 
            First Redesign Iteration
            </Link>
        </Typography>
        <Typography sx={{marginTop:"2vw", marginBottom:'1vw',fontWeight:'light'}} align="left" variant="h5" color="#A26769"> 
        Design Feedback
        </Typography>
        <Typography align="left"  variant="body1" sx={{fontWeight:'light'}} component='div' >
        This is a selection of summaries from UX Factor. The main feedback was that the visual flow needs to be enhanced, 
        particularly in the forms of 
        contrast and centric views. 
        </Typography>
        
        <AutoAccordian content={project4.content}/>

        <Card sx={{  display:'flex', alignItems:'center',
				flexDirection:'row', flexWrap:'wrap', justifyContent:'space-evenly'}} elevation={0}>
      <CardContent
        component="img"
		sx={{
            height: '20rem',
            width: '20rem',
			selfAlign:'center'
          }}
		src={ sushiCat }
        alt=""
      />
      <CardContent 	
	  	  sx={{
            width: '40rem',
          }}>
        <Typography display="inline"  variant="body2" sx={{fontWeight:'light'}}>
          This is an example of the virtual sushi cat we made. The sushi masks the user's negative keywords and "eats" the sushi, or the user's negative thoughts. 
        </Typography>
      </CardContent>
    </Card>

        <Typography sx={{marginTop:"2vw", marginBottom:'1vw',fontWeight:'light'}} align="left" variant="h5" color="#A26769"> 
        Lessons Learned
        </Typography>
        <Typography align="left"  variant="body1" sx={{fontWeight:'light'}} component='div' >
            From this experience I learned the importance of 
            <BoldText txt="continuity in narrative."/> 
        </Typography>
    </div>
  </div>
  
   
)
}