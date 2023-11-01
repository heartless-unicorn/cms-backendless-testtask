import "./App.css";
import { BrowserRouter } from "react-router-dom";

import Routes from "./router/Routes";

import Navigation from "./components/Navigation";

import { DataContext } from "./helpers";

import data from "./dummies/tabs.json";

function App() {
  return (
    <BrowserRouter>
      <DataContext.Provider value={data}>
        <div className="App">
          <Navigation />
          <Routes />
        </div>
      </DataContext.Provider>
    </BrowserRouter>
  );
}

export default App;
