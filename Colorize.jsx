// my own touch on q42:react-markdown package (https://github.com/Jpunt/meteor-react-markdown/)
Colorize = React.createClass({
	propTypes: {
		children: React.PropTypes.string.isRequired, // TODO colorize children as array (cf. block header)
		element: React.PropTypes.string,
		className: React.PropTypes.string,
	},

	getDefaultProps() {
		return {
			element: 'span'
		};
	},

	colorizer(text) {
		debugger
		return text.replace(/,|\.|!/g, char => `<span class="green">${char}</span>`);
	},

	render() {
		return (
			<this.props.element
				className={ this.props.className || this.constructor.displayName }
				dangerouslySetInnerHTML={ { __html: this.colorizer(this.props.children) } }
			/>
		);
	}
});