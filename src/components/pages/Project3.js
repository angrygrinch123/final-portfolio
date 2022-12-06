import { Typography, Divider, Container, 
    Box, Card, CardContent, CardMedia,
    Button} from '@mui/material';
import Link from '@mui/material/Link';

import Iframe from 'react-iframe';

import AutoAccordian from '../AutoAccordion.js';
import BoldText from '../BoldText';

import project3 from "../../assets/project3.json";
import sushiCat from "../../images/project3/sushiCat.svg";

export default function Project3() {
return (
    <div id="description-container">
        <Typography sx={{marginTop:"2vw", marginBottom:'1vw',fontWeight:'light'}} align="left" variant="h5" color="#A26769"> 
        Background and Problem Statement
        </Typography>
        <Typography align="left"  variant="body1" sx={{fontWeight:'light'}} component='div' >
        This was a
        <BoldText txt="collaborative, iterative design project "/> 
        in which we re-designed a pre-existing startup's mental health app to become more interactive to 
        increase engagement and provide a diverse set of alternatives for mental health. 
        Because this was an external group project, the details and design project are in an external website. This page contains 
        <BoldText txt="my personal reflections on the project and summary of feedback."/>

        For a more elaborate exploration, please view: <Link href="https://sleepypinks.github.io/koko" color="#A26769" underline="hover"> 
                {`Iterative Re-design of Koko <3`} 
            </Link>
        </Typography>
        <Typography sx={{marginTop:"2vw", marginBottom:'1vw',fontWeight:'light'}} align="left" variant="h5" color="#A26769"> 
        Redesign of Koko
        </Typography>
        <Typography align="left"  variant="body1" sx={{fontWeight:'light'}} component='div' >
        I have provided an following embedding for quick access. For more detailed introspection, please go to the actual project link. 
        </Typography>
        <p></p>
        
        <Iframe url="https://sleepypinks.github.io/koko"
        width="100%"
        height="300rem"
        id=""
        className=""
        display="block"
        position="relative"/>
        <Typography align="right"  variant="body1" sx={{fontWeight:'light', marginTop:'1vw'}} component='div' >
            <Link href="https://sleepypinks.github.io/koko" target="_" color="#A26769" underline="hover" > 
                Iterative Re-design of Koko {`<3`}
            </Link>
        </Typography>
        <Typography sx={{marginTop:"2vw", marginBottom:'1vw',fontWeight:'light'}} align="left" variant="h5" color="#A26769"> 
        Design Feedback
        </Typography>
        <Typography align="left"  variant="body1" sx={{fontWeight:'light'}} component='div' >
        This is a selection of summaries from UX Factor and the co-founder of the startup that should be considered for future design iterations of the project.
        There seems to be a more in-depth design process required for some of the features made and better visual clarity for
        the figma embeddings of the lo-fi prototypes. I have also included a segment of the sushi cat, the virtual pet we designed, because this feature
        had the most contention. 
        </Typography>
        
        <AutoAccordian content={project3.content}/>

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
            From this experience and conversations with the co-founder of Koko, 
            I was able to learn that <BoldText txt="virtual pets may be a good way to increase retention and engagement non-invasively."/>
            I was also surprised to learn that a lot of apps get spread through word-of-mouth and that this method often creates a strong
            customer base. It seems that there needs to be more research and prototype development on the efficacy of 
            virtual pets. While many have been suggested, it seems <BoldText txt="difficult to create a scalable virtual pet that is also personable"/>
        </Typography>

    </div>
)
}