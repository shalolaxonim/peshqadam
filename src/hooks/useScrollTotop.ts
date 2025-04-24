// src/hooks/useScrollToTop.ts
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const useScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    document.documentElement.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);
};
