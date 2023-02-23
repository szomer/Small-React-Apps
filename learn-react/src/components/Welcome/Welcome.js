import './Welcome.scss';
import { msg } from './message';

function Welcome() {
  return (
    <div id='welcome' className='Welcome'>
      <div className='container'>
        <div className='row text-center d-flex align-items-center justify-content-center'>
          <div className='col-md-8 align-self-center'>
            <span id='welcome-title' className='display-1'>
              {msg}
            </span>

            <p className='lead mt-1'>Dive Into the Project.</p>
            <a href='#about' className='btn-scroll'>
              <i className='bi bi-arrow-down'></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
