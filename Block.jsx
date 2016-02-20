Block = React.createClass({
	propTypes: {
		company: React.PropTypes.string.isRequired,
		job: React.PropTypes.string.isRequired,
		slogan: React.PropTypes.string.isRequired,
		description: React.PropTypes.string.isRequired
	},

	render () {
		return (
			<div className="block">
				<div className="header">{this.props.company}<span className="green">,</span> {this.props.job} <span className="green">|</span> <Colorize>{this.props.slogan}</Colorize></div>
				<div>
					<Colorize>{this.props.description}</Colorize>
				</div>
				<Divider />
			</div>
		)
	}
});