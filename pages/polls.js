import React, {useState} from 'react'
import PollsPostOn from '../components/polls/PollsPostOn'
import PollsPostQc from '../components/polls/PollsPostQc'
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Box from '@mui/material/Box';


function polls() {

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
                    <PollsPostOn></PollsPostOn>
                </TabPanel>
                <TabPanel sx={panelStyles} value="2">
                    <PollsPostQc></PollsPostQc>
                </TabPanel>
            </TabContext>
        </div>
    </div>
)
}

export default polls