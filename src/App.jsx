import { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { StyledEngineProvider } from "@mui/material";
import AlphabetPage from "./pages/Alphabet/AlphabetPage";
import CategoryPage from "./pages/Category/CategoryPage";
import Nav from "./components/Nav/Nav";
import "./App.scss";
import Default from "./pages/Default/Default";

function App() {
  // data state to store API response objects
  const [data, setData] = useState();
  const [selection, setSelection] = useState();

  //location hook for determining active nav link
  let location = useLocation();

  return (
    <div className="App">
      <StyledEngineProvider injectFirst>
        <header className="header">
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
