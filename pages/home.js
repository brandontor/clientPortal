import React, {useState, useContext} from 'react'
import ForumPostOn from '../components/forum/ForumPostOn'
import ForumPostQc from '../components/forum/ForumPostQc';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Box from '@mui/material/Box';


function home() {
  const [value, setValue] = useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const panelStyles = {
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }

  return (
    <div className='w-full h-full'>
      <div className='w-full h-full'>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="Ontario" value="1" />
              <Tab label="Quebec" value="2" />
            </TabList>
          </Box>
          <TabPanel sx={panelStyles} value="1">
            <ForumPostOn></ForumPostOn>
          </TabPanel>
          <TabPanel sx={panelStyles} value="2">
            <ForumPostQc></ForumPostQc>
          </TabPanel>
        </TabContext>
      </div>
    </div>
  )
}

export default home