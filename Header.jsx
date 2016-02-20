Header = React.createClass({
	propTypes: {
		text: React.PropTypes.string.isRequired
	},

	styledLine () {
		return '## '+ this.props.text;
	},

	render () {
		return (
			<div className="hashline">
				<Colorize>{this.styledLine()}</Colorize>
			</div>
		)
	}
});