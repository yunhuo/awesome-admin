import React from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import IconMenu from 'material-ui/IconMenu'
import MenuItem from 'material-ui/MenuItem'
import FlatButton from 'material-ui/FlatButton'
import IconButton from 'material-ui/IconButton'
import Paper from 'material-ui/Paper'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import { Toolbar, ToolbarGroup, ToolbarTitle } from 'material-ui/Toolbar'
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table'

import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert'
import ContentAdd from 'material-ui/svg-icons/content/add'




let dependencies = [{
	logo: '/img/stylus.png',
	title: 'stylus',
	content: 'Expressive, robust, feature-rich CSS language built for nodejs'
}, {
	logo: '/img/grunt.png',
	title: 'Grunt',
	content: 'The JavaScript Task Runner'
}, {
	logo: '/img/pm2.png',
	title: 'pm2',
	content: 'Production process manager for Node.js apps with a built-in load balancer'
}, {
	logo: '/img/webpack.png',
	title: 'webpack',
	content: 'A bundler for javascript and friends.'
}]

let styles = {
	root: {
		marginTop: 24,
		paddingBottom: 24,
	},
	li: {
		position: 'relative',
		minHeight: 72,
		borderBottom: '1px solid rgb(224, 224, 224)',
	}
}



export default class List extends React.Component {
	render() {
		return (
			<Paper style={styles.root} zDepth={1}>

				<Toolbar style={{
					position: 'relative',
					marginTop: 24,
					backgroundColor: 'initial',
					borderBottom: '1px solid rgb(224, 224, 224)',
				}}>
					<ToolbarTitle text="服务器管理" />
					<ToolbarGroup float="right" style={{
						position: 'absolute',
						top: 27,
						right: 20,
						zIndex: 1,
					}}>
						<FloatingActionButton secondary={true}>
			      <ContentAdd />
			    </FloatingActionButton>
					</ToolbarGroup>
				</Toolbar>
				<Table>
    <TableHeader>
      <TableRow>
        <TableHeaderColumn>ID</TableHeaderColumn>
        <TableHeaderColumn>Name</TableHeaderColumn>
        <TableHeaderColumn>Status</TableHeaderColumn>
        <TableHeaderColumn>Op</TableHeaderColumn>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow>
        <TableRowColumn>1</TableRowColumn>
        <TableRowColumn>John Smith</TableRowColumn>
        <TableRowColumn>Employed</TableRowColumn>
        <TableRowColumn> <IconMenu
      iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
      anchorOrigin={{horizontal: 'left', vertical: 'top'}}
      targetOrigin={{horizontal: 'left', vertical: 'top'}}
    >
      <MenuItem primaryText="查看" />
      <MenuItem primaryText="修改" />
      <MenuItem primaryText="删除" />
      <MenuItem primaryText="取消" />
    </IconMenu></TableRowColumn>
      </TableRow>
      <TableRow>
        <TableRowColumn>2</TableRowColumn>
        <TableRowColumn>Randal White</TableRowColumn>
        <TableRowColumn>Unemployed</TableRowColumn>
        <TableRowColumn><IconMenu
      iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
      anchorOrigin={{horizontal: 'left', vertical: 'top'}}
      targetOrigin={{horizontal: 'left', vertical: 'top'}}
    >
      <MenuItem primaryText="查看" />
      <MenuItem primaryText="修改" />
      <MenuItem primaryText="删除" />
      <MenuItem primaryText="取消" />
    </IconMenu></TableRowColumn>
      </TableRow>
      <TableRow>
        <TableRowColumn>3</TableRowColumn>
        <TableRowColumn>Stephanie Sanders</TableRowColumn>
        <TableRowColumn>Employed</TableRowColumn>
        <TableRowColumn><IconMenu
      iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
      anchorOrigin={{horizontal: 'left', vertical: 'top'}}
      targetOrigin={{horizontal: 'left', vertical: 'top'}}
    >
      <MenuItem primaryText="查看" />
      <MenuItem primaryText="修改" />
      <MenuItem primaryText="删除" />
      <MenuItem primaryText="取消" />
    </IconMenu></TableRowColumn>
      </TableRow>
      <TableRow>
        <TableRowColumn>4</TableRowColumn>
        <TableRowColumn>Steve Brown</TableRowColumn>
        <TableRowColumn>Employed</TableRowColumn>
        <TableRowColumn><IconMenu
      iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
      anchorOrigin={{horizontal: 'left', vertical: 'top'}}
      targetOrigin={{horizontal: 'left', vertical: 'top'}}
    >
      <MenuItem primaryText="查看" />
      <MenuItem primaryText="修改" />
      <MenuItem primaryText="删除" />
      <MenuItem primaryText="取消" />
    </IconMenu></TableRowColumn>
      </TableRow>
    </TableBody>
  </Table>
  
				<div style={{marginTop: 12, marginRight:15, textAlign: 'center'}}>
					
				</div>
			</Paper>
		);
	}
}