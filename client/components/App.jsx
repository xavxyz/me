import React from 'react';
import Data from '../lib/data';
import Divider from './Divider.jsx';
import Profilepic from './Profilepic.jsx';
import Header from './Header.jsx';
import Block from './Block.jsx';
import Link from './Link.jsx';
import Footer from './Footer.jsx';

export default class App extends React.Component {
	renderPicture () {
		const props = Data.picture;
		return <Profilepic size={props.size} img={props.img} />
	}

	renderHeaders () {
		return (
			Data.headers.map(header => <Header key={header._id} text={header.text} />)
		);
	}

	renderBlocks () {
		return Data.blocks.map((block) => {

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
		return Data.links.map(link => <Link key={link._id} service={link.service} account={link.account} />);
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

				<Footer />

			</div>
		)
	}
};