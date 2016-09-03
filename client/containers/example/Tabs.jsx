import './tabs.css'
import React from 'react'
import Paper from 'material-ui/Paper'
import { Toolbar, ToolbarTitle } from 'material-ui/Toolbar'
import { Tab, Tabs } from 'material-ui/Tabs'

import { default as Fade } from 'react-fade'

let dependencies = [{
	logo: '/public/img/stylus.png',
	title: 'styluszzz',
	content: 'Expressive, robust, feature-rich CSS language built for nodejs'
}, {
	logo: '/public/img/grunt.png',
	title: 'Grunt',
	content: 'The JavaScript Task Runner'
}, {
	logo: '/public/img/pm2.png',
	title: 'pm2',
	content: 'Production process manager for Node.js apps with a built-in load balancer'
}, {
	logo: '/public/img/webpack.png',
	title: 'webpack',
	content: 'A bundler for javascript and friends.'
}, {
	logo: '/public/img/label.png',
	title: 'Bable',
	content: 'Babel is a compiler for writing next generation JavaScript.'
}, {
	logo: '/public/img/normalize.png',
	title: 'normalize.css',
	content: 'A modern alternative to CSS resets'
}, {
	logo: '/public/img/gulp.png',
	title: 'Gulp.js',
	content: 'The streaming build system'
}, {
	logo: '/public/img/bootstrap.png',
	title: 'Bootstrap.js',
	content: 'The most popular HTML, CSS, and JavaScript framework for developing responsive, mobile first projects on the web.'
}, {
	logo: '/public/img/d3.png',
	title: 'D3.js',
	content: 'A JavaScript library for manipulating documents based on data'
}, {
	logo: '/public/img/material-ui.png',
	title: 'Material ui',
	content: 'React Component that Implement Google\'s Material Design'
}, {
	logo: '/public/img/react.png',
	title: 'React',
	content: 'A JavaScript library for building user interfaces'
}, {
	logo: '/public/img/express.png',
	title: 'Express',
	content: 'Fast, unopinionated, minimalist web framework for Node.js'
}]

export default class UserList extends React.Component {
	render() {
		return (
			<Fade duration={0.3}>
			<Paper className="f-example-tabs" zDepth={1}>
				<Toolbar style={{backgroundColor: '#fff', borderBottom: '1px solid #EBEBEB'}}>
					<ToolbarTitle text="Dependencies" />
				</Toolbar>
				<Tabs>
					<Tab label="Develop">
						<ul className="list-unstyled user-list-wrap">
							{dependencies.map((item, index) => {
								return (
									<li key={index}>
										<header style={{backgroundImage: `url(${item.logo})`}} />
										<section>
											<div className="title text-ellipsis">{item.title}</div>
											<p className="text-ellipsis">{item.content}</p>
										</section>
									</li>
								)
							})}
						</ul>
					</Tab>
					<Tab label="Production">
					</Tab>
				</Tabs>
			</Paper>
			</Fade>
		);
	}
}