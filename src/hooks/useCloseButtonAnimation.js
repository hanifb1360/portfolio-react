import { useState } from 'react';

export const useCloseButtonAnimation = () => {
  const [closeButtonAnimation, setCloseButtonAnimation] =
    useState('not clicked');

  return {
    closeButtonAnimation,
    setCloseButtonAnimation,
  };
};
