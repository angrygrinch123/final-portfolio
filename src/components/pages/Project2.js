import { Typography, Divider, Container, 
    Box, Card, CardContent, CardMedia,
    Button} from '@mui/material';
import Link from '@mui/material/Link';

import project1Feedback from "../../assets/project1Feedback.json";
import project2Interviews from "../../assets/project2Interviews.json";
 
import arAgency from "../../images/arAgency.svg";

import AutoAccordian from '../AutoAccordion.js';
import BoldText from '../BoldText';

export default function Project1() {
return (
<div id="description-container">
    <Typography sx={{marginTop:"2vw", marginBottom:'1vw',fontWeight:'light'}} align="left" variant="h5" color="#A26769"> 
    Users and Stakeholders of Mixed Reality
    </Typography>
    <Typography align="left"  variant="body1" sx={{fontWeight:'light'}} component='div' >
    Augmented reality (AR) glasses extend and alter users' perceptions in face-to-face interactions. 
    While many AR studies focus on the design experiences and psychological effects for <BoldText txt="primary users"/>,
    the person wearing the AR Glasses, the impact and social consequences on <BoldText txt="secondary actors"/>, 
    or the users who are not wearing the AR glasses remain unclear. 
    Secondary actors are significant stakeholders in mixed reality because they are drawn into a virtual world 
    by the primary user if the primary user applies any filters on the secondary actor. 
    However, secondary actors are not considered in the design of AR glasses.So how do we
    <BoldText txt=" design AR Glasses for both primary and secondary users?"/> 
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
		src={ arAgency }
        alt=""
      />
      <CardContent 	
	  	  sx={{
            width: '40rem',
          }}>
        <Typography display="inline"  variant="body2" sx={{fontWeight:'light'}}>
          The primary actor in this case is the user with AR glasses on the left. The secondary actor is the user on the right with no AR glasses.
        </Typography>
      </CardContent>
    </Card>



    <Typography align="left"  variant="body1" sx={{fontWeight:'light', marginTop:'1vw'}} component="div" >
    The <BoldText txt="goal of the interaction task is to encourage social interaction and communication between participants"/> so that we 
    can observe user interactions with AR glasses. In this case, we used the desert survival task,
    a communication task where the participant will come up with 15 items based on their perceived importance 
    in a simulated desert survival scenario.
    </Typography>



    <Typography sx={{marginTop:"3vw", fontWeight:'light'}} align="left" variant="h5" color="#A26769"> 
        User Interviews
    </Typography>
    <Typography align="left"  variant="body1" sx={{fontWeight:'light', marginTop:'1vw'}} component="div">

    To truly understand user behavior, we observed five pairs of users, in which each pair had one primary and one secondar user in a simulated interaction task setting. 
    We wanted to <BoldText txt="observe how the presence of AR glasses and a filter affected secondary users."/>
    In summary, secondary users felt that there were three main problems with the design of AR Glasses: 
    <BoldText txt="(1) Lack of Transparency, (2) Loss of Agency over Self-Presentation, and (3) Discreet Recording Enabling Primary Actors."/>
    Secondary users felt that the lack of physical transparency hindered people's communication, they felt powerless becuase they couldn't 
    choose how to self-present themselves in the presence of AR glasses, and they thought that they were at a relative disadvantage
    because of the discreet recording capabilities of AR Glasses. The following is a set of sample quotes that show how users felt. 
    </Typography>

    <AutoAccordian content={project2Interviews.content}/>
    
    <Typography sx={{marginTop:"5vw", fontWeight:'light', marginBottom:'1vw'}} align="left" variant="h5" color="#A26769"> 
    Participatory Designs
    </Typography>
    <Typography align="left"  variant="body1" sx={{fontWeight:'light', marginTop:'1vw'}} component="div">
        
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


    <Typography sx={{marginTop:"5vw", fontWeight:'light', marginBottom:'1vw'}} align="left" variant="h5" color="#A26769"> 
    Design Considerations for Future AR Glasses 
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

    </Typography>
    

</div>

); 
}