import Tour from './Tour';
var uniqid = require('uniqid');

function Tours({tours}) {
  console.log(tours)  
  return (
    <div className="main-container">
      <h1>Our TourS</h1>
      {tours.map(item => (
          <Tour key={uniqid()} items={item}/>
      ))}
    </div>
  );
}

export default Tours;
