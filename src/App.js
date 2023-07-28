import { useState } from "react";
import Nav from "./components/Nav/Nav";
import HomePage from "./pages/HomePage/HomePage";
import AboutPage from "./pages/AboutPage/AboutPage";

function App() {
  const [page, setPage] = useState("");

  const title = "Client Side Routing";
  document.title = (page || "Home") + " | " + title;

  const changePage = (newPage) => {
    window.history.pushState({}, "", `/${newPage}`);
    setPage(newPage);
  }

  return (
    <>
      <Nav changePage={changePage} />
      
      {page === "" && <HomePage />}
      {page === "about" && <AboutPage />}
    </>
  );
}

export default App;
