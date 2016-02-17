String.prototype.capitalizeFirstLetter = function() {
	return this.charAt(0).toUpperCase() + this.slice(1);
};

String.prototype.cutFirstLetter = function() {
	return this.charAt(0);
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
				}
				break;
			case 'github':
				info = {
					className: 'gh',
					text: 'Follow me on'
				}
				break;
		}

		info.url = `https://${service}.com/`;
		info.name = service.capitalizeFirstLetter();
		info.firstLetter = service.cutFirstLetter();

		return info;
	},

	render () {
		const service = this.getServiceInfo(this.props.service);
		const url = service.url + this.props.account;

		return (
			<div className="link">
				<span className={service.className}><a href={url} target="_blank">[{service.firstLetter}]</a></span> {service.text} <a href={url} target="_blank">{service.name}</a>
			</div>
		);
	}
});