import React from 'react';
import Header from './Header';
import PictureListItem from './PictureListItem';
import { toolbox } from './assets';
import './Stack.css';

const toolboxSubset = [
  { 
    picture: toolbox[0], 
    name: 'React',
    text: 'React is a clever library for structuring the and managing the data flow. Combined with Redux, a predictable state container for JavaScript apps, it is infinitely easier to build great web applications.'
  },
  { 
    picture: toolbox[1], 
    name: 'GraphQL',
    text: 'GraphQL presents new ways for clients to fetch data by focusing on the needs of product developers and client applications. Compared to traditional approaches such as REST, GraphQL is much more efficient.'
  },
  { 
    picture: toolbox[2], 
    name: 'Meteor',
    text: 'Meteor eases the pain of building great web applications when used as a the the centerpiece of an architectural stack. It allows to concentrate on developing business value and validate assumptions quickly.'
  },
];

const Stack = () => (
  <div className="Stack">
    <Header 
      main="Your business deserves the right tools"
      meta="You may recognize your needs in this subset of my toolbox."
      color="dark"
    />
    {toolboxSubset.map((item, i) => <PictureListItem { ...item } key={i} />)}
  </div>
);

export default Stack;
