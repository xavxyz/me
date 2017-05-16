import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import colors from '../../styles/colors';

const ImageBlock = ({ image, name }) => (
  <Block>
    <Image src={image} alt={name} />
  </Block>
);

ImageBlock.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

const Block = styled.div`
  border-bottom: .2rem solid ${colors.transparentWhite};
  height: 12.6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 2;
`;

const Image = styled.img`
  width: 8rem;
  height: 8rem;
  border-radius: .2rem;
`;

export default ImageBlock;
