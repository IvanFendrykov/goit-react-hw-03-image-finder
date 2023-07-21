import React from 'react';
import PropTypes from 'prop-types';
import { Text, Wrapper } from './IdleStateGallery.styled';

export const IdleStateGallery = ({ text }) => {
  return (
    <Wrapper>
      <Text>{text}</Text>
    </Wrapper>
  );
};

IdleStateGallery.propTypes = {
  text: PropTypes.string.isRequired,
};
