import { useEffect, useState } from "react";
import Tours from "./components/Tours";

function App() {
  const url = "https://course-api.com/react-tours-project";
  const [tours, setTours] = useState([]);

  const deleteTour = (item) => {
    const newTours = [...tours].filter((tour) => {
      return tour.id !== item;
    });
    setTours(newTours);
    // console.log( 'deleted',tours)
  };

  const refreshTours = () => {
    fetchData();
  }

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const jsonResponse = await response.json();
      setTours(jsonResponse);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(tours);
  return (
    <>
      {tours.length === 0 ? (
        <div className="main-container">
          <h1>No tours left</h1>
          <button onClick={refreshTours}>refresh</button>
        </div>
      ) : (
        <Tours tours={tours} deleteTour={deleteTour} />
      )}
    </>
  );
}

export default App;
