import Footer from '../footer/Footer';
import Header from '../header/Header';
import Login from '../login/Login';
import './App.scss';

function App() {
  return (
    <div className='App'>
      <div className='header'>
        <Header />
      </div>

      <div className='content_wrapper'>
        <Login />
      </div>

      <div className='footer'>
        <Footer />
      </div>
    </div>
  );
}

export default App;
