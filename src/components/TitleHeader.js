import BreadcrumbHeader from './BreadcrumbHeader.js';

import { Typography } from '@mui/material';

import aboutMe from "../assets/aboutMe.json"

export default function TitleHeader() {
  return (
        <div id="header-container">
          <Typography  color="orange" variant="h2">
           {  aboutMe.title }
          </Typography>
          <BreadcrumbHeader/>  
        </div>

  );
}