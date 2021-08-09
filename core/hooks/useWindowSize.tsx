import React from 'react';

/**
 * Customized hook for get the window size and update state props.
 * @see : https://stackoverflow.com/questions/19014250/rerender-view-on-browser-resize-with-react
 */

export const useWindowSize = (): number[] => {
  const [size, setSize] = React.useState([0, 0]);

  React.useEffect(() => {
    const updateSize = () => {
      setSize([window.innerWidth, window.innerHeight]);
    };
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  return size;
};
