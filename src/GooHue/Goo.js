import React, { PureComponent } from 'react';
import { TweenMax, TimelineMax, Sine, Linear } from 'gsap';

// utils

const getBetweenVal = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

const doRepeat = bubble => {
  TweenMax.set(bubble, {
    attr: {
      cx: getBetweenVal(240, 360),
    },
  });
};

class Goo extends PureComponent {
  constructor() {
    super();
    // codepen doesn't like "arrow functions methods"
    this.createBubbleTimeline = this.createBubbleTimeline.bind(this);
  }

  createBubbleTimeline(
    { cy, delay, repeatDelay, effect: { duration, jump } },
    index
  ) {
    const ref = this[`bubble${index}`];

    const bTl = new TimelineMax({
      repeat: -1,
      delay,
      repeatDelay,
      onRepeat: doRepeat,
      onRepeatParams: [ref],
    });
    bTl.timeScale(1);

    [{ offset: -1, ease: 'Out' }, { offset: 0, ease: 'In' }].reduce(
      (timeline, { offset, ease }) =>
        timeline.to(ref, duration, {
          attr: {
            // for some reason I don't understand, relative moment with += & -= + template litterals failed in CodePen... working on a create(d)-react-app with storybook 😮
            cy: cy + offset * jump,
          },
          ease: Sine[`ease${ease}`],
        }),
      bTl
    );

    return bTl;
  }

  componentDidMount() {
    // resets
    TweenMax.set('svg', {
      transformOrigin: '50% 50%',
    });

    const isDevice = /android|webos|iphone|ipad|ipod|blackberry/i.test(
      navigator.userAgent.toLowerCase()
    );

    if (!isDevice) {
      TweenMax.set(this.liquidBubblesGroup, {
        filter: 'url(#goo)',
        '-webkit-filter': 'url(#goo)',
      });
    }

    // set the liquid timelines
    const frontLiquidTimeline = new TimelineMax({ repeat: -1 });
    frontLiquidTimeline.to(this.liquidFront, 3, {
      x: -600,
      ease: Linear.easeNone,
    });

    const backLiquidTimeline = new TimelineMax({ repeat: -1 });
    backLiquidTimeline.from(this.liquidBack, 3, {
      x: -800,
      ease: Linear.easeNone,
    });

    // animate the bubbles
    const bubblesTimeline = this.props.bubbles.map(this.createBubbleTimeline);

    // set the main timeline
    const mainTimeline = new TimelineMax();

    [frontLiquidTimeline, backLiquidTimeline, ...bubblesTimeline].reduce(
      (main, tl) => main.add(tl, 0),
      mainTimeline
    );

    mainTimeline.timeScale(1);
  }

  render() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="150 260 300 210"
        width="100%"
      >
        <defs>
          <linearGradient
            id="frontGrad"
            gradientUnits="userSpaceOnUse"
            x1="300"
            y1="100"
            x2="300"
            y2="600"
          >
            <stop offset="0.5" stopColor={this.props.selectedStart} />
            <stop offset="0.8" stopColor={this.props.selectedEnd} />
          </linearGradient>
          <mask id="liquidMask">
            <path
              className="liquidMask"
              fill="#FFFFFF"
              d="M337,273.9V129h-74v144.8c-37,14.7-63.1,50.8-63.1,93c0,55.2,44.8,100,100,100 s100-44.8,100-100C400,324.7,373.9,288.6,337,273.9z"
            />
          </mask>
          <clipPath id="sphereMask">
            <circle
              fill="red"
              stroke="none"
              strokeWidth="0.4957"
              strokeMiterlimit="10"
              cx="300"
              cy="367"
              r="100"
            />
          </clipPath>
          <filter id="goo" colorInterpolationFilters="sRGB">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="7 7"
              result="blur"
            />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -7"
              result="cm"
            />

            <feComposite in="SourceGraphic" in2="cm" />
          </filter>
        </defs>
        <g
          ref={liquidMaskGroup => (this.liquidMaskGroup = liquidMaskGroup)}
          clipPath="url(#sphereMask)"
        >
          <path
            ref={liquidBack => (this.liquidBack = liquidBack)}
            fill={this.props.selectedEnd}
            d="M1199.9,365.1c-41.8,0-79.4,9.8-107.4,8.1c-38.9-2.3-54.5-16.4-83.6-19.9 c-29.1-3.5-71.5,3.4-110.4,1c-28-1.7-56.4-13.7-98.2-13.7c-41.8,0-70.2,12-98.2,13.7c-38.9,2.3-81.4-4.6-110.4-1 c-29.1,3.5-44.7,17.5-83.6,19.9c-28,1.7-65.7-8.2-107.5-8.2c-41.8,0-79.5,9.9-107.5,8.2c-38.9-2.3-54.5-16.3-83.6-19.9 c-29.1-3.5-72,3.4-110.9,1c-28-1.7-56.7-13.7-98.7-13.7V438h1200L1199.9,365.1z"
          />
          <g
            ref={liquidBubblesGroup =>
              (this.liquidBubblesGroup = liquidBubblesGroup)}
            fill="url(#frontGrad)"
            clipPath="url(#sphereMask)"
          >
            <path
              ref={liquidFront => (this.liquidFront = liquidFront)}
              fill="url(#frontGrad)"
              d="M1199.9,329.6c-44,0-70.6,29.4-96.4,33c-36.1,5.1-70.7-14.5-106.8-9c-25.8,3.7-52.4,33.3-96.4,33.3c-44,0-70.7-29.7-96.4-33.4c-36.1-5.1-70.7,14.4-106.8,9.2c-25.8-3.7-52.4-33.3-96.5-33.3c-44,0-70.7,29.7-96.5,33.3c-36.1,5.1-70.7-14.4-106.8-9.3c-25.8,3.7-52.4,33.3-96.5,33.3c-44,0-70.7-29.7-96.5-33.3 c-36.1-5.1-71.2,14.4-107.3,9.3c-25.8-3.7-52-33.3-97-33.3V533h1200L1199.9,329.6z"
            />
            {this.props.bubbles.map((bubble, index) =>
              <circle
                key={`bubble${index}`}
                ref={bubble => (this[`bubble${index}`] = bubble)}
                cx={bubble.cx}
                cy={bubble.cy}
                r={bubble.r}
              />
            )}
          </g>
          <path
            ref={pop => (this.pop = pop)}
            fill="none"
            stroke="none"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            d="M37.4,9c2.1-2.1,4.2-4.2,6.3-6.3 M2,44.4c2.2-2.2,4.5-4.5,6.7-6.7 M37.4,37.4c2.1,2.1,4.2,4.2,6.3,6.3 M2,2c2.2,2.2,4.5,4.5,6.7,6.7"
          />
        </g>
        <radialGradient
          id="shine"
          cx="280"
          cy="337"
          r="100"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.02" stopColor="#fff" stopOpacity="0.2" />

          <stop
            offset="1"
            stopColor={this.props.selectedEnd}
            stopOpacity="0.1"
          />
        </radialGradient>

        <circle
          opacity="1"
          fill="url(#shine)"
          stroke="none"
          strokeWidth="0.4957"
          strokeMiterlimit="10"
          cx="300"
          cy="367"
          r="100"
        />
      </svg>
    );
  }
}

export default Goo;
