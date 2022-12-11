import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';

import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import CoPresentOutlinedIcon from '@mui/icons-material/CoPresentOutlined';

import pageData from '../assets/pageData.json';

export default function PublicationList() {
  function getPublciationIcon(publicationType){
  	if (publicationType == "paper"){
  		return <DescriptionOutlinedIcon/>;
  	}
  	if (publicationType == "poster"){
  		return <CoPresentOutlinedIcon/>;
  	}
  }


  return (
    <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
      <nav aria-label="main mailbox folders">
        <List align="left"disablePadding={true}>
          { pageData.publications.map (( publication, index ) =>
          	<ListItem key={index} alignItems="flex-start" disablePadding={true}>
	            <ListItemButton alignItems="flex-start" align="left" disableGutters={true}  component="a" href={publication.href}>
	              <ListItemIcon>
	                {getPublciationIcon(publication.type)}
	              </ListItemIcon>
	              <ListItemText primary={publication.title} secondary={publication.awards}/>
	            </ListItemButton>
	         </ListItem>
          	)}
        </List>
      </nav>
    </Box>
  );
}