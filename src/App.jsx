import { useEffect } from "react";
import "./App.css";
import AeroPlayer from "./components/AeroPlayer";
import FrogCollection from "./components/FrogCollection";
import Hero from "./components/Hero";
import SelectedWork from "./components/SelectedWork";
import MoreCollections from "./components/MoreCollections";


function App() {
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => window.scrollTo(0, 0));
    });

    const titles = Array.from(document.querySelectorAll(
      ".selected_work_title, .frog_collection_title, .more_collections_heading h2"
    ));

    const revealVisibleTitles = () => {
      titles.forEach((title) => {
        const position = title.getBoundingClientRect();

        if (position.top < window.innerHeight * 0.88) {
          title.classList.add("title_visible");
        }
      });
    };

    revealVisibleTitles();
    window.addEventListener("scroll", revealVisibleTitles, { passive: true });

    return () => window.removeEventListener("scroll", revealVisibleTitles);
  }, []);

  return (
    <main>
      <Hero />
      <SelectedWork />
      <FrogCollection />
      <MoreCollections />
      <AeroPlayer />
    </main>
  );
}

export default App;
