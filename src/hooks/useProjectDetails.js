import { useEffect, useRef, useState } from 'react';

export const useProjectDetails = () => {
  const [showDetails, setShowDetails] = useState(false);
  const [closeButtonAnimation, setCloseButtonAnimation] =
    useState('not clicked');
  const detailsRef = useRef(null);

  useEffect(() => {
    const node = detailsRef.current;

    const handleCloseDetails = () => {
      console.log('handleCloseDetails called');

      setTimeout(() => {
        if (!showDetails) {
          console.log('window already closed');
          return;
        }

        setShowDetails(false);
        // setCloseButtonAnimation(null); // Reset closeButtonAnimation
      }, 500); // Delay for 500 milliseconds before closing the window

      // Animate the window moving down before closing
      if (node) {
        node.style.transform = 'translateY(100%)';
      }
    };

    if (showDetails) {
      // Animate the window moving up when it is opened
      if (node) {
        node.style.transform = 'translateY(-100%)';

        // Listen for the animation to finish before setting the timeout to close the window
        node.addEventListener('transitionend', handleCloseDetails);
      }
    } else {
      // Remove the event listener when the window is closed
      if (node) {
        node.removeEventListener('transitionend', handleCloseDetails);
      }
    }

    // Clean up the effect when the component is unmounted
    return () => {
      if (node) {
        node.removeEventListener('transitionend', handleCloseDetails);
      }
    };
  }, [showDetails, setShowDetails]); // add setShowDetails to the dependency array

  return {
    showDetails,
    setShowDetails,
    closeButtonAnimation,
    setCloseButtonAnimation,
    detailsRef,
  };
};
