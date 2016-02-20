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
				<div className="header">{this.props.company}<Colorize>,</Colorize> {this.props.job} <Colorize>|</Colorize> <Colorize>{this.props.slogan}</Colorize></div>
				<div>
					<Colorize markdown={true}>{this.props.description}</Colorize>
				</div>
				<Divider />
			</div>
		)
	}
});