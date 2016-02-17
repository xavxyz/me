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
				<div className="header">{this.props.company}<span className="green">,</span> {this.props.job} <span className="green">|</span> {this.props.slogan}</div>
				<div>
					{this.props.description}
				</div>
			</div>
		)
	}
});