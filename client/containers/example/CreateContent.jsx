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

    this.state = {
      editorState: createEditorState(), // for empty content
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

  componentDidMount() {
    this.refs.editor.focus();
  }
	
	render() {
		const { editorState } = this.state;
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