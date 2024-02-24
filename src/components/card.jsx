// import React from "react";

function Card(props) {
  console.log(props, "propss");
  return (
    <>
      <div className="bg-transparent py-10 px-5  flex justify-between flex-wrap cursor-default">
        <div className="bg-transparent">
          <h1 className="bg-transparent text-white font-sans font-semibold text-2xl">
            {props.cityName}
          </h1>
          <h1 className="bg-transparent text-white font-sans font-bold text-5xl">
            {props.temp} <sup className="bg-transparent">o</sup>C
          </h1>
          <p className="bg-transparent text-white font-sans font-normal text-sm">
            Feels Like: {props.tempFeel}
          </p>
        </div>
        <div className="bg-transparent">
          <img
            className="bg-transparent"
            src={`https://openweathermap.org/img/w/${props.iconCode}.png`}
            alt=""
            width={120}
          />
        </div>
        <div className="bg-transparent flex flex-wrap gap-3">
          <p className="bg-blue-950 rounded-xl text-center px-3 text-white font-mono font-normal text-sm">
            Humidity: {props.humidity}
          </p>
          <p className="bg-blue-950 rounded-xl text-center px-3  text-white font-mono font-normal text-sm">
            Presure: {props.pressure}
          </p>
          <p className="bg-blue-950 rounded-xl text-center px-3 text-white font-mono font-normal text-sm">
            Wind Speed: {props.windSpeed}
          </p>
        </div>
      </div>
    </>
  );
}

export default Card;

// http://openweathermap.org/img/w/10d.png
