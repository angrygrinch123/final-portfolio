import { Typography } from '@mui/material';
import Link from '@mui/material/Link';

import pageData from "../assets/pageData.json"

export default function AboutMe() {
  return (
    <div id="about-me-container">
    <Typography align="left"  variant="subtitle1" sx={{fontWeight:'light'}}>
      Hey, I'm {pageData.title}. I am a {pageData.aboutMe.occupation} at Brown University in the 
      <Link href={pageData.aboutMe.advisor1.labRef} color="#A26769" underline="hover"> {pageData.aboutMe.advisor1.labName} </Link> and 
      <Link href={pageData.aboutMe.advisor2.labRef} color="#A26769" underline="hover"> {pageData.aboutMe.advisor2.labName} </Link>. 
 
      I am co-advised by 
      <Link href={pageData.aboutMe.advisor1.ref}  color="#A26769" underline="hover"> {pageData.aboutMe.advisor1.name} </Link> and
       <Link href={pageData.aboutMe.advisor2.ref} color="#A26769" underline="hover"> {pageData.aboutMe.advisor2.name}. </Link> 
       I like to <Typography display="inline" sx={{color:"#A26769"}}> redesign systems for users of varied stakeholders </Typography> to 
      create interfaces that are for <Typography display="inline" sx={{color:"#A26769"}}> social-good and are accessible and natural </Typography> for the users. 
    </Typography>
    </div>
  );
}
