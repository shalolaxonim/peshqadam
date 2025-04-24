import { lazy, Suspense, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

// fonts
import "../src/utils/fonts";
import { Spin } from "antd";
import { useThemeStore } from "./stores/themeStore";
import { useScrollToTop } from "./hooks/useScrollTotop";

// Lazy-loaded pages
const HomePage = lazy(() => import("./pages/homePage"));
const YonalishlarPage = lazy(() => import("./pages/yonalishlarPage"));
const YangiliklarPage = lazy(() => import("./pages/yangiliklarPage"));
const VideolarPage = lazy(() => import("./pages/videolarPage"));
const AloqaPage = lazy(() => import("./pages/aloqaPage"));
const YangiliklarSinglePage = lazy(() => import("./pages/yangiliklarSinglePage"));

function App() {
  const { theme, setTheme } = useThemeStore();

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (storedTheme) {
      setTheme(storedTheme);
    } else {
      setTheme(systemPrefersDark ? "dark" : "light");
    }
  }, [setTheme]);

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [theme]);

  useScrollToTop();

  return (
    <div className="dark:bg-bgDark dark:text-bgText">
      <Navbar />
      <Suspense fallback={<Spin size="large" fullscreen className="text-primary" />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/yonalishlar" element={<YonalishlarPage />} />
          <Route path="/yangiliklar" element={<YangiliklarPage />} />
          <Route path="/yangiliklar/:id" element={<YangiliklarSinglePage />} />
          <Route path="/videolar" element={<VideolarPage />} />
          <Route path="/aloqa" element={<AloqaPage />} />
        </Routes>
      </Suspense>
      <Footer />
    </div>
  );
}

export default App;
