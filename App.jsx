
App = React.createClass({
	getHeaders () {
		return [
			{ _id: 1, text: 'Xavier Cazalot 0.1' },
			{ _id: 2, text: 'Entrepreneur. Hacker. Frenchie.' },
			{ _id: 3, text: 'Stalk me on Twitter' }
		]
	},

	getBlocks () {
		return [
			{
				_id: 1,
				company: 'Freelance',
				job: 'Dev MeteorJS',
				slogan: 'Value Proposition Building',
				description: "I'm an entrepreneur and a freelance developer working with MeteorJS, a client-server-database framework which allows to concentrate on developing business value. I help entrepreneurs making remarkable products for targeted customers."
			},
			{
				_id: 2,
				company: 'Startup42',
				job: 'Program Manager',
				slogan: 'From Hackers To Founders',
				description: "Startup42 is a non-profit accelerator designed by EPITA to offer hacker teams with a good idea the skills and opportunities they need to become startup founders. I've been running the daily operational jobs of the program during the 6th session with Maxime Pico."
			},
			{
				_id: 3,
				company: 'Me',
				job: 'Good fellow',
				slogan: 'Hack, Learn, Make',
				description: "Currently living in Paris, France. Originally from the south of France. Slack evangelist. I'm a crazy backpacker, often called beatnik. I love everything related to the Web, Hacking, Slack and Traveling. Contact me if I can help you!"
			},
		];
	},

	getLinks () {
		return [
			{
				_id: 1,
				service: 'twitter',
				account: 'xav_cz'
			},
			{
				_id: 2,
				service: 'github',
				account: 'xavcz'
			},
			{
				_id: 3,
				service: 'linkedin',
				account: 'in/xaviercazalot'
			},
			{
				_id: 4,
				service: 'facebook',
				account: 'xavizalote'
			},
			{
				_id: 5,
				service: 'vimeo',
				account: 'sakados'
			}
		];
	},

	renderHeaders () {
		return (
			this.getHeaders().map(header => <Header key={header._id} text={header.text} />)
		);
	},

	renderBlocks () {
		return this.getBlocks().map((block) => {

			return <Block
					key={block._id}
					company={block.company}
					job={block.job}
					slogan={block.slogan}
					description={block.description}
				/>;
		});
	},

	renderLinks () {
		return this.getLinks().map(link => <Link key={link._id} service={link.service} account={link.account} />);
	},

	render () {
		return (
			<div className="main">

				{this.renderHeaders()}

				<Divider />

				{this.renderBlocks()}

				{this.renderLinks()}

				<div style={{'textAlign': 'center', 'marginTop': '10px'}}>
					Made with <i className="purple_light fa fa-heart" /> with Meteor and React, check the <a href="https://github.com/xavcz/cazalot-bros" target="_blank">repo</a>.
				</div>

			</div>
		)
	}
});