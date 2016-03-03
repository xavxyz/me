import React from 'react';
import Colorize from './Colorize.jsx';

export default class Header extends React.Component {
	styledLine () {
		return '## '+ this.props.text;
	}

	render () {
		return (
			<div className="hashline">
				<Colorize>{this.styledLine()}</Colorize>
			</div>
		)
	}
};

Header.propTypes = {
	text: React.PropTypes.string.isRequired
};