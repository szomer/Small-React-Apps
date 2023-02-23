import Header from '../Header/Header';
import { col1, col2, col3 } from './notes';

function App() {
  return (
    <div className='App'>
      <Header />
      <div className='notes'>
        <div className='col1'>{col1}</div>
        <div className='col2'>{col2}</div>
        <div className='col3'>{col3}</div>
      </div>
    </div>
  );
}

export default App;
