import { useState } from "react";
import "./App.css";
import { SeachBar } from "./components/SearchBar";
g;
import { SearchResultsList } from "./components/SearchResultsList";

function App() {
  const [results, setResults] = useState([]);

  return (
    <div className="App">
      <div className="search-bar-container">
        <SeachBar setResults={setResults} />
        <SearchResultsList results={results} />
      </div>
    </div>
  );
}

export default App;
