import { Accordion, AccordionSummary, AccordionDetails, Typography, Box} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


export default function AutoAccordion({content}) {
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
                <Typography sx={{fontWeight:'light'}}  color="text.secondary"  variant="body2">
                {accoridionContent.response}
            </Typography>
            </AccordionDetails>
        </Accordion>
            )}
        </Box>
    );
}
