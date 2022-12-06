import { Typography } from '@mui/material';

import pageData from "../assets/pageData.json"

import BasicList from './BasicList.js';

export default function Publications() {
  return (
    <div id="publications-container">
      <Typography  align="left" color="#A26769" variant="h5" >
       Publications
      </Typography>
      <BasicList/>
    </div>
  );
}