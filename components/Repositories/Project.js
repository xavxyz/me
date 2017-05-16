import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import colors from '../../styles/colors';
import ImageBlock from './ImageBlock';
import InfoBlock from './InfoBlock';
import GithubMetrics from './GithubMetrics';

const Project = (
  {
    url,
    image,
    name,
    description,
    stars,
    forks,
  }
) => (
  <LinkToGithub href={url} target="_blank">
    <Card>
      <ImageBlock image={image} name={name} />
      <InfoBlock name={name} description={description} />
      <GithubMetrics stars={stars} forks={forks} />
    </Card>
  </LinkToGithub>
);

Project.propTypes = {
  url: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  stars: PropTypes.number.isRequired,
  forks: PropTypes.number.isRequired,
};

const LinkToGithub = styled.a`
  -webkit-tap-highlight-color: rgba(0,0,0,0);
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  
  border: .2rem solid ${colors.transparentWhite};
  border-radius: .4rem;
  width: 27rem;
  height: 29rem;
  margin: 1rem;

  &:hover {
    border-color: ${props => props.theme.main};
  }
`;

export default Project;
