import Header from "./components/Header";
import Interface from "./navigation/Interface";
import Footer from "./components/Footer";
import { useSelector } from "react-redux";
import { selectIsDarkTheme } from "./app/appManagerSlice";
import "./styles/App.css";

const App = () => {
  const isDarkTheme = useSelector(selectIsDarkTheme);

  return (
    <div className={`App ${isDarkTheme ? "darkTheme" : "lightTheme"}`}>
      <div className="pageContainer">
        <div className="App-header">
          <Header />
        </div>
        <div className="App-main">
          <Interface />
        </div>
      </div>
      <div className={`App-footer ${isDarkTheme ? "darkTheme" : "lightTheme"}`}>
        <Footer />
      </div>
    </div>
  );
};

export default App;
