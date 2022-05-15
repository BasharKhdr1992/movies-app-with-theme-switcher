import { useState, useEffect } from 'react';

export const useWindowScroll = () => {
  const [scroll, setScroll] = useState(window.scrollY);

  useEffect(() => {
    const scrollEventListener = (e) => {
      setScroll(e.path[1].scrollY);
    };

    window.addEventListener('scroll', scrollEventListener);
    return () => window.removeEventListener('scroll', scrollEventListener);
  }, []);

  return [scroll];
};
