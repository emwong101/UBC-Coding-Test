import { useState } from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import { StyledEngineProvider } from "@mui/material";
import AlphabetPage from "./pages/Alphabet/AlphabetPage";
import CategoryPage from "./pages/Category/CategoryPage";
import Nav from "./components/Nav/Nav";
import MartiniIcon from "../src/assets/martini.svg";
import "./App.scss";
import Default from "./pages/Default/Default";

function App() {
  const [data, setData] = useState();
  const [selection, setSelection] = useState();
  let location = useLocation();

  return (
    <div className="App">
      <StyledEngineProvider injectFirst>
        <header className="header">
          <Link to="/" className="title">
            <img
              src={MartiniIcon}
              className="title__icon"
              alt="martini glass icon"
            />
            <h1 className="title__text">The Cocktail Bar</h1>{" "}
          </Link>
          <Nav
            setData={setData}
            location={location.pathname}
            setSelection={setSelection}
          />
        </header>
        <div className="main">
          <Routes>
            <Route path="/" element={<Default />} />
            <Route
              path="/alphabet"
              element={
                <AlphabetPage
                  selection={selection}
                  setSelection={setSelection}
                  setData={setData}
                  data={data}
                ></AlphabetPage>
              }
            />
            <Route
              path="/category"
              element={
                <CategoryPage
                  data={data}
                  setData={setData}
                  selection={selection}
                  setSelection={setSelection}
                />
              }
            />
          </Routes>
        </div>
      </StyledEngineProvider>
    </div>
  );
}

export default App;
