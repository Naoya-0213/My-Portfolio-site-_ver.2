import { useEffect, useState } from "react";

export const useMedia = (query: string) => {
  const [matches, setMatches] = useState(false);
  
  useEffect(() => {
    const m = window.matchMedia(query);
    const onChange = () => setMatches(m.matches);
    onChange();
    m.addEventListener?.("change", onChange);
    return () => m.removeEventListener?.("change", onChange);
  }, [query]);
  return matches;
};
