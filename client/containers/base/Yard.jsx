import React from 'react'
import { Scrollbars } from 'react-custom-scrollbars'
import Radium from 'radium'

import AppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton'
import IconMenu from 'material-ui/IconMenu'
import MenuItem from 'material-ui/MenuItem'
import Divider from 'material-ui/Divider'
import Subheader from 'material-ui/Subheader'
import Drawer from 'material-ui/Drawer'
import { List, ListItem } from 'material-ui/List'
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert'
import FancyDivider from './FancyDivider'

import Nav from './Nav'
import Profile from '../user/Profile'

import { connect } from 'react-redux'
import { resize, toggleNavOpen } from 'store/modules/base/yard'
import { logout } from 'store/modules/user/auth'



@connect(
	state => ({
		base: state.base.yard.toJS()
	}),
	{ resize, toggleNavOpen, logout }
)
@Radium
export default class Main extends React.Component {
	static propTypes = {
		children: React.PropTypes.object,
		base: React.PropTypes.object
	}
	componentDidMount() {
		window.addEventListener('resize', this.resize)
	}
	componentWillUnmount() {
		window.removeEventListener('resize', this.resize)
	}

	resize = () => {
		this.props.resize(document.body.offsetWidth || window.innerWidth)
	}
	render() {
		let navStyle = {
			transition: 'all 450ms cubic-bezier(0.23, 1, 0.32, 1)',
			borderRight: '1px solid #eeeeee',
			backgroundColor: '#fafafa',
			boxShadow:'none'
		}

		

		let { base, children, logout, toggleNavOpen } = this.props
		let { navOpen, screenWidth } = base
		let docked = false

		if (screenWidth > 992) {
			docked = true
			navStyle.zIndex = 1000
			navStyle.top = 64
			navStyle.paddingBottom = 64
			navStyle.boxShadow = 'none'
		}
		return (
			<div>
				<AppBar 
					style={styles.appBar}
					titleStyle={styles.appBarTitle}
					iconStyleLeft={styles.appBarLeft}
					title="Dashboard" 
					showMenuIconButton={!docked}
					onLeftIconButtonTouchTap={toggleNavOpen}
					iconElementRight={
						<div>
							<Profile />
							<IconMenu 
								anchorOrigin={{horizontal: 'right', vertical: 'top'}}
	      				targetOrigin={{horizontal: 'right', vertical: 'top'}}
								iconButtonElement={
									<IconButton>
										<MoreVertIcon color="#00bcd4" />
									</IconButton>
								}
								menuStyle={styles.menuStyle}
							>
								<MenuItem primaryText="退出" onClick={logout} />
							</IconMenu>
						</div>
					}					
				/>
				<Drawer
					containerStyle={navStyle}
					style={styles.drawerStyle}
					docked={docked}
					open={docked || navOpen}
					onRequestChange={toggleNavOpen}
				>
					<Scrollbars
						autoHide
						autoHideTimeout={1000}
						autoHideDuration={200}
					>
					<FancyDivider text="client managemente"/>
						<Nav />

						
						<List>
						<FancyDivider text="server management"/>
          		<ListItem primaryText="GitHub" value="https://github.com/callemall/material-ui" />
          	</List>
		      </Scrollbars>
        </Drawer>
				<div style={styles.content}>
					{children}
				</div>
			</div>
		)
	}
}

const styles = {
	appBar: {
		position: 'fixed',
		//boxShadow: '0 1px 6px rgba(0, 0, 0, 0.12), 0 1px 4px rgba(0, 0, 0, 0.24)'
		backgroundColor: "#fafafa",
		borderBottom:'#eeeeee 1px solid',
		color: '#00bcd4',
		boxShadow: 'none'
	},
	appBarTitle: {
		color: '#00bcd4'
	},
	appBarLeft: {
		color: '#00bcd4'
	},
	drawerStyle: {
		boxShadow: 'none'
	},
	menuStyle: {
		width: 168
	},
	nav: {
		transition: 'all 450ms cubic-bezier(0.23, 1, 0.32, 1)',
		'@media (min-width: 992px)': {
			zIndex: 1000,
			top: 64,
			paddingBottom: 64,
			boxShadow: 'none'
		}
	},
	content: {
		paddingTop: 64,
		transition: 'all 450ms cubic-bezier(0.23, 1, 0.32, 1)',
		'@media (min-width: 768px)': {
			paddingLeft: 16,
			paddingRight: 16
		},
		'@media (min-width: 992px)': {
			paddingLeft: 32,
			paddingRight: 32,
			marginLeft: 256
		}
	}
}