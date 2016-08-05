import React from 'react';
import Colorize from './Colorize.js';

export default class Footer extends React.Component {
	render() {
		return (
			<div style={{'textAlign': 'center', 'marginTop': '15px'}}>
				Made with <i className="purple_light fa fa-heart"/> with <a href="https://github.com/facebook/react">React</a>, fork the <a href="https://github.com/xavcz/cazalot-bros" target="_blank">repo</a>!
			</div>
		);
	}
};