import './dictionary.scss';
import Term from './term/Term';

function Dictionary(props) {
  return (
    <div className='Dictionary'>
      <div className='container'>
        <div>
          <h1></h1>
        </div>

        <div className='row align-items-stretch justify-content-center '>
          {props.emojis.map((emoji) => {
            return (
              <Term
                key={emoji.id}
                title={emoji.title}
                content={emoji.content}
                emote={emoji.emote}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Dictionary;
