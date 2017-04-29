import React, { PropTypes } from 'react';
import styled from 'styled-components';
import { PieChart, Pie, Cell, ResponsiveContainer as RechartsContainer } from 'recharts';
import { compose, withState, withHandlers } from 'recompose';
import colors from '../styles/colors';

const Wheel = ({ recommendations, selectRecommendation, activeIndex }) => {
  // add a value to the data to make it compatible with the pie chart
  const chartCompatibleData = recommendations.map(recommendation => ({
    ...recommendation,
    value: 1,
  }));

  return (
    <ResponsiveWrapper>
      <RechartsContainer width="100%" height="100%">
        <PieChart>
          <Pie
            activeIndex={activeIndex}
            data={chartCompatibleData}
            cx="50%"
            cy="50%"
            innerRadius="60%"
            outerRadius="80%"
            paddingAngle={5}
            fill={colors.blue}
            strokeFill={colors.blue}
          >
            {chartCompatibleData.map(entry => (
              <Cell key={entry._id} onMouseEnter={selectRecommendation} />
            ))}
          </Pie>
        </PieChart>
      </RechartsContainer>
    </ResponsiveWrapper>
  );
};

Wheel.propTypes = {
  recommendations: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string,
      name: PropTypes.string,
      job: PropTypes.string,
      avatar: PropTypes.string,
      text: PropTypes.string,
    })
  ),
  selectRecommendation: PropTypes.func,
  activeIndex: PropTypes.number,
};

const ResponsiveWrapper = styled.div`
  width: 25vw;
  height: 25vw;
`;

export default compose(
  withState('activeIndex', 'selectIndex', 0),
  withHandlers({
    selectRecommendation: ({ selectIndex }) => (data, index) => selectIndex(index),
  })
)(Wheel);
