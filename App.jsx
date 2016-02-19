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
				description: 'Yo, i job!'
			},
			{
				_id: 2,
				company: 'Startup42',
				job: 'Program Manager',
				slogan: 'From Hackers To Founders',
				description: 'Y bla bla bla'
			},
			{
				_id: 3,
				company: 'Me',
				job: 'Good fellow',
				slogan: 'Hack, Learn, Make',
				description: 'Hello world!'
			},
		];
	},

	getLinks () {
		return [
			{
				_id: 1,
				service: 'twitter',
				account: 'xavizalote'
			},
			{
				_id: 2,
				service: 'github',
				account: 'xavizalote'
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
			</div>
		)
	}
});