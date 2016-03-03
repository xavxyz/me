import React from 'react';
import Divider from './Divider.jsx';
import Profilepic from './Profilepic.jsx';
import Header from './Header.jsx';
import Block from './Block.jsx';
import Link from './Link.jsx';

export default class App extends React.Component {
	getPicture () {
		return {
			size: '100px',
			picture: 'https://pbs.twimg.com/profile_images/704641906370879488/9crxlIge_400x400.jpg'
		};
	}

	getHeaders () {
		return [
			{ _id: 1, text: 'Xavier Cazalot <span class="purple_light">0</span><span class="purple">.</span><span class="purple_light">3</span>' },
			{ _id: 2, text: 'Hacker. Entrepreneur. Backpacker. ' },
			{ _id: 3, text: 'Stalk me on <a href="https://twitter.com/xav_cz" target="_blank">Twitter</a>' }
		]
	}

	getBlocks () {
		return [
			{
				_id: 1,
				company: 'Freelance',
				job: 'Dev MeteorJS',
				slogan: 'Value Proposition Building',
				description: "I am an entrepreneur and a freelance developer working with [MeteorJS](https://www.meteor.com), a client-server-database framework which allows to concentrate on developing business value. I help entrepreneurs making [remarkable products](https://en.wikipedia.org/wiki/Purple_Cow:_Transform_Your_Business_by_Being_Remarkable) for targeted customers. "
			},
			{
				_id: 2,
				company: 'Startup42',
				job: 'Program Manager',
				slogan: 'From Hackers To Founders',
				description: "[Startup42](http://www.startup42.org) is a non-profit accelerator designed by [EPITA](http://www.epita.fr/international/) to offer hacker teams with a good idea the skills and opportunities they need to become startup founders. I have been running the daily operational jobs of the program during the 6th session with [Maxime Pico](https://linkedin.com/in/maximepico). "
			},
			{
				_id: 3,
				company: 'Me',
				job: 'Good fellow',
				slogan: 'Hack, Learn, Make',
				description: "Established in Paris, France, if not traveling [around the world](https://vimeo.com/sakados). Originally from the south of France. I'm also partner in a [skateboard company](http://www.le-shape.com). I love everything related to Hacking, [Slack](https://slack.com), Skating and Traveling. Contact me if I can help you!"
			},
		];
	}

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
	}

	renderPicture () {
		const props = this.getPicture();
		return <Profilepic size={props.size} picture={props.picture} />
	}

	renderHeaders () {
		return (
			this.getHeaders().map(header => <Header key={header._id} text={header.text} />)
		);
	}

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
	}

	renderLinks () {
		return this.getLinks().map(link => <Link key={link._id} service={link.service} account={link.account} />);
	}

	render () {
		analytics.page('render personal page');

		return (
			<div className="main">

				{this.renderPicture()}

				{this.renderHeaders()}

				<Divider />

				{this.renderBlocks()}

				{this.renderLinks()}

				<div style={{'textAlign': 'center', 'marginTop': '15px'}}>
					Made with <i className="purple_light fa fa-heart" /> with <a href="https://github.com/meteor">Meteor 1.3</a> and <a href="https://github.com/facebook/react">React</a>.<br />Create your own page, fork the <a href="https://github.com/xavcz/cazalot-bros" target="_blank">repo</a>!
				</div>

			</div>
		)
	}
};