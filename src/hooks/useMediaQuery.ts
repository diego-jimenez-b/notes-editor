import { useEffect, useState } from "react";

const useMediaQuery = (mediaQuery: string) => {
  const [matches, setMatches] = useState(() => window.matchMedia(mediaQuery).matches);

  useEffect(() => {
    const queryObj = window.matchMedia(mediaQuery);
    const handleChange = (e: MediaQueryListEvent) => setMatches(e.matches);
    queryObj.addEventListener("change", handleChange);
    return () => queryObj.removeEventListener("change", handleChange);
  }, [mediaQuery]);

  return matches;
};

export default useMediaQuery;
