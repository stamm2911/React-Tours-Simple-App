import { useEffect, useState } from "react";
import Tours from "./components/Tours";

function App() {
  const url = "https://course-api.com/react-tours-project";
  const [tours, setTours] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const jsonResponse = await response.json();
      setTours(jsonResponse);
      // console.log(tours);
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
      <Tours tours={tours}/>
    </>
  );
}

export default App;
