App = React.createClass({
	getHeaders () {
		return [
			{ _id: 1, text: 'Xavier Cazalot 0.1' },
			{ _id: 2, text: 'Entrepreneur. Hacker. Frenchie.' },
			{ _id: 3, text: 'Stalk me on Twitter' }
		]
	},

	renderHeaders () {
		return (
			this.getHeaders().map(header => <Header key={header._id} text={header.text} />)
		);
	},

	renderDivider () {
		return <span className="divider">---</span>
	},

	getBlocks () {
		return [
			{
				_id: 1,
				company: 'Freelance',
				job: 'Dev MeteorJS',
				slogan: 'Remarkable Products for Targeted Customers',
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
			}
		];
	},

	renderLinks () {
		return this.getLinks().map(link => <Link key={link._id} service={link.service} account={link.account} />);
	},

	render () {
		return (
			<div className="main">

				{this.renderHeaders()}

				{this.renderDivider()}

				{this.renderBlocks()}

				{this.renderDivider()}

				{this.renderLinks()}
			</div>
		)
	}
});