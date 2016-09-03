import './fancyDivider.css'

import React from 'react'


export default class FancyDivider extends React.Component {
	render() {
		let { text } = this.props
		return (
			<section className="fancy-divider">
				<span>{text}</span>
			</section>
		)
	}
}