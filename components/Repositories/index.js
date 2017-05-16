import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'react-apollo';
import styled from 'styled-components';
import Head from './Head';
import Project from './Project';
import REPOSITORIES_QUERY from './repositories.graphql';

const Repositories = ({ repositories = [], error }) => !error &&
<Wrapper>
  <Head />
  <FlexWrap>
    {repositories
      // create two rows so that repositories are shown 4x1, 2x2, 1x4 depending on screen size
      .reduce(
        (matrix, project, index) => {
          const [firstRow, secondRow] = matrix;

          const rowToModify = index % 2 === 0 ? secondRow : firstRow;

          rowToModify.push(project);

          return [firstRow, secondRow];
        },
        [[], []] // note: should create the matrix based on the repositories length
      )
      .map((row, index) => (
        <Row key={`row-${index}`}>
          {row.map(project => <Project key={project.id} {...project} />)}
        </Row>
      ))}
  </FlexWrap>
</Wrapper>;

Repositories.propTypes = {
  repositories: PropTypes.array,
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FlexWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 6rem;
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export default graphql(REPOSITORIES_QUERY, {
  props: ({ data: { repositories, error } }) => ({ repositories, error }),
})(Repositories);
