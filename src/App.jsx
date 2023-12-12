import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles/App.css";
import Home from "./pages/Home";
import { ArticlesProvider } from "./contexts/Articles";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ArticlesProvider>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </ArticlesProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
