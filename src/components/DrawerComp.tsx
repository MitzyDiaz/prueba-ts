import React, { useState } from 'react';
import { DATA } from '../data/Data';
import {Drawer, List, ListItemButton, ListItemIcon,ListItemText,IconButton} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
const DrawerComp = () => {
    const [openDrawer, setOpenDrawer] = useState(false)
    return(
        <React.Fragment>
            <Drawer open={openDrawer} onClose={ ()=> setOpenDrawer(false)}>
                <List>
                    {
                        DATA.map((page,index)=>(
                            <ListItemButton onClick={()=>setOpenDrawer(false)} key={index}>
                                <ListItemIcon>
                                    <ListItemText>{page}</ListItemText>
                                </ListItemIcon>
                            </ListItemButton>
                        ))
                    }
                    {/*<ListItemButton>
                        <ListItemIcon>
                            <ListItemText></ListItemText>
                        </ListItemIcon>
                </ListItemButton>*/}
                </List>
            </Drawer>
            <IconButton sx={{color: 'white'}} onClick={() => setOpenDrawer(!openDrawer)}>
                <MenuIcon></MenuIcon>
            </IconButton>
        </React.Fragment>
    );
};

export default DrawerComp;