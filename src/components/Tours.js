import Tour from './Tour';
// var uniqid = require('uniqid');

function Tours({tours, deleteTour}) {
  console.log(tours)  
  return (
    <div className="main-container">
      <h1>Our Tours</h1>
      {tours.map(item => (
          <Tour key={item.id} items={item} deleteTour={deleteTour}/>
      ))}
    </div>
  );
}

export default Tours;
