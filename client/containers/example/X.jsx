import React from 'react'
import Radium from 'radium'

import Paper from 'material-ui/Paper'

import { Toolbar, ToolbarTitle, ToolbarGroup } from 'material-ui/Toolbar'
import IconButton from 'material-ui/IconButton'
import IconMenu from 'material-ui/IconMenu'
import MenuItem from 'material-ui/MenuItem'
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert'

import Snackbar from 'material-ui/Snackbar';
import RaisedButton from 'material-ui/RaisedButton';

import apiClient from 'helper/apiClient'

const styles = {
  paperStyle: {
  marginTop: 24,
  paddingBottom: 24
  },
  toolbar: {
    backgroundColor: '#ffffff',
    borderBottom: '1px solid rgb(224, 224, 224)'
  }
}



@Radium
export default class ExampleSimple extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      toast: ''
    };
  }

  handleTouchTap = () => {
    
    apiClient({
      url: 'test',
      data: {
       
      }
    })
    .then(({ data = {} }) => {
      
      this.setState({
        toast: JSON.stringify(data)
      });
      this.setState({
      open: true,
    });
    })
  };

  handleRequestClose = () => {
    this.setState({
      open: false,
    });
  };
  render() {
    return (
      <Paper style={styles.paperStyle} zDepth={1}>
<Toolbar style={styles.toolbar}>
          <ToolbarTitle text="Test" />
          <ToolbarGroup float="right">
            <IconMenu 
              anchorOrigin={{horizontal: 'right', vertical: 'top'}}
              targetOrigin={{horizontal: 'right', vertical: 'top'}}
              style={{marginTop: 4}}
              iconButtonElement={
                <IconButton>
                  <MoreVertIcon color="rgba(0, 0, 0, 0.45)"/>
                </IconButton>
              }
            >
              <MenuItem primaryText="Refresh" />
              <MenuItem primaryText="Setting" />
            </IconMenu>
          </ToolbarGroup>
        </Toolbar>
        <div>
 <RaisedButton
          onTouchTap={this.handleTouchTap}
          label="Add to my calendar"
        />
        <Snackbar
          open={this.state.open}
          message={this.state.toast}
          autoHideDuration={4000}
          onRequestClose={this.handleRequestClose}
        />
        </div>
      </Paper>
    )
  }
}



