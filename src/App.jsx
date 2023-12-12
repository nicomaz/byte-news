import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles/App.css";
import Home from "./pages/Home";
import { ArticlesProvider } from "./contexts/Articles";
import { UserProvider } from "./contexts/UserContext";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <UserProvider>
          <ArticlesProvider>
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </ArticlesProvider>
        </UserProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
