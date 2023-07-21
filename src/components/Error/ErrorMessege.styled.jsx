import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: ${props => props.theme.space[6]}px;
  margin: ${props => props.theme.space[4]}px auto;
`;

export const Text = styled.p`
  max-width: 80%;
  color: ${props => props.theme.colors.text};
  text-shadow: ${props => props.theme.shadows.textShadow};

  text-align: center;
  
  font-family: ${props => props.theme.fonts.heading};
  font-size: ${props => props.theme.fontSizes.xl}
`;
