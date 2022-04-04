import React, {useState} from 'react'
import styles from './Navigation.module.css'
import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';

function Navigation({user}) {

    const [selectedIndex, setSelectedIndex] = useState(1);
    // let name = user
    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
    };

    const style = {
        height: '100%',
        display: 'flex',
    };

    const buttonStyles = {
        maxWidth: 150,
        color: '#fff',
    }

    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <p>Hello User</p>
            </div>
            <div className={styles.right}>
            <List sx={style} component="nav" aria-label="mailbox folders">
                <ListItemButton
                    sx={buttonStyles}
                    selected={selectedIndex === 0}
                    onClick={(event) => handleListItemClick(event, 0)}
                >
                    <ListItemText primary="DASHBOARD" />
                </ListItemButton>
                <Divider />
                <ListItemButton 
                    sx={buttonStyles}
                    selected={selectedIndex === 1}
                    onClick={(event) => handleListItemClick(event, 1)}
                >
                    <ListItemText primary="FORUM" />
                </ListItemButton>
                <ListItemButton
                    sx={buttonStyles}
                    selected={selectedIndex === 2}
                    onClick={(event) => handleListItemClick(event, 2)}
                >
                    <ListItemText primary="POLLS" />
                </ListItemButton>
                <Divider light />
                <ListItemButton
                    sx={buttonStyles}
                    selected={selectedIndex === 3}
                    onClick={(event) => handleListItemClick(event, 3)}
                >
                    <ListItemText primary="RESOURCES" />
                </ListItemButton>
                <ListItemButton
                    sx={buttonStyles}
                    selected={selectedIndex === 4}
                    onClick={(event) => handleListItemClick(event, 4)}
                >
                    <ListItemText primary="CONTACT" />
                </ListItemButton>
            </List>
            </div>
        </div>
    )
}

export default Navigation