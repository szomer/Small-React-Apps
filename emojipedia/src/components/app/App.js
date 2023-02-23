import Dictionary from '../dictionary/Dictionary';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import './App.scss';
import emojis from './emojis';

function App() {
  return (
    <div className='App'>
      <div className='row justify-content-center align-items-center'>
        <div className='content-wrapper col-md-9'>
          <Header />
          <Dictionary emojis={emojis} />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
