import * as React from 'react';
import { Box, Container, IconButton, Typography, Card, CardHeader, CardContent, Avatar, Item, Paper, AppBar } from '@mui/material';
import Grid from '@mui/material/Grid';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Contact from './Contact';
// iconnya
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import PersonSharpIcon from '@mui/icons-material/PersonSharp';

// message
const message = `Christian Gunter `;
const message2 = `Sabuk Putih `;

export default function Histori() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <>
      {/* isi atas atau header */}
      <div style={{ padding: '10px', marginTop: 70 }}>
        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} sx={{ border: 0, bgcolor: '#f2f2f2' }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1bh-content" id="panel1bh-header" style={{ color: '#fff', backgroundColor: '#F78104' }}>
            <Typography p={1} m={1} sx={{ width: '37%', flexShrink: 0 }}>
              <b>1 Januari 2022</b>
            </Typography>
            <Grid item xs={2} style={{ display: 'flex', flexDirection: 'column' }}>
              <Typography>
                <b>Sakit</b>
              </Typography>
              <Typography> 15</Typography>
            </Grid>
            <Grid item xs={2} style={{ display: 'flex', flexDirection: 'column' }}>
              <Typography>
                <b>Izin</b>
              </Typography>
              <Typography> 12</Typography>
            </Grid>
            <Grid item xs={2} style={{ display: 'flex', flexDirection: 'column' }}>
              <Typography>
                <b>Alpa</b>
              </Typography>
              <Typography> 22</Typography>
            </Grid>
          </AccordionSummary>
          <AccordionDetails style={{ color: '#fff' }}>
            <Contact />
            <Contact />
            <Contact />
          </AccordionDetails>
        </Accordion>
      </div>

      {/* batas 1 */}

      <div style={{ padding: '10px', marginTop: 0 }}>
        <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} sx={{ border: 0, bgcolor: '#f2f2f2' }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2bh-content" id="panel2bh-header" style={{ color: '#fff', backgroundColor: '#F78104' }}>
            <Typography p={1} m={1} sx={{ width: '37%', flexShrink: 0 }}>
              <b>2 Januari 2022</b>
            </Typography>

            <Grid item xs={2} style={{ display: 'flex', flexDirection: 'column' }}>
              <Typography>
                <b>Sakit</b>
              </Typography>
              <Typography> 15</Typography>
            </Grid>
            <Grid item xs={2} style={{ display: 'flex', flexDirection: 'column' }}>
              <Typography>
                <b>Izin</b>
              </Typography>
              <Typography> 12</Typography>
            </Grid>
            <Grid item xs={2} style={{ display: 'flex', flexDirection: 'column' }}>
              <Typography>
                <b>Alpa</b>
              </Typography>
              <Typography> 22</Typography>
            </Grid>
          </AccordionSummary>
          {/* expand */}
          <AccordionDetails style={{ color: '#fff' }}>
            <Contact />
            <Contact />
            <Contact />
          </AccordionDetails>
        </Accordion>
      </div>
    </>
  );
}
