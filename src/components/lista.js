import React from 'react'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';


const lista = () => {
    return (
        <div>
            <List component="nav">
                <ListItem button>
                    <ListItemIcon>
                        <InboxIcon></InboxIcon>
                    </ListItemIcon>
                    <ListItemText>
                        primer item
                    </ListItemText>
                </ListItem>

                <ListItem button>
                    <ListItemIcon>
                        <DraftsIcon></DraftsIcon>
                    </ListItemIcon>
                    <ListItemText>
                        segundo item
                    </ListItemText>
                </ListItem>
                <Divider/>
            </List>
        </div>
    )
}
export default lista;