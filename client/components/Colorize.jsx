// my own touch on q42:react-markdown package (https://github.com/Jpunt/meteor-react-markdown/)
import React from 'react';

export default class Colorize extends React.Component {
	colorizer() {
		return this.props.children.replace(/##|,|\. |!|\|/g, char => `<span class="green pounds">${char}</span>`);
	}

	render() {
		const textRendered = this.props.markdown ? marked(this.colorizer()) : this.colorizer();

		return (
			<span
				className={ this.props.className || this.constructor.displayName }
				dangerouslySetInnerHTML={ { __html: textRendered } }
			/>
		);
	}
};

Colorize.propTypes = {
	children: React.PropTypes.string.isRequired, // TODO colorize children as array (cf. block header)
	className: React.PropTypes.string,
	markdown: React.PropTypes.bool
};