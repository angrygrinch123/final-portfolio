import { Typography, Divider, Container, 
    Box, Card, CardContent, CardMedia,
    Button} from '@mui/material';
import Link from '@mui/material/Link';

import Iframe from 'react-iframe';

import AutoAccordian from '../AutoAccordion.js';
import BoldText from '../BoldText';

import project4 from "../../assets/project4.json";
import sushiCat from "../../images/project3/sushiCat.svg";

export default function Project4() {
return (
    <div id="description-container">
        <Typography sx={{marginTop:"2vw", marginBottom:'1vw',fontWeight:'light'}} align="left" variant="h5" color="#A26769"> 
        Background and Problem Statement
        </Typography>
        <Typography align="left"  variant="body1" sx={{fontWeight:'light'}} component='div' >
        This was a
        <BoldText txt="redesign project "/> 
        in which I re-designed a pre-existing website, the Brown CS PhD Website for better accessibility and usability. 
        The main focus of the project was to <BoldText txt="change the visual hierarchy and add more alt text for visual accessibility."/> 
        However, many of the feedback from my peers seemed to not find these design considerations clear. So the following
        is a more <BoldText txt="enhanced narrative"/> of the first iteration of this project with
        <BoldText txt="my personal reflections on the project and summary of feedback."/>

        For a more elaborate exploration of the first iteration, please view: <Link href="https://angrygrinch123.github.io/redesign/" color="#53599A" underline="hover"> 
                {`First Redesign.`} 
            </Link>
        </Typography>
   
        <Typography sx={{marginTop:"2vw", marginBottom:'1vw',fontWeight:'light'}} align="left" variant="h5" color="#A26769"> 
        First Redesign Iteration
        </Typography>
        <Typography align="left"  variant="body1" sx={{fontWeight:'light'}} component='div' >
        The following are the first iterations of the narrative and website design of this project. 
        I have provided an following embeddings for quick access. For more detailed introspection, please go to the actual project links. 
        </Typography>
        <p></p>
        
        <Typography align="left"  variant="h6" sx={{fontWeight:'light', marginTop:'3vw'}} component='div' >
        Narrative Redesign [First Iteration] -    <Link href="https://angrygrinch123.github.io/redesign/" target="_" color="#335145" underline="hover" > 
            Link
            </Link>
        </Typography>
        <Iframe url="https://angrygrinch123.github.io/redesign/"
        width="100%"
        height="300rem"
        id=""
        className=""
        display="block"
        position="relative"/>
 

        <Typography align="left"  variant="h6" sx={{fontWeight:'light', marginTop:'3vw'}} component='div' >
         Website Redesign [First Iteration] -         <Link href="https://angrygrinch123.github.io/redesign/redesigned.html" target="_" color="#53599A" underline="hover" > 
            Link
            </Link>
        </Typography>
        <Iframe url="https://angrygrinch123.github.io/redesign/redesigned.html"
        width="100%"
        height="300rem"
        id=""
        className=""
        display="block"
        position="relative"/>
    

        <Typography sx={{marginTop:"5vw", marginBottom:'1vw',fontWeight:'light'}} align="left" variant="h5" color="#A26769"> 
        Design Feedback
        </Typography>
        <Typography align="left"  variant="body1" sx={{fontWeight:'light'}} component='div' >
        This is a selection of summaries from UX Factor, a peer-assessment tool of portfolios. The main feedback was that the visual flow needs to be enhanced, 
        particularly in the forms of 
        contrast and centric views. 
        </Typography>
        
        <AutoAccordian content={project4.content}/>

        <Typography sx={{marginTop:"5vw", marginBottom:'1vw',fontWeight:'light'}} align="left" variant="h5" color="#A26769"> 
        Second Redesign Iteration
        </Typography>
        <Typography align="left"  variant="h6" sx={{fontWeight:'light', marginTop:'1vw'}} component='div' >
        Narrative Redesign [ Second Iteration ] -    <Link href="https://angrygrinch123.github.io/redesign/index2.html" target="_" color="#53599A" underline="hover" > 
            Link
            </Link>
        </Typography>

        <Typography align="left"  variant="body1" sx={{fontWeight:'light'}} component='div' >
        The main changes I made, following the feedback was the 
        <BoldText txt="(1) addition of margins, (2) enhanced contrast with removal of colors, (3) enhanced narrative, and (4) masked images."/>
            I included more detail into the project and the reasoning behind the design choices. I made the visual hierarchy of the narrative websiteclearer
            just by masking unnecessary content (i.e. use of accordions) and choosing fewer colors.
        </Typography>

        <Iframe url="https://angrygrinch123.github.io/redesign/index2.html"
        width="100%"
        height="300rem"
        id=""
        className=""
        display="block"
        position="relative"/>
 
        <Typography align="left"  variant="h6" sx={{fontWeight:'light', marginTop:'3vw'}} component='div' >
        Website Redesign [Second Iteration] -    <Link href="https://angrygrinch123.github.io/redesign/redesign2.html" target="_" color="#53599A" underline="hover" > 
            Link
            </Link>
        </Typography>
        <Typography align="left"  variant="body1" sx={{fontWeight:'light'}} component='div' >
        The main changes I made, following the feedback was the 
        <BoldText txt="(1) addition of margins, (2) better flex boxes at the bottom, (3) enhanced contrast."/>
        As my embedding shows, I replaced the bottom flex boxes with an accordion for better visual hierarchy,
        I removed all the muted text for better visual contrast,
        and I added margins for a more central view-flow. 
        I have provided an following embedding for quick access and comparison. For more detailed introspection, please go to the actual project link. 
        </Typography>
        <p></p>
        
        <Iframe url="https://angrygrinch123.github.io/redesign/redesign2.html"
        width="100%"
        height="300rem"
        id=""
        className=""
        display="block"
        position="relative"/>
    

        <Typography sx={{marginTop:"2vw", marginBottom:'1vw',fontWeight:'light'}} align="left" variant="h5" color="#A26769"> 
        Lessons Learned
        </Typography>
        <Typography align="left"  variant="body1" sx={{fontWeight:'light'}} component='div' >
            From this experience I learned the importance of 
            <BoldText txt="continuity in narrative."/> To keep the readers engaged it's important to explicitly point out 
            what the changes are and the scope of the project. For future work,
            I believe the websites embedded images could be enhanced and a visual mark-up of the design 
            changes could be more accentuated. I also learned that a 
            <BoldText txt="a huge part of visual accessibility is the contrast"/> and not just the 
            choice of colors. 
        </Typography>
    </div>
)
}