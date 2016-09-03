import './createContent.css'
import React from 'react'
import V from 'validator'
import { alert } from 'components/alarm'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import IconButton from 'material-ui/IconButton'
import IconMenu from 'material-ui/IconMenu'
import MenuItem from 'material-ui/MenuItem'
import Paper from 'material-ui/Paper'
import TextField from 'material-ui/TextField'
import { Toolbar, ToolbarTitle, ToolbarGroup } from 'material-ui/Toolbar'
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert'
import ContentAdd from 'material-ui/svg-icons/content/add'
import ActionDone from 'material-ui/svg-icons/action/done'

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';



import { default as Fade } from 'react-fade'
import {
  Editor,
  createEditorState,
} from 'medium-draft'


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




class CreateContent extends React.Component {
	constructor(props) {
    super(props);

     //this._onClick = this._onClick.bind(this);

    this.state = {
      editorState: createEditorState(), // for empty content
       open: false,
       isActive: false
    };
     

    /*
    this.state = {
      editorState: createEditorState(data), // with content
    };
    */

    this.onChange = (editorState) => {
      this.setState({ editorState });
    };
  }

  handleOpen = () => {
    this.setState({open: true});

   
  };

  handleCancel = () => {
  	console.log('cancel.');
    this.setState({open: false});
  };
  handleOk = () => {
  	console.log('ok.');
    this.setState({open: false});
  };

 


myClickHander (){}
	
	render() {
		const { editorState } = this.state;
		const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.handleCancel}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.handleOk}
      />,
    ];
    const { isActive } = this.state;
		return (
			<Fade duration={0.3}>
			<Paper style={styles.paperStyle} zDepth={1}>
				<Toolbar style={styles.toolbar}>
					<ToolbarTitle text="CreateContent" />
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
				<div className="content">
	
				<RaisedButton label="Dialog" onTouchTap={this.handleOpen} />
        <Dialog
          title="Dialog With Actions"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          The actions in this window were passed in as an array of React objects.
        </Dialog>
				<Editor
        ref="editor"
        editorState={editorState}
        onChange={this.onChange} />
        
				</div>
			</Paper>
			</Fade>
		);
	}
}

export default CreateContent