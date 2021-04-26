import { useState, useLayoutEffect } from 'react';

export default function useWindowPosition(id) {
  const [animation, setAnimation] = useState(false);

  useLayoutEffect(() => {
    function updatePosition() {
      const offetSetHeigh = window.document.getElementById(id).offsetHeight;
      if (window.pageYOffset > offetSetHeigh * 0.7) {
        setAnimation(true);
      }
    }

    window.addEventListener('scroll', updatePosition);
    updatePosition();
    return () => window.removeEventListener('scroll', updatePosition);
  }, [id]);
  return animation;
}
