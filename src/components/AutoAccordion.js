import { Accordion, AccordionSummary, AccordionDetails, Typography, Box} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


export default function AutoAccordion({content}) {

    function generateAccordianContent(response){
        if (Array.isArray(response)){
            return   (
                <ul>
                <Typography sx={{fontWeight:'light'}}  color="text.secondary"  variant="body2">
                 {response.map (( r, index ) =>
                    <li key={index}>{r}</li>
                )}
                </Typography>
                </ul>
            )         
           
        } else{
            return (
                <Typography sx={{fontWeight:'light'}}  color="text.secondary"  variant="body2">
                {response}
                 </Typography>
            )
        }
    }
    return (
        		
        <Box sx={{ marginTop:'2vw' }}>
            {content.map (( accoridionContent, index ) =>
			<Accordion key={index}>
            <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            >
            <Typography sx={{fontWeight:'light'}} variant="body2"> {accoridionContent.header} </Typography>
            </AccordionSummary>
            <AccordionDetails>
                { generateAccordianContent(accoridionContent.response) }
            </AccordionDetails>
        </Accordion>
            )}
        </Box>
    );
}
