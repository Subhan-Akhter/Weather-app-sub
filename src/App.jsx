import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Card from "./components/card";
import { FaMagnifyingGlass } from "react-icons/fa6";

function App() {
  useEffect(() => {
    fetchData();
  }, []);

  const [weatherData, setWeatherData] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const fetchData = async (searchValue = "london") => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&appid=779f447387890de5fe09f1ea5e933c2f&units=metric`
      );
      setWeatherData(response.data);
      console.log("response", response.data);
    } catch (error) {
      console.log("error", error);
    }
  };
  console.log("weatherData", weatherData);

  // fetch data through longitude and latitude
  const fetchData2 = async (lat, lon) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=779f447387890de5fe09f1ea5e933c2f&units=metric`
      );
      setWeatherData(response.data);
      console.log("response", response.data);
    } catch (error) {
      alert("Something went wrong");
      console.log("error", error);
    }
  };

  const searchHandler = (e) => {
    e.preventDefault();
    if (!inputValue) {
      return;
    }
    fetchData(inputValue);
    setInputValue("");
    console.log("searchHandler", inputValue);
  };

  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition, (error) => {
        fetchData();
        console.log("location block");
      });
    } else {
      x.innerHTML = "Geolocation is not supported by this browser.";
    }
  }
  function showPosition(position) {
    console.log("location allow");

    console.log(position, "position");
    fetchData2(position.coords.latitude, position.coords.longitude);
  }

  return (
    <>
      <form onSubmit={searchHandler} class="max-w-md mx-auto">
        <label
          for="default-search"
          class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div class="relative my-10">
          <input
            type="text"
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
            id="default-search"
            class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-3xl
             bg-gray-50 focus:outline-none dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500
              dark:focus:border-blue-500"
            placeholder="Search City for Weather"
            required
          />
          <button
            type="submit"
            class="text-white absolute end-2.5 bottom-2.5 bg-slate-400 hover:bg-slate-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-3xl text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <FaMagnifyingGlass className="bg-transparent text-lg text-white" />
          </button>
        </div>
      </form>

      {/* <Searchbar /> */}
      <div className="w-80 md:w-96 md:h-60 lg:w-96 xl:w-[450px] h-80 mx-auto bg-slate-600 mt-10 rounded-3xl relative  ">
        {/* <h1>{weatherData?.name}</h1> */}
        <Card
          cityName={weatherData?.name}
          temp={weatherData?.main?.temp}
          tempFeel={weatherData?.main?.feels_like}
          windSpeed={weatherData?.wind?.speed}
          iconCode={weatherData?.weather[0]?.icon}
          humidity={weatherData?.main?.humidity}
          pressure={weatherData?.main?.pressure}
        />
      </div>
    </>
  );
}

export default App;
