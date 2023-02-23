import './Heading.scss';
import logo from './logo.png';
import React from 'react';

class Heading extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showNav: true };
    this.toggleNav = this.toggleNav.bind(this);
  }

  toggleNav() {
    this.setState({
      showNav: !this.state.showNav,
    });
  }

  render() {
    const { showNav } = this.state;

    return (
      <div className='Heading'>
        <div className='navbar navbar-expand-sm navbar-dark bg-dark fixed-top px-5'>
          <a className='navbar-brand' href='#welcome'>
            <img src={logo} alt='logo' />
            <span className='ms-3 lead'>
              <small>React App</small>
            </span>
          </a>
          <button
            className='navbar-toggler'
            type='button'
            onClick={this.toggleNav}
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div
            className={(showNav ? 'show' : '') + ' collapse navbar-collapse'}
            ref='mynav'
          >
            <ul className='navbar-nav ms-auto'>
              <li className='nav-item'>
                <a className='nav-link active' href='#welcome'>
                  Home
                </a>
              </li>

              <li className='nav-item'>
                <a className='nav-link' href='#about'>
                  About
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Heading;
