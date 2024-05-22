import { useState } from "react";
import "./App.css";
import FirstPage from "./Components/ScreenOne/FirstPage";
import Main from "./Components/ScreenOne/Main";
import Searchbar from "./Components/ScreenOne/Searchbar";
function App() {
  const [showMarkers, setShowMarkers] = useState(false);
  const handleToggle = () => {
    setShowMarkers((prevState) => !prevState);
  };

  return (
    <div className="App">
      <FirstPage />
      <Searchbar handleToggle={handleToggle} showMarkers={showMarkers} />
      <Main showMarkers={showMarkers} />
    </div>
  );
}

export default App;
