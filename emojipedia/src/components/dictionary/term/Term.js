import './term.scss';

function Term(props) {
  return (
    <div className='Term col-md-8 col-lg-5 col-xl-5 col-xxl-4'>
      <div className='card'>
        <div className='card-header'>
          <div className='emote-box'>
            <span className='emote'>{props.emote}</span>
          </div>

          <h1 className='emote-title display-5'>{props.title}</h1>
        </div>

        <div className='card-body'>
          <p>{props.content}</p>
        </div>
      </div>
    </div>
  );
}

export default Term;
