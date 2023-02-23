import { TypeAnimation } from 'react-type-animation';
import './About.scss';

function About() {
  return (
    <div id='about' className='About'>
      <div className='box'>
        <div className='box-content'>
          <div className='row align-items-center justify-content-between'>
            <div className='col mx-5'>
              <h1 className='h1 display-3'>
                <TypeAnimation
                  // Same String at the start will only be typed once, initially
                  sequence={[
                    'Work with React.',
                    1000,
                    'Work with Bootstrap.',
                    1000,
                    'Work with Clients.',
                    1000,
                    'Work with NodeJS.',
                    1000,
                    'Work with UX.',
                    1000,
                    'Work with Teams.',
                    1000,
                    'Work with Database.',
                    1000,
                  ]}
                  speed={20} // Custom Speed from 1-99 - Default Speed: 40
                  style={{ color: '#fff', fontSize: '3rem' }}
                  wrapper='span' // Animation will be rendered as a <span>
                  repeat={Infinity} // Repeat this Animation Sequence infinitely
                />
              </h1>
              <p className='lead'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed
                nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis
                ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta.
                Mauris massa.
              </p>
            </div>
          </div>
        </div>
        <div className='box-top'></div>
        <div className='box-bottom'></div>
      </div>

      <div className='box2'>
        <div className='row m-4 align-items-center justify-content-evenly'>
          <div className='img-col p-5 col-md-5'>
            <img
              src='https://picsum.photos/600/600?grayscale'
              alt='random'
            ></img>
          </div>

          <div className='col-md-3 text-end m-3'>
            <h1 className='h1 display-3'>Work Ethics</h1>
            <p className='lead'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.
              Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.
              Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris
              massa.
            </p>
          </div>
        </div>

        <div className='square'></div>
      </div>
    </div>
  );
}

export default About;
