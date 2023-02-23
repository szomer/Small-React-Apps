// Components
import Page from '../Page/Page';
import Footer from '../Footer/Footer';
import Heading from './../Heading/Heading';
import Welcome from './../Welcome/Welcome';

import './App.scss';

function App() {
  return (
    <div className='App'>
      <Heading />

      <div className='welcome-message'>
        <Welcome />
      </div>
      <div className='pages'>
        <Page />
      </div>

      <Footer />
    </div>
  );
}

export default App;
