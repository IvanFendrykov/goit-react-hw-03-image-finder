import PropTypes from 'prop-types';
import { Btn } from './Button.styled';

export const Button = ({ type = 'button', onLoadMore}) => {
  return (
    <Btn type={type} onClick={onLoadMore}> Load More
    </Btn>
  );
};

Btn.propTypes = {
  type: PropTypes.string,
  onLoadMore: PropTypes.func,
};
