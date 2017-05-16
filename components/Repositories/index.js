import React from 'react';
import PropTypes from 'prop-types';
import { graphql, gql } from 'react-apollo';
import styled from 'styled-components';
import Project from './Project';
import REPOSITORIES_QUERY from './repositories.graphql';

const Repositories = ({ repositories = [] }) => (
  <Wrapper>
    {repositories.map(project => <Project key={project.id} {...project} />)}
  </Wrapper>
);

Repositories.propTypes = {
  repositories: PropTypes.array,
};

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export default graphql(REPOSITORIES_QUERY, {
  props: ({ data: { repositories } }) => ({ repositories }),
})(Repositories);
