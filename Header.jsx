Header = React.createClass({
	propTypes: {
		text: React.PropTypes.string.isRequired
	},

	render () {
		return (
			<div className="hashline">
				<span className="green pounds">##</span> {this.props.text}
			</div>
		)
	}
});