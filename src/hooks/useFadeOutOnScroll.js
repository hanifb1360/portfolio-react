import { useState, useEffect } from 'react';

const useFadeOutOnScroll = (ref) => {
  const [opacity, setOpacity] = useState(1);
  const [shouldFade, setShouldFade] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const distanceFromTop =
          window.pageYOffset + ref.current.getBoundingClientRect().top;
        const elementHeight = ref.current.offsetHeight;
        const scrollPosition = window.innerHeight + window.pageYOffset;

        if (scrollPosition > distanceFromTop + elementHeight + 180) {
          setShouldFade(true);
        } else {
          setShouldFade(false);
        }
      }
    };

    const handleTick = () => {
      if (shouldFade) {
        setOpacity((prevOpacity) => Math.max(prevOpacity - 0.05, 0));
      } else {
        setOpacity(1);
      }
    };

    window.addEventListener('scroll', handleScroll);
    const intervalId = setInterval(handleTick, 16);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(intervalId);
    };
  }, [ref, shouldFade]);

  return opacity;
};

export default useFadeOutOnScroll;
