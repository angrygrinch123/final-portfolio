import * as React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';

import { HashLink } from "react-router-hash-link";

import HomeIcon from '@mui/icons-material/Home';
import Face4Icon from '@mui/icons-material/Face4';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import BuildOutlinedIcon from '@mui/icons-material/BuildOutlined';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';

import resume from '../assets/grinch_resume.pdf';

export default function BreadcrumbHeader() {
  return (
    <div id="breadcrumbHeader" role="presentation">
      <Breadcrumbs aria-label="breadcrumb">
        <HashLink
          sx={{ display: 'flex', alignItems: 'center'   }}
          className="bredcrumbLink"
          to="/"
        >  <HomeIcon  sx={{ mr: 0.5 }} fontSize="inherit" />
          Home
        </HashLink>
        <HashLink
          sx={{ display: 'flex', alignItems: 'center'   }}
          className="bredcrumbLink"
          to="/#about-me-container"
        >  <Face4Icon  sx={{ mr: 0.5 }} fontSize="inherit" />
          About Me
        </HashLink>
        <HashLink
          sx={{ display: 'flex', alignItems: 'center'   }}
          className="bredcrumbLink"
          to="/#project-list-container"
        >  <BuildOutlinedIcon  sx={{ mr: 0.5 }} fontSize="inherit" />
          Projects
        </HashLink>
        <HashLink
          sx={{ display: 'flex', alignItems: 'center'   }}
          className="bredcrumbLink"
          to="#publications-container"
        >  <DescriptionOutlinedIcon  sx={{ mr: 0.5 }} fontSize="inherit" />
          Publications
        </HashLink>
        <Link
          underline="hover"
          color="inherit"
          sx={{ display: 'flex', alignItems: 'center'   }}
          className="bredcrumbLink"
          href={resume}
          target="_blank"
        >  <FileDownloadOutlinedIcon  sx={{ mr: 0.5 }} fontSize="inherit" />
          Resume
        </Link>
      </Breadcrumbs>
    </div>
  );
}