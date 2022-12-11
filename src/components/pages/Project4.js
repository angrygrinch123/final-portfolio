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
        Are we Actually Accessible? 
        </Typography>
        <Typography align="left"  variant="body1" sx={{fontWeight:'light'}} component='div' >
     
        Despite being the face of Brown's CS program, the <Link href="https://cs.brown.edu/degrees/doctoral/" color="#53599A" underline="hover"> 
                {`Brown CS PhD Program`} 
            </Link> has an unintiutive, 
        inaccessible design that makes it hard for prospective applicants and current 
        PhD students find information relevant to the program. Many students complain that they cannot find course requirement information
        and information on the program upon applying and while in the program. 
        This was a
        <BoldText txt="redesign project "/> 
        in which I re-designed a pre-existing website, the Brown CS PhD Website for better accessibility and usability. 
        The main focus of the project was to <BoldText txt="change the visual hierarchy and add more alt text for visual accessibility."/> 
       
        </Typography>
           
        <Typography sx={{marginTop:"5vw", marginBottom:'1vw',fontWeight:'light'}} align="left" variant="h5" color="#A26769"> 
        Key Issues
        </Typography>

        <Typography align="left"  variant="body1" sx={{fontWeight:'light'}} component='div' >
        From my personal experience and recounts from other students, 
        the main issues of the current website come from the lack of visual hierachy, lack of alt text, and poor visual contrast. 
        It was not clear who the website was made for because all the content is concatenated on one page. 
        There needs to be a better segregation of the page based on user type - 
        Current PhD Students vs Prospective Students would want different kinds of information.
        </Typography>

        <Card sx={{  display:'flex', alignItems:'center',
				flexDirection:'row', flexWrap:'wrap', justifyContent:'space-evenly'}} elevation={0}>
				<CardContent
				component="img"
				sx={{
					height: '10%',
					width: '90%',
					selfAlign:'center'
				}}
				src={require( `../../images/project4/designIssues.png` )}
				alt="Mark up of problems with the CS website"
			/>
        </Card>

        <AutoAccordian content ={project4.keyIssues}/>

        <Typography sx={{marginTop:"5vw", marginBottom:'1vw',fontWeight:'light'}} align="left" variant="h5" color="#A26769"> 
        WAVE Findings
        </Typography>


        <Typography align="left"  variant="body1" sx={{fontWeight:'light'}} component='div' >
        WAVE is a web accessibility evaluation tool that provides feedback on lacking accessibility in a website.
        It notes errors such as contrast information and highlights which parts of the website are problematic. 
        The following are accessiblity issues that 
        <Link href="https://wave.webaim.org/report#/https://cs.brown.edu/degrees/doctoral/" target="_" color="#53599A" underline="hover" > WAVE Found on Brown's CS PhD Website.
        </Link>

        </Typography>

        <AutoAccordian content ={project4.waveFindings}/>

        <Typography sx={{marginTop:"5vw", marginBottom:'1vw',fontWeight:'light'}} align="left" variant="h5" color="#A26769"> 
        Lo-Fi Design
        </Typography>

        <Typography align="left"  variant="body1" sx={{fontWeight:'light'}} component='div' >
        Based on these findings, I decided to focus on creating a 
        <BoldText txt="(1) Change of Hierarchy, (2) Addition of Alt Text, (3) and Visual Contrast"/> so that the website
        could improve <BoldText txt="usability and accessibility."/> 

        The following are low fidelity redesigns accessible for websites, smartphones, and tablets. 
        The new wireframes <BoldText txt="reduce visual overload"/> by removing multiple navbars, 
        <BoldText txt="centralizes the layout alignment"/> into one central flow, 
        adds better <BoldText txt="support for users with visual impairments"/>
         with added contrast and alt texts, and 
         <BoldText txt="increases efficiency"/> by segregating content with a hierarchical model by users.
        </Typography>

    
    <Card sx={{ marginTop: '2vw', display:'flex', alignItems:'center',
				flexDirection:'row', flexWrap:'wrap', justifyContent:'space-between'}} elevation={0}>
            <CardContent 	
	  	  sx={{
            width: '30%',
          }}>
        <Typography gutterBottom variant="h6" sx={{fontWeight:'light', marginTop:'2vw'}}  color="#7D5C65"  component="div">
          Website Lo-fi Design
        </Typography>
        <Typography display="inline"  variant="body2" sx={{fontWeight:'light'}}>
			Unified Navigation, Centralized View, Contrasted Text and Hyperlinks
        </Typography>
      </CardContent>
      <CardContent
        component="img"
		sx={{
            height: '20%',
            width: '60%',
			selfAlign:'center'
          }}
		src={require( `../../images/project4/website_lofi.png` )}
        alt="Low fidelity mockup of website with critiques"
      />
    </Card>

    <Divider/>
    <Card sx={{ marginTop: '2vw', display:'flex', alignItems:'center',
				flexDirection:'row', flexWrap:'wrap', justifyContent:'space-between'}} elevation={0}>
         
      <CardContent
        component="img"
		sx={{
            height: '10%',
            width: '40%',
			selfAlign:'center'
          }}
		src={require( `../../images/project4/phone_lofi.png` )}
        alt="Low fidelity mockup of phone with critiques"
      />
         <CardContent 	
	  	  sx={{
            width: '30%',
          }}>
        <Typography gutterBottom variant="h6" sx={{fontWeight:'light', marginTop:'2vw'}}  color="#7D5C65"  component="div">
          Phone Lo-fi Design
        </Typography>
        <Typography display="inline"  variant="body2" sx={{fontWeight:'light'}}>
			Compact Navigation, Flexbox Dynamic Alignment
        </Typography>
      </CardContent>
    </Card>

    <Divider/>
    <Card sx={{ marginTop: '2vw', display:'flex', alignItems:'center',
				flexDirection:'row', flexWrap:'wrap', justifyContent:'space-between'}} elevation={0}>
                  <CardContent 	
	  	  sx={{
            width: '30%',
          }}>
        <Typography gutterBottom variant="h6" sx={{fontWeight:'light', marginTop:'2vw'}}  color="#7D5C65"  component="div">
          Tablet Lo-fi Design
        </Typography>
        <Typography display="inline"  variant="body2" sx={{fontWeight:'light'}}>
			Compact Hamburger Navigation, Flexbox Dynamic Alignment
        </Typography>
      </CardContent>
      <CardContent
        component="img"
		sx={{
            height: '10%',
            width: '40%',
			selfAlign:'center'
          }}
		src={require( `../../images/project4/tablet_lofi.png` )}
        alt="Low fidelity mockup of tablet with critiques"
      />
    </Card>

    <Typography sx={{marginTop:"5vw", marginBottom:'1vw',fontWeight:'light'}} align="left" variant="h5" color="#A26769"> 
        Hi-Fi Design
    </Typography>

    <Typography align="left"  variant="body1" sx={{fontWeight:'light'}} component='div' >
        To see how the website would look like more realistically, I created a high fidelity 
        prototype for a website, smartphone, and tablet. 
        The new wireframes demonstrate   <BoldText txt="(1) dynamic realignment of layout for more platform accessibility"/>
         and  <BoldText txt="(2) responsive changes of colors over hover functionalities for added visual contrast."/>
        <p></p>
        I have embeded a  <BoldText txt="visual style guide"/> because to show how I chose contrast colors 
        to provide better support for people with visual impairments. 
        For the design style guide, I use bootstrap for the aesthetic choice. 
        They typography is the embedded ones form bootstrap. 
        Many of the components are from: <Link href="https://www.figma.com/file/ktpWAOMHGZlAa7cBkiTAJB/Bootstrap-UI-Kit-(Community)?node-id=139%3A17
