import { Typography } from '@mui/material';

import aboutMe from "../assets/aboutMe.json"

export default function AboutMe() {
  return (
    <div id="about-me-container">
    <Typography align="left" color="textSecondary" variant="subtitle1"> {aboutMe.content} </Typography>
    </div>
  );
}