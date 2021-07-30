import { useEffect, useState } from "react";
import Loading from "./components/Loading";
import Tours from "./components/Tours";

function App() {
  const url = "https://course-api.com/react-tours-project";
  const [tours, setTours] = useState([]);
  const [load, setload] = useState(true);

  const deleteTour = (item) => {
    if(tours.length <= 1) setload(false)
    const newTours = [...tours].filter((tour) => {
      return tour.id !== item;
    });
    setTours(newTours);
  };

  const refreshTours = () => {
    setload(true)
    fetchData();
  };

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
      {tours.length === 0 && load ? (
        <Loading />
      ) : tours.length === 0 ? (
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