" target="_" color="#53599A" underline="hover" > 
            Figma Template for Boostrap
            </Link> and 
            <Link href="https://getbootstrap.com/docs/4.0/components/buttons/" target="_" color="#53599A" underline="hover" > Bootstrap Components.
            </Link>  I chose very simple, but bold colors to add contrast between texts and link. The main point of the navbar was to enhance visual hierarchy and the simple, contrasting colors to be accessible to those with visual impairments.

    </Typography>


    <Card sx={{ marginTop: '2vw', display:'flex', alignItems:'center',
				flexDirection:'row', flexWrap:'wrap', justifyContent:'space-between'}} elevation={0}>
            <CardContent 	
	  	  sx={{
            width: '30%',
          }}>
        <Typography gutterBottom variant="h6" sx={{fontWeight:'light', marginTop:'2vw'}}  color="#7D5C65"  component="div">
          Website Hi-fi Design
        </Typography>
        <Typography display="inline"  variant="body2" sx={{fontWeight:'light'}}>
			Fixed Navigation, Contrasting Hyperlinks, Dropdown Segmentation, Carousel for Image Navigation, CSS Flexbox Contianer Markup, 
        </Typography>
      </CardContent>
      <CardContent
        component="img"
		sx={{
            height: '10%',
            minWidth: '35rem',
            width: '60%',
			selfAlign:'center'
          }}
		src={require( `../../images/project4/website_hifi.png` )}
        alt="High fidelity mockup of website with critiques"
      />
    </Card>

    <Divider/>
    <Card sx={{ marginTop: '2vw', display:'flex', alignItems:'center',
				flexDirection:'row', flexWrap:'wrap', justifyContent:'space-between'}} elevation={0}>
         
      <CardContent
        component="img"
		sx={{
            height: '40%',
            width: '60%',
			selfAlign:'center'
          }}
		src={require( `../../images/project4/phone_hifi.png` )}
        alt="High fidelity mockup of phone with critiques"
      />
         <CardContent 	
	  	  sx={{
            width: '30%',
          }}>
        <Typography gutterBottom variant="h6" sx={{fontWeight:'light', marginTop:'2vw'}}  color="#7D5C65"  component="div">
          Phone Hi-fi Design
        </Typography>
        <Typography display="inline"  variant="body2" sx={{fontWeight:'light'}}>
			Dynamic Resizing, Compact Hamburger Navigation, Dynamic Flex Alignment
        </Typography>
      </CardContent>
    </Card>

    <Divider/>
    <Card sx={{ marginTop: '2vw', display:'flex', alignItems:'center',
				flexDirection:'row', flexWrap:'wrap', justifyContent:'space-between'}} elevation={0}>
                  <CardContent 	
	  	  sx={{
            width: '30%',
          }}>
        <Typography gutterBottom variant="h6" sx={{fontWeight:'light', marginTop:'2vw'}}  color="#7D5C65"  component="div">
          Tablet Hi-fi Design
        </Typography>
        <Typography display="inline"  variant="body2" sx={{fontWeight:'light'}}>
			Compact Hamburger Navigation
        </Typography>
      </CardContent>
      <CardContent
        component="img"
		sx={{
            height: '10%',
            width: '60%',
			selfAlign:'center'
          }}
		src={require( `../../images/project4/tablet_hifi.png` )}
        alt="High fidelity mockup of tablet with critiques"
      />
    </Card>
    <Divider/>
    <Card sx={{ marginTop: '2vw', display:'flex', alignItems:'center',
				flexDirection:'row', flexWrap:'wrap', justifyContent:'space-between'}} elevation={0}>

      <CardContent
        component="img"
		sx={{
            height: '10%',
            width: '60%',
			selfAlign:'center'
          }}
          src={require( `../../images/project4/visualStyleGuide.png` )}
          alt="Visual Style guide noting colors used for the hi-fi prototype."
      />
                        <CardContent 	
	  	  sx={{
            width: '30%',
          }}>
        <Typography gutterBottom variant="h6" sx={{fontWeight:'light', marginTop:'2vw'}}  color="#7D5C65"  component="div">
          Visual Design Style Guide
        </Typography>
        <Typography display="inline"  variant="body2" sx={{fontWeight:'light'}}>
			Contrasting Colors, Dynamic Visual Indicators for Links, Navigation Demonstration, Jumbotron 
        </Typography>
      </CardContent>
    </Card>

    <Typography sx={{marginTop:"5vw", marginBottom:'1vw',fontWeight:'light'}} align="left" variant="h5" color="#A26769"> 
        First Redesign Iteration
    </Typography>
    <Typography align="left"  variant="body1" sx={{fontWeight:'light'}} component='div' >
        After prototyping a high fidelity and low fidelity prototype, I created a first iteration of the hi-fi website in HTML and CSS. 
        The website includes placeholder images, removed a lot of overloaded contrast in the content to summarize it
        in the navbar. The main focus is the <BoldText txt="changed visual hierarchy and reduced visual overload"/>
        I have provided an following embeddings for quick access.
         For more detailed introspection, please click on: <Link href="https://angrygrinch123.github.io/redesign/redesigned.html" target="_" color="#53599A" underline="hover" > 
            First Iteration of Redesigned Website Link.
            </Link>
    </Typography>
        <p></p> 
 
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
        I then submitted my website for peer evaluation. 
        The  main feedback was that the visual flow needs to be enhanced, 
        particularly in the forms of 
        <BoldText txt ="added contrast and visually centric views."/> The following is a summary of the feedback:
        </Typography>
        
        <AutoAccordian content={project4.content}/>

        <Typography sx={{marginTop:"5vw", marginBottom:'1vw',fontWeight:'light'}} align="left" variant="h5" color="#A26769"> 
        Second Redesign Iteration
        </Typography>

        <Typography align="left"  variant="body1" sx={{fontWeight:'light'}} component='div' >
        I incorporated the feedback from the peer evaluation session to create a second iteration of the website.
        The main changes I made, following the feedback were the 
        <BoldText txt="(1) addition of margins, (2) better flex boxes at the bottom, (3) enhanced contrast."/>
        As my embedding shows, I replaced the bottom flex boxes with an accordion for better visual hierarchy,
        I removed all the muted text and bolded headers for better visual contrast,
        and I added margins for a more central view-flow. 
        <BoldText txt="For future work, I plan to align the search bar in the navigation more dynamically."/>
        I have provided an following embedding for quick access and comparison. For more detailed introspection, please go to the actual 
        <Link href="https://angrygrinch123.github.io/redesign/redesign2.html" target="_" color="#53599A" underline="hover" > Redesigned Website Link.
        </Link>
        
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
