import React, { Children, cloneElement } from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import colors from '../../../styles/colors';

const Planetoid = (
  {
    positionAngle = 0,
    positionRadius = 0,
    radius,
    children,
    orbitAnimationDuration = null,
  }
) => {
  // reference values
  const angleRadian = positionAngle * Math.PI / 180;
  const reference = [{ axis: 'x', fn: 'cos' }, { axis: 'y', fn: 'sin' }];

  // from the reference and the props, create a circle center svg object
  const [cx, cy] = reference.map(({ fn }) => 50 - positionRadius * Math[fn](angleRadian));

  const [cxSymmetric, cySymmetric] = reference.map(
    ({ fn }) => 50 - positionRadius * Math[fn](angleRadian + Math.PI)
  );

  const symmetricTranslation = keyframes`
    0%,100% {
      transform: translate(${50 + cxSymmetric}px, ${50 + cySymmetric}px);
      ${/* transform: translate(50px, 50px); */ ''}
    }
    50% {
      transform: translate(${50 + cx}px, ${50 + cy}px);
    }
  `;

  const reliefTranslation = keyframes`
    0% { z-index:1; }
    49% { z-index:1; }
    50% { z-index:3; }
    99% { z-index:3; }
    100% { z-index:1; }
  `;

  const appearsIn = keyframes`
    0% { opacity: 0; }
    100% { opacity: 1; }
  `;

  const PlanetoidCircle = styled.circle`
    ${orbitAnimationDuration && `animation: ${symmetricTranslation} ${orbitAnimationDuration}s ease-in-out infinite 2s;`}
  `;

  const AbsoluteWrapper = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 2;
    ${orbitAnimationDuration && `animation: ${reliefTranslation} ${orbitAnimationDuration}s ease-in-out infinite 2s;`}
  `;

  const OpacityWrapper = styled.div`
    ${orbitAnimationDuration && `animation: ${appearsIn} .4s ease-in-out 2s;`}
  `;

  const SvgContent = styled.svg`
    width: 100%;
    height: 100%;
    fill: ${colors.black};
    stroke: ${colors.lightBlue};
    stroke-width: 0.2vw;
  `;

  const planetoidDefinition = { cx, cy, r: radius };
  const planetoidProps = positionRadius ? { r: radius } : planetoidDefinition;

  const viewBoxOffset = orbitAnimationDuration ? 50 : 0;

  return (
    <OpacityWrapper>
      <AbsoluteWrapper>
        <SvgContent
          xmlns="http://www.w3.org/2000/svg"
          viewBox={`${viewBoxOffset} ${viewBoxOffset} 100 100`}
        >
          <PlanetoidCircle {...planetoidProps} />
          {children && Children.map(children, child => cloneElement(child, planetoidDefinition))}
        </SvgContent>
      </AbsoluteWrapper>
    </OpacityWrapper>
  );
};

Planetoid.propTypes = {
  radius: PropTypes.number.isRequired,
  positionAngle: PropTypes.number,
  positionRadius: PropTypes.number,
  animateInOrbit: PropTypes.bool,
  children: PropTypes.node,
  orbitAnimationDuration: PropTypes.number,
};

export default Planetoid;
