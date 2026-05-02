// useScrollAnimation hook
import { useEffect } from 'react';

export default function useScrollAnimation(ref) {
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    node.style.opacity = 0;
    const handleScroll = () => {
      const rect = node.getBoundingClientRect();
      if (rect.top < window.innerHeight) {
        node.style.transition = 'opacity 1s';
        node.style.opacity = 1;
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [ref]);
}
