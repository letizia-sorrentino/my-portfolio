import Header from './components/Header';
import Interface from './navigation/Interface';
import Footer from './components/Footer';
import { useSelector } from 'react-redux';
import { selectIsDarkTheme } from './features/appManagerSlice';
import './styles/App.css';

function App() {

  const isDarkTheme = useSelector(selectIsDarkTheme);

  return (
    <div className={`App ${isDarkTheme ? "darkTheme" : "lightTheme"}`}>
      <div className="App-header">
        <Header />
      </div>
      <div className='App-main'>
        <Interface />
      </div>
      <div className='App-footer'>
        <Footer />
      </div>
    </div>
  );
}

export default App;
