import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles/App.css";
import Home from "./pages/Home";
import { ArticlesProvider } from "./contexts/Articles";
import { UserProvider } from "./contexts/UserContext";
import Article from "./pages/Article";
import Header from "./components/Header";
import { LoadingProvider } from "./contexts/Loading";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <LoadingProvider>
          <UserProvider>
            <ArticlesProvider>
              <header className="header">
                <Header />
              </header>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/article/:articleId" element={<Article />} />
              </Routes>
            </ArticlesProvider>
          </UserProvider>
        </LoadingProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
