import React from 'react';
import './Header.css';

const animatedWordInSentence = (sentence, wordIndex) => {
  // break the sentence in an array
  const brokenSentence = sentence.split(' ');
  
  // transform the desired word with individual spans around each letter
  const modifiedWord = Array.from(brokenSentence[wordIndex], letter => `<span>${letter}</span>`);
  
  // recompose it with spaces!
  const composedSentence = [
    ...brokenSentence.slice(0, wordIndex), 
    modifiedWord.join(''), // recompose the animated word too!
    ...brokenSentence.slice(wordIndex + 1),
  ].join(' ');

  // hey! you read this code, right? if you know a way to avoid this 'dangerouslySetInnerHTML', tell me! ;)
  return { __html: composedSentence };
}

const Header = ({ main, meta, color, animatedWordIndex }) => (
  <div className={`Header Header--${ color }`}>
    <div className="Header__main" dangerouslySetInnerHTML={ animatedWordInSentence(main, animatedWordIndex) } />
    <span className="Header__meta">{ meta }</span>
  </div>
);

export default Header;
