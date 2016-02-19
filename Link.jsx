String.prototype.capitalizeFirstLetter = function() {
	return this.charAt(0).toUpperCase() + this.slice(1);
};

Link = React.createClass({
	propTypes: {
		service: React.PropTypes.string.isRequired,
		account: React.PropTypes.string.isRequired
	},

	getServiceInfo(service) {
		let info = {};

		switch(service) {
			case 'twitter':
				info = {
					className: 'tw',
					text: 'Follow me on'
				};
				break;
			case 'github':
				info = {
					className: 'gh',
					text: 'Fork me on'
				};
				break;
			case 'linkedin':
				info = {
					className: 'in',
					text: 'Contact me on'
				};
				break;
			case 'facebook':
				info = {
					className: 'fb',
					text: 'Poke me on'
				};
				break;
			case 'vimeo':
				info = {
					className: 'vm',
					text: 'Watch me on'
				};
				break;
		}

		info.url = `https://${service}.com/`;
		info.name = service;

		return info;
	},

	render () {
		const info = this.getServiceInfo(this.props.service);
		const url = info.url + this.props.account;
		const fa = `fa fa-${info.name}`;

		return (
			<div className="link">
				<span className={info.className}><a href={url} target="_blank"><i className={fa} /></a></span> {info.text} <a href={url} target="_blank">{info.name.capitalizeFirstLetter()}</a>
			</div>
		);
	}
});