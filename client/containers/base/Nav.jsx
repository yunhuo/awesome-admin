import React from 'react'
import { List, ListItem, MakeSelectable } from 'material-ui/List'

import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import { closeNav } from 'store/modules/base/yard'

let SelectableList = MakeSelectable(List)

const navItems = [{
	text: 'Home',
	value: '/'
}, {
	text: 'Create Content',
	value: '/example/create-content'
},  {
	text: 'Bar Chart',
	value: '/example/bar-chart'
}, {
	text: 'List',
	value: '/example/list'
}, {
	text: 'Tabs',
	value: '/example/tabs'
},{
	text: 'Todo List',
	value: '/example/todo-list'
},{
	text: 'Charts',
	children: [{
		text: 'Bar Chart',
		value: '/example/x'
	}, {
		text: 'Line Chart',
		value: '/example/x'
	}, {
		text: 'Pie Chart',
		value: '/example/x'
	}, {
		text: 'Area Chart',
		value: '/example/x'
	}]
}]

@connect(
	state => ({
		route: state.route,
	}), {
		push, closeNav
	}
)
export default class Nav extends React.Component {
	handleRequestChangeList = (event, value = '/') => {
		this.props.push(value)
		this.props.closeNav()
	}

	renderNav = (navItems) => {
		return navItems.map((item, index) => {
			let { text = '', value = '', children = [] } = item
			return children.length ? (
				<ListItem
					key={index}
	        primaryText={text}
	        primaryTogglesNestedList={true}
	        nestedItems={this.renderNav(children)}
	      />
			) : (
				<ListItem 
					key={index} 
					primaryText={text}
					value={value}
				/>
			)
		})
	}

	render() {
		let { route } = this.props
		return (
			<SelectableList 
				value={route.location.pathname}
				onChange={this.handleRequestChangeList}
				selectedItemStyle={{
					backgroundColor: 'rgba(0,0,0,0.2)',
					color: 'rgb(255, 64, 129)'
				}}
			>
				{this.renderNav(navItems)}
			</SelectableList >
		)
	}
}
