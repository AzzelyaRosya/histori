import * as React from 'react';
import { Typography, Accordion, AccordionDetails, AccordionSummary } from '@mui/material';

// icon
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

// import component
import Contact from '../components/Contact';
import Header from '../components/Header';
import lotsOfData from '../components/DataAll';
import Navbar from '../components/Navbar';

// import color
import { grey } from '@mui/material/colors';

const Histori = (props) => {
  const [expanded, setExpanded] = React.useState(0);

  const handleChange = (panel) => {
    console.log(panel);
    setExpanded(panel);
  };

  return (
    <>
      {lotsOfData.map((data, index) => (
        <div key={index}>
          <Navbar />
          {/* card 1 */}
          {/* Header */}
          <div style={{ padding: '10px', marginTop: 70 }}>
            <Accordion expanded={expanded === data.id} onChange={() => handleChange(data.id)} sx={{ border: 0, bgcolor: '#f2f2f2' }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: grey[50] }} style={{ color: '#fff' }} />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
                sx={{ borderRadius: 1 }}
                style={{ color: '#fff', backgroundColor: '#F78104' }}
              >
                <Typography p={1} m={1} sx={{ width: '37%', flexShrink: 0 }}>
                  <b>{data.date}</b>
                </Typography>
                <Header sakit={data.sakit} izin={data.izin} alpa={data.alpa} />
              </AccordionSummary>

              {/* isi */}
              <AccordionDetails style={{ color: '#fff' }}>
                {data.members.map((x) => (
                  <Contact img={x.img} nama={x.nama} info={x.info} />
                ))}
              </AccordionDetails>
            </Accordion>
          </div>
          {/* batas card 1 */}
        </div>
      ))}
    </>
  );
};

export default Histori;
