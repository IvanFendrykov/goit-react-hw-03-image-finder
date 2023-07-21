import styled from 'styled-components';

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: ${props => props.theme.space[4]}px;
  place-content: center;

  max-width: calc(100vw - 48px);

  margin: ${props => props.theme.space[3]}px auto;
  padding: ${props => props.theme.space[4]}px;
`;
