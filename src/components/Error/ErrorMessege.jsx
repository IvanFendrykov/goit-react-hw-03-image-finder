
import { Text, Wrapper } from './ErrorMessege.styled';
import PropTypes from 'prop-types';

export function ErrorMessege({ message }) {
  return (
    <Wrapper role="alert">
      <Text>{message}</Text>
    </Wrapper>
  );
}

ErrorMessege.propTypes = {
  message: PropTypes.string,
};
