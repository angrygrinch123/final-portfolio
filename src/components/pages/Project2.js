import { Typography, Divider, Container, 
    Box, Card, CardContent, CardMedia,
    Button} from '@mui/material';
import Link from '@mui/material/Link';

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





    <Typography sx={{marginTop:"3vw", fontWeight:'light'}} align="left" variant="h5" color="#A26769"> 
        Perspective of Secondary Users
    </Typography>
    <Typography align="left"  variant="body1" sx={{fontWeight:'light', marginTop:'1vw'}} component="div">
    To truly understand user behavior, we observed five pairs of users in a study setting, in which each pair had one primary and one secondar user in a simulated interaction task setting. 
    We wanted to <BoldText txt="observe how the presence of AR glasses and a filter affected secondary users."/> In this case, we used the desert survival task,
    a communication task where the participant will come up with 15 items based on their perceived importance 
    in a simulated desert survival scenario. In addition, the participants expressed features and components that they want to see in AR glasses in a 
    <BoldText txt="participatory design task"/> in which they physically sketching out their vision of future AR glasses.
    Ultimately, we want to assess whether there exists a need for differently designed AR glasses for secondary users. 
    The following is a summary of interviews and tasks.
    </Typography>

    <Typography align="left"  variant="body1" sx={{fontWeight:'light', marginTop:'1vw'}} component="div" >
    In summary, secondary users felt that there were three main problems with the design of AR Glasses: 
    <BoldText txt="(1) Lack of Transparency, (2) Loss of Agency over Self-Presentation, and (3) Discreet Recording Enabling Primary Actors."/>
    Secondary users felt that the lack of physical transparency hindered people's communication, they felt powerless becuase they couldn't 
    choose how to self-present themselves in the presence of AR glasses, and they thought that they were at a relative disadvantage
    because of the discreet recording capabilities of AR Glasses. The following is a set of sample quotes that show how users felt. 
    </Typography>

    <AutoAccordian content={project2Interviews.content}/>
    
    <Typography sx={{marginTop:"3vw", fontWeight:'light'}} align="left" variant="h5" color="#A26769"> 
        Behavioral Changes of Users
    </Typography>
    <Typography align="left"  variant="body1" sx={{fontWeight:'light', marginTop:'1vw'}} component="div">
        In addition to, noting the perspective of secondary users, we also noted behavioral changes that ocurred from the presence of AR glasses.
        These were important to understand the impact of AR Glasses on participants' communication style. We found that while there were modifications to
        behavior, these were more or less negligible and not a huge hindrance to the tasks. 
    </Typography>

    <AutoAccordian content={project2Interviews.behavior}/>

    <Typography sx={{marginTop:"5vw", fontWeight:'light', marginBottom:'1vw'}} align="left" variant="h5" color="#A26769"> 
    Design Considerations for Future AR Glasses 
    </Typography>
    <Typography align="left"  variant="body1" sx={{fontWeight:'light', marginTop:'1vw'}} component="div" >
    From our behavioral obserivations we found that there is a <BoldText txt="power imbalance between primary and secondary users"/> 
    becayse there are currently no features designed for consensual interactions between primary and secondary users in AR glasses. 
    Secondary users are often stripped of their right to choose to participate because they are unaware of what the primary user is doing with AR glasses. 
    We present a set of AR glasses' design recommendations that could ameliorate the power imbalance.
    </Typography>

    <AutoAccordian content={project2Interviews.design}/>

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