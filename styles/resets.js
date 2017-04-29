import colors from './colors';

export default `
  *, *:before, *:after {
    box-sizing: border-box;
  }
  
  @import url('https://fonts.googleapis.com/css?family=Lato:700');
  
  body {
    font-family: 'Lato', sans-serif;
    margin: 0;
    padding: 0;
    width: 100vw;
    height: 100vh;
    color: ${colors.darkBlue};
    background-color: ${colors.white};
  }
`;
