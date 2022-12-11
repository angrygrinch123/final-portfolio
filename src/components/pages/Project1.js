import { Typography, Divider, Container, 
		Box, Card, CardContent, CardMedia,
		Button} from '@mui/material';
import Link from '@mui/material/Link';

import project1Feedback from "../../assets/project1Feedback.json";
import project1Interviews from "../../assets/project1Interviews.json";
import storyBoardData from "../../assets/storyboard.json";
import slothSvg from "../../images/personas/sloth.svg";
import beeSvg from "../../images/personas/bee.svg";

import AutoAccordian from '../AutoAccordion.js';

export default function Project1() {
  return (
    <div id="description-container">
		<Typography sx={{marginTop:"2vw", marginBottom:'1vw',fontWeight:'light'}} align="left" variant="h5" color="#A26769"> 
		Novelty is Not Always the Best Policy: An Inaccessible, Unintuitive Water Dispenser
		</Typography>
		<Typography display="inline" align="left"  variant="body1" sx={{fontWeight:'light'}} >
		This is a contextual inquiry on a contactless water dispenser on the fourth floor of the CIT. 
		The purpose of the interface is to reduce contact between people via objects to reduce the spread the COVID-19.
		However, from public observation, it became apparent that
		contactless water dispensers are 
		</Typography>
		<Typography display="inline" sx={{color:"#A26769"}}> not accessible </Typography> 
		<Typography display="inline" align="left"  variant="body1" sx={{fontWeight:'light'}} >given its </Typography>
		<Typography display="inline" sx={{color:"#A26769"}}> unintuitve interface.</Typography> 
		<Typography display="inline" variant="body1" sx={{fontWeight:'light'}}> 
			The purpose of this project is to understand the complications of the interface
			through a set of public observations, user interviews, and persona designs. 
		</Typography> 

		<Typography sx={{marginTop:"5vw", fontWeight:'light'}} align="left" variant="h5" color="#A26769"> 
		Public Observations
		</Typography>
		<Typography display="inline" align="left"  variant="body1" sx={{fontWeight:'light'}} >
		To understand how users behave, I decided to sit and watch people use the dispenser.
	 	The belief was that I could understand the interface better by watching other people use it and how they react to it or not react to it. 
		The following are my findings. 
		</Typography>
 

		<Card sx={{  display:'flex', alignItems:'center',
				flexDirection:'row', flexWrap:'wrap', justifyContent:'space-evenly'}} elevation={0}>
				<CardContent
				component="img"
				sx={{
					height: '10rem',
					width: '10rem',
					selfAlign:'center'
				}}
				src={require( `../../images/personas/water-1.jpeg` )}
				alt="Image of contactless water dispenser"
			/>
			<CardContent 	
				sx={{
					width: '40rem'					
				}}>
					<ul>
					<Typography variant="body2" sx={{fontWeight:'light'}}>
						<li>Users' natural instinct is to click or press the top screen or the "sensors" for water </li>
						<li>Users hesitate and start to fiddle with the cup/watter bottle to trigger a non-existent sensor under when pressing the button doesn't work very well</li>
						<li>One user placed the cup under the dispenser and waited for something to happen, only to realize that nothiing happened and thought the machine was broken</li>
						<li>Even after finding out how the hover sensor works, some users give up mid way (i.e. fill their water bottle halfway)</li>
					</Typography>
					</ul>
			</CardContent>
    </Card>

		<Typography sx={{marginTop:"3vw", fontWeight:'light'}} align="left" variant="h5" color="#A26769"> 
			User Interviews
		</Typography>


		<Typography align="left"  variant="body1" sx={{fontWeight:'light', marginTop:'1vw'}} >
 
		To truly understand user behavior, I conducted a set of user interviews detailing their behavior, thoughts, and emotions on the interface in detail. 
		  In particular, I tried to understand whether the interface was accessible and intuitive to use. Below are a set of questions I asked to three users to understand
		  their experiences and difficulty with the interface.
		</Typography>

	
	    <AutoAccordian content={project1Interviews.content}/>
		
		<Typography sx={{marginTop:"5vw", fontWeight:'light', marginBottom:'1vw'}} align="left" variant="h5" color="#A26769"> 
		Persona Designs
		</Typography>
		<Typography gutterBottom display="inline"  variant="body1" sx={{fontWeight:'light', marginBottom:'2vw'}} component="div">
		  To empathize with and really understand what a diverse set of users struggle with, I decided to design two personas and associated empathy maps that represent different user frustrations. 
		  The personas represent users of </Typography>
		  <Typography display="inline" variant="body1" sx={{color:"#A26769"}}> varied age demographics </Typography> 
		  <Typography gutterBottom display="inline"  variant="body1" sx={{fontWeight:'light'}}>to critique the interface at hand for its lack of  </Typography>  
		  <Typography display="inline" variant="body1" sx={{color:"#A26769"}}> acceessibility. </Typography>
		  <Typography display="inline" variant="body1" sx={{color:"#A26769"}}>  Busy Bee Beatrice </Typography> 
		  <Typography gutterBottom display="inline"  variant="body1" sx={{fontWeight:'light'}}>represents the users who are  </Typography>
		  <Typography display="inline" variant="body1" sx={{color:"#A26769"}}>  pressed on time and of a relatively younger demographic 
		  </Typography>
		  <Typography gutterBottom display="inline"  variant="body1" sx={{fontWeight:'light'}}>  On the other hand, </Typography>
		  <Typography display="inline" variant="body1" sx={{color:"#A26769" }}>  Slow and Steady Sam </Typography> 
		  <Typography gutterBottom display="inline"  variant="body1" sx={{fontWeight:'light'}} >  represents users who are  </Typography>
		  <Typography display="inline" variant="body1" sx={{color:"#A26769" }}> relatively more relaxed and of an older demographic with minor physical challenges.</Typography>
		  <Typography display="inline" variant="body1" sx={{ fontWeight:'light'}}> While no one in the public interviews actual had much discomfort,
		  Sam represents a set of users who may have physical challenges to represent the experiences of those who disliked or could not hold their 
		  arms out for long periods of time to extract water. 
		  </Typography>

	<Card sx={{  display:'flex', alignItems:'center',
				flexDirection:'row', flexWrap:'wrap', justifyContent:'space-evenly'}} elevation={0}>
      <CardContent
        component="img"
		sx={{
            height: '10rem',
            width: '10rem',
			selfAlign:'center'
          }}
		src={ beeSvg }
        alt="Picture of a Bee"
      />
      <CardContent 	
	  	  sx={{
            width: '40rem',
          }}>
        <Typography gutterBottom variant="h6" sx={{fontWeight:'light', marginTop:'2vw'}}  color="#7D5C65"  component="div">
          Busy Bee Beatrice
        </Typography>
        <Typography display="inline"  variant="body2" sx={{fontWeight:'light'}}>
			Busy Bee Beatrice is always on-the-run 
            because she is a Brown undergraduate junior who takes four STEM classes, 
            does research, is looking for a job,  
            and leads the lacorsse team so time is not something she has. Beatrice is filling up her water bottle right before her practice
            and cannot be late because she is the team captain. Yet, she struggles to get water 
            and ignores the additional directions written, and keeps clicking on the fountain
            because she is too preocuppied. She usually multi-tasks and responds to emails while filling up water,
            but she can't do that with a interface that requires her 
            to constantly put her hand up. 
        </Typography>
		<Typography display="inline" variant="body2" sx={{color:"#A26769"}}> Beatrice represents users' frustrations with the interface and 
            the consequences of poor, unintuitive design interfaces, in constrained, 
            real-life settings. </Typography>
      </CardContent>
    </Card>
		
		<Box sx={
        { display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-evenly',
          '& > :not(style)': {
          marginBottom:'2vw',
		  marginTop:'2vw',
          width: '25rem',
          height: '15rem',
		  overflow: 'auto'
        }}}>
			<Card>
				<CardContent>
					<Typography gutterBottom sx={{fontWeight:'light'}} variant="h6" color="#7D5C65" component="div">
					Thinks
					</Typography>
					<ul>
					<Typography sx={{fontWeight:'light'}}  variant="body2">

						<li>Is this machine broken?</li>
						<li>Maybe I should go to the Nelson and get water from there?</li>
						<li>Why does it pour water sometimes and not other times?</li>
					</Typography>

					</ul> 
				</CardContent>
			</Card>
			<Card>
				<CardContent>
					<Typography gutterBottom sx={{fontWeight:'light'}} variant="h6" color="#7D5C65" component="div">
					Feels
					</Typography>
					<ul>
					<Typography sx={{fontWeight:'light'}}  variant="body2">
                    <li>Frustrated that water isn't working and wasting her time</li>
                    <li>Confused as how the interface works</li>
                    <li>Feels silly that she is struggling in public</li>
					</Typography>
               	   </ul> 
				</CardContent>
			</Card>
			<Card>
				<CardContent>
					<Typography gutterBottom sx={{fontWeight:'light'}} variant="h6" color="#7D5C65" component="div">
					Says
					</Typography>
					<ul>
					<Typography sx={{fontWeight:'light'}}  variant="body2">
                    <li>Would you know how this works?</li>
                    <li>Is this machine broken?</li>
                    <li>Is there a fountain somewhere else in this building?</li>
                    <li>Is this how you do it?</li>
					</Typography>
                  </ul> 
				</CardContent>
			</Card>
			<Card>
				<CardContent>
					<Typography gutterBottom sx={{fontWeight:'light'}}  variant="h6" color="#7D5C65" component="div">
					Does
					</Typography>
					<ul>
					<Typography sx={{fontWeight:'light'}} variant="body2">
                    <li>Constantly taps the button to wait for the water to come out</li>
                    <li>Presses hard / applies pressure on the button for water</li>
                    <li>Moves the water bottle left and right for water to come, thinking the sensor is below</li>
					</Typography>
		          </ul> 
				</CardContent>
			</Card>
          	
    	</Box>





	<Card sx={{  display:'flex', alignItems:'center', marginTop:'4vw',
				flexDirection:'row', flexWrap:'wrap', justifyContent:'space-evenly'}} elevation={0}>
      <CardContent
        component="img"
		sx={{
            height: '10rem',
            width: '10rem',
			selfAlign:'center'
          }}
		src={ slothSvg }
        alt="Picture of a sloth"
      />
      <CardContent 	
	  	  sx={{
            width: '40rem'
          }}>

        <Typography gutterBottom variant="h6" sx={{fontWeight:'light', marginTop:'2vw'}}  color="#7D5C65"  component="div">
          Slow and Steady Sam
        </Typography>
        <Typography display="inline"  variant="body2" sx={{fontWeight:'light'}}>
			Slow and Steady Sam is a middle-aged, with a slightly aching arm. He does not have may pressing deadlines because he is a tenured professor at Brown. 
			However, he has carapal tunnel syndrome from carrying too many books and using his computer too much. As a result, he struggles to raise his arm for long periods of time. 
        </Typography>
		<Typography display="inline" variant="body2" sx={{color:"#A26769"}}>  Sam represents users with leisure and a temporary physical limitation 
              that may prevent them from enjoying the full experience, but not to a damaging degree. </Typography>
      </CardContent>
    </Card>
		
		<Box sx={
        { display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-evenly',
          '& > :not(style)': {
          marginBottom:'2vw',
		  marginTop:'2vw',
          width: '25rem',
          height: '15rem',
		  overflow: 'auto'
        }}}>
			<Card>
				<CardContent>
					<Typography gutterBottom sx={{fontWeight:'light'}} variant="h6" color="#7D5C65" component="div">
					Thinks
					</Typography>
					<ul>
					<Typography sx={{fontWeight:'light'}}  variant="body2">
						<li>Someone must have had a lot of questions asked to write all these instructions.</li>
						<li>Fair enough, this seems pretty simple.</li>
						<li>How is it reducing contact if it touches my cup?</li>  
					</Typography>

					</ul> 
				</CardContent>
			</Card>
			<Card>
				<CardContent>
					<Typography gutterBottom sx={{fontWeight:'light'}} variant="h6" color="#7D5C65" component="div">
					Feels
					</Typography>
					<ul>
					<Typography sx={{fontWeight:'light'}}  variant="body2">
						<li>Relieved, that Brown's CIT is covid-conscious</li>
						<li>Amused that someone had to write a long set of instructions for a simple sensor </li>
						<li>Entertained to be Darth Vader</li>
					</Typography>
               	   </ul> 
				</CardContent>
			</Card>
			<Card>
				<CardContent>
					<Typography gutterBottom sx={{fontWeight:'light'}} variant="h6" color="#7D5C65" component="div">
					Says
					</Typography>
					<ul>
					<Typography sx={{fontWeight:'light'}}  variant="body2">
						<li>Someone must have really been mad writing these instructions?</li>
						<li>May the force be with you</li>
						<li>Oof can't do this too long - my arm hurts</li>
						<li>Oops, that's cold water</li>
					</Typography>
                  </ul> 
				</CardContent>
			</Card>
			<Card>
				<CardContent>
					<Typography gutterBottom sx={{fontWeight:'light'}}  variant="h6" color="#7D5C65" component="div">
					Does
					</Typography>
					<ul>
					<Typography sx={{fontWeight:'light'}} variant="body2">
						<li>Correctly places hand in front of the red sensor region, 
						but first goes right above the cold water because he's right-handed</li>
						<li>Winces because his arm hurts, and switches arm for hot water</li>
						<li>Chuckles because someone wrote really long instructions</li>
					</Typography>
		          </ul> 
				</CardContent>
			</Card>
    	</Box>

		<Typography sx={{marginTop:"5vw", fontWeight:'light', marginBottom:'1vw'}} align="left" variant="h5" color="#A26769"> 
		Storyboard for Sam
		</Typography>

		<Typography gutterBottom display="inline" variant="body1" sx={{fontWeight:'light', marginBottom:'2vw'}} component="div">
			To understand the user journey for a user with minor physical limitations but has leisurely time, I created a sketch of a storyboard for Sam. 	
			The biggest takeaways from this storyboard is to understand how 
			
        </Typography>
		<Typography display="inline" variant="body1" sx={{color:"#A26769"}}> (1) unintuitive </Typography>
		<Typography gutterBottom display="inline" variant="body1" sx={{fontWeight:'light'}}>the design  of the water fountain is given that Sam has to switch arms and requires Sam to read a separate set of instructions to understand how to use the fountain and how
</Typography>		
		<Typography display="inline" variant="body1" sx={{color:"#A26769"}}> (2) inaccessible </Typography> 
		<Typography gutterBottom display="inline" variant="body1" sx={{fontWeight:'light'}}>the design is given the need to physically raise hands constantly. 
		 </Typography>

		<Box sx={
        { display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-evenly',
          '& > :not(style)': {
          margin:'2vw',
          width: '15rem',
          height: '25rem',
		  overflow: 'auto'
        }}} >
			{ storyBoardData.storyboards.map (( storyboard, index ) =>
			<Card key={index} sx={{ display:'flex', alignItems:'flex-start',
				flexDirection:'row', flexWrap:'wrap', justifyContent:'space-evenly'}} >
				<CardContent
				component="img"
				sx={{
					width: '15rem',
					maxHeight:'10rem'
				}}
				src={require( `../../images/personas/storyboard${index+1}.jpg` )}
				alt={storyboard.alt}
				/>
				<CardContent>
				<Typography sx={{fontWeight:'light'}} variant="body2">				
				{storyboard.caption}
				</Typography>
				</CardContent>
				<CardContent>
					<Typography sx={{fontWeight:'light'}}   variant="body2" color="#A26769">{(index + 1)} </Typography>
				</CardContent>
			</Card>
        	)}
           
        </Box>  



		<Typography sx={{marginTop:"5vw", fontWeight:'light', marginBottom:'1vw'}} align="left" variant="h5" color="#A26769"> 
		Design Iterations
		</Typography>
		<Typography display="inline"  sx={{fontWeight:'light'}}>
			This is actually the  
		</Typography>
		<Typography display="inline" color="#A26769" > second iteration </Typography>
		<Typography  display="inline" sx={{fontWeight:'light'}}> 
		of my persona design. The 	<Link href="https://angrygrinch123.github.io/personas_hw/" color="#A26769" underline="hover"> first iteration of the design </Link>  </Typography>
	
		<Typography  display="inline" sx={{fontWeight:'light'}}> 
		had personas that were "too-motivated", non-centered visual hierarchy, and lack of narrative.
 		 I incorporated the feedback from peers from UX Factor as well as the studio. The following demonstrates how I incorporated each feedback to my new portfolio.
		</Typography>

			
		<AutoAccordian content={project1Feedback.content}/>

		<Typography sx={{marginTop:"5vw", fontWeight:'light', marginBottom:'1vw'}} align="left" variant="h5" color="#A26769"> 
		Lessons Learned
		</Typography>
		<Typography gutterBottom display="inline"  sx={{fontWeight:'light'}}>
			To understand the user journey for a user with minor physical limitations but has leisurely time, I created a storyboard for Sam. 	
			The biggest takeaways from this personas design project was that
		</Typography>
		<Typography gutterBottom display="inline" color="#A26769"> innovations are a double-edged sword: they come at a cost if all stakeholders are not considered. </Typography>
		<Typography gutterBottom display="inline"  sx={{fontWeight:'light'}}>
			While the contactless water dispenser was a good idea, it actually ended up not being too accessible for people even with mild discomfort.
			In addition, because it required another set of instructions to understand how to use it, even for users with no physical discomfort or ailments
			struggled to use the dispenser without touching the buttons on it. In fact, it almost induced more contact because it was a new interface. 
			Future designs of contactless water interfaces should make sure that the interface iconography is more intuitive and does not require
			people to hold out their hands for long periods of time as that causes discomfort for even users with no physical ailments in the arms.
		</Typography>
    </div>

); 
}