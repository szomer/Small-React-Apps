import './page.scss';

const hours = new Date().getHours();
var msg = 'Good Evening';
if (hours >= 0 && hours < 6) {
  msg = 'Good Night';
} else if (hours < 12) {
  msg = 'Good Morning';
} else if (hours < 18) {
  msg = 'Good Afternoon';
}

function Page() {
  return (
    <div className='Page'>
      <div>
        <h1 className='display-3'>{msg}</h1>
      </div>
    </div>
  );
}

export default Page;
