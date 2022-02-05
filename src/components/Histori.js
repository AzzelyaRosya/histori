import * as React from 'react';
import { Typography, Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

// import component
import Contact from './Contact';
import Header from './Header';

// import color
import { grey } from '@mui/material/colors';

export default function Histori() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <>
      {/* Header */}
      <div style={{ padding: '10px', marginTop: 70 }}>
        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} sx={{ border: 0, bgcolor: '#f2f2f2' }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: grey[50] }} />} aria-controls="panel1bh-content" id="panel1bh-header" sx={{ borderRadius: 1 }} style={{ color: '#fff', backgroundColor: '#F78104' }}>
            <Typography p={1} m={1} sx={{ width: '37%', flexShrink: 0 }}>
              <b>1 Januari 2022</b>
            </Typography>
            <Header />
          </AccordionSummary>

          {/* isi */}
          <AccordionDetails style={{ color: '#fff' }}>
            <Contact />
          </AccordionDetails>
        </Accordion>
      </div>

      {/* batas card 1 */}

      <div style={{ padding: '10px', marginTop: 0 }}>
        <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} sx={{ border: 0, bgcolor: '#f2f2f2' }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: grey[50] }} />} aria-controls="panel2bh-content" id="panel2bh-header" sx={{ borderRadius: 1 }} style={{ color: '#fff', backgroundColor: '#F78104' }}>
            <Typography p={1} m={1} sx={{ width: '37%', flexShrink: 0 }}>
              <b>2 Januari 2022</b>
            </Typography>
            <Header />
          </AccordionSummary>

          {/* isi */}
          <AccordionDetails style={{ color: '#fff' }}>
            <Contact />
          </AccordionDetails>
        </Accordion>
      </div>

      {/* batas card 2 */}
    </>
  );
}
