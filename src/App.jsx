import { useEffect, useState } from 'react'
import './App.css'
import Footer from "./components/footer";
import axios from 'axios';



function App() {


  useEffect(() => {
    fetchData();
  }, []);

  const [weatherData, setWeatherData] = useState(null);

  const fetchData = async () => {
    
    try {
      const response = await axios.get(
        "https://api.openweathermap.org/data/2.5/weather?q=lahore&appid=779f447387890de5fe09f1ea5e933c2f&units=metric"
      );
      setWeatherData(response.data);
      console.log("response", response.data);
    } catch (error) {
      console.log("error", error);
    }
  };

  console.log("weatherData", weatherData);

  return (
    <>
     <div className="w-[25%] h-[90vh] mx-auto bg-slate-400 my-7 rounded-3xl relative ">

      <Footer />
     </div>
    </>
  )
}

export default App
