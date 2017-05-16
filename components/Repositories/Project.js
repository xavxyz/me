import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import ImageBlock from './ImageBlock';
import InfoBlock from './InfoBlock';
import GithubMetrics from './GithubMetrics';

const Project = (
  {
    name,
    description,
    image,
    stars,
    forks,
    url,
  }
) => (
  <LinkToGithub href={url} target="_blank">
    <Card>
      <ImageBlock image={image} />
      <InfoBlock name={name} description={description} />
      <GithubMetrics stars={stars} forks={forks} />
    </Card>
  </LinkToGithub>
);

Project.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  stars: PropTypes.string.isRequired,
  forks: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

const LinkToGithub = styled.a``;

const Card = styled.div``;

export default Project;
