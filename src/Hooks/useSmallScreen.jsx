import { useState, useEffect } from "react";

const useSmallScreen = () => {
  const SMALL_SCREEN_BREAKPOINT = 640;
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < SMALL_SCREEN_BREAKPOINT);
    };
    checkScreenSize();

    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return [isSmallScreen];
};

export default useSmallScreen;
