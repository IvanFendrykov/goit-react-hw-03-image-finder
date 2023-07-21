import styled from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  grid-gap: ${props => props.theme.space[3]}px;
  place-content: center;

  margin: ${props => props.theme.space[2]}px auto;
  padding: ${props => props.theme.space[4]}px;
`;
export const Text = styled.p`
  margin: 0 auto;
  margin-bottom: ${props => props.theme.space[6]}px;
  max-width: 80%;
  color: ${props => props.theme.colors.text};
  text-shadow: ${props => props.theme.shadows.textShadow};

  text-align: center;
  
  font-family: ${props => props.theme.fonts.heading}
  font-size: ${props => props.theme.fontSizes.xl}
`;