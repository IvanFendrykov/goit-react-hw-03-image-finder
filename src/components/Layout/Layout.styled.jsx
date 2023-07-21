import styled from 'styled-components';

export const Container = styled.main`
  display: grid;
  grid-gap: ${props => props.theme.space[4]}px;
  place-content: center;

  margin: ${props => props.theme.space[2]}px auto;
  padding: ${props => props.theme.space[4]}px;
`;
