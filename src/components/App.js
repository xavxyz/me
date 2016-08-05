import React from 'react';
import Data from '../lib/data';
import Divider from './Divider.js';
import Profilepic from './Profilepic.js';
import Header from './Header.js';
import Block from './Block.js';
import Link from './Link.js';
import Footer from './Footer.js';

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