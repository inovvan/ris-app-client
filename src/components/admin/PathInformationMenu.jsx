import { React, useContext } from 'react';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import style from './style.module.css'
import { Route, Routes, Link, useLocation} from 'react-router-dom';
import WorkMap from './map/WorkMap';
import Sib from '../sib/Sib';

export default function PathInformationMenu() {
  const {pathname} = useLocation();
  console.log(pathname);
  return (
    <Box sx={{ bgcolor: 'background.paper',  height: '100%' }}>
      <AppBar position="static" className={style.appBar} sx={{ bgcolor: 'SteelBlue', width: '100%' }}>
        <Tabs
          value={pathname}
          indicatorColor="secondary"
          TabIndicatorProps={{
            style: {
              height: 3
            }
          }}
          textColor="inherit"
          variant="scrollable"
          allowScrollButtonsMobile
        >
          <Tab sx={{ width: 300, height: 70, fontSize: 14 }} 
            label="Днепр" 
            value={`/path-information/dnepr`} 
            to={`/path-information/dnepr`} 
            component={Link} 
          />
          <Tab sx={{ width: 300, height: 70, fontSize: 14 }} 
            label="Березина" 
            value={`/path-information/berezina`} 
            to={`/path-information/berezina`} 
            component={Link} 
          />
          <Tab sx={{ width: 300, height: 70, fontSize: 14 }} 
            label="Припять" 
            value={`/path-information/pripyat`} 
            to={`/path-information/pripyat`} 
            component={Link} 
          />
        </Tabs>
      </AppBar>

        <Box sx={{ p: 3 }}>
          <Routes>
              <Route path="/dnepr" element={<Sib />} />
              <Route path="/berezina" element={<Sib />} />
              <Route path="/pripyat" element={<Sib />} />
          </Routes>
        </Box>
    </Box>
  );
}