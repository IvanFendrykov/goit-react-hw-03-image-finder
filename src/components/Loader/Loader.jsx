import React from 'react';
import { LoaderBackdrop} from './Loader.styled';
import BounceLoader from 'react-spinners/BounceLoader';

export const Loader = () => {
  return (
    <LoaderBackdrop>
      <BounceLoader
        color="#8f8609"
        size={150}
        cssOverride={{ position: 'absolute', top: '35%', left: '45%' }}
      />
    </LoaderBackdrop>
  );
};
