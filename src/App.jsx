import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { StyledEngineProvider } from "@mui/material";
import AlphabetPage from "./pages/Alphabet/AlphabetPage";
import CategoryPage from "./pages/Category/CategoryPage";
import Nav from "./components/Nav/Nav";
import "./App.scss";

function App() {
  const [data, setData] = useState();

  return (
    <div className="App">
      <BrowserRouter>
        <StyledEngineProvider injectFirst>
          <Link to="/" className="title">
            <h1>The Cocktail Bar</h1>
          </Link>
          <Nav />
          <Routes>
            <Route path="/" element={<p>Select a filter to get started</p>} />
            <Route
              path="/alphabet"
              element={
                <AlphabetPage setData={setData} data={data}></AlphabetPage>
              }
            />
            <Route
              path="/category"
              element={<CategoryPage data={data} setData={setData} />}
            />
          </Routes>
        </StyledEngineProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
