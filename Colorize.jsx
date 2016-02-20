// my own touch on q42:react-markdown package (https://github.com/Jpunt/meteor-react-markdown/)
Colorize = React.createClass({
	propTypes: {
		children: React.PropTypes.string.isRequired, // TODO colorize children as array (cf. block header)
		element: React.PropTypes.string,
		className: React.PropTypes.string,
		markdown: React.PropTypes.bool
	},

	getDefaultProps() {
		return {
			element: 'span'
		};
	},

	colorizer() {
		return this.props.children.replace(/##|,|\. |!|\|/g, char => `<span class="green pounds">${char}</span>`);
	},

	render() {
		const textRendered = this.props.markdown ? marked(this.colorizer()) : this.colorizer()

		return (
			<this.props.element
				className={ this.props.className || this.constructor.displayName }
				dangerouslySetInnerHTML={ { __html: textRendered } }
			/>
		);
	}
});