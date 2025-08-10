import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const API = "https://pokeapi.co/api/v2/pokemon/pikachu";

const FetchPocamonData = () => {
  const [apiData, setApiData] = useState(null);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchData = async () => {
    try {
      const response = await fetch(API);
      const data = await response.json();
      setApiData(data);
      setLoading(false);
      setError(null);
    } catch (error) {
      setError(error);
      console.log(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (error) {
    return <div>Error : - {error.message}</div>;
  }

  if (!apiData) {
    return (
      <div className="text-4xl font-bold text-center mt-5 text-red-500">
        Loading...
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-blue-200">
      <h1 className="text-4xl font-bold text-center mt-5 text-blue-500">
        Fetch Pocamon Data
      </h1>
      <div className="flex flex-col items-center bg-amber-200 w-72 h-80 rounded-lg shadow-2xl mt-5">
        <img
          src={apiData.sprites.front_shiny_female}
          alt="Pocamon"
          className="w-auto h-48 rounded-lg"
        />

        <p className="text-4xl font-bold text-center mt-5 uppercase text-amber-800">
          {apiData.name}
        </p>
        <div className="flex items-center mt-5">
          <p className="text-sm font-bold text-center mt-5 uppercase text-amber-800">
            Weight : - {apiData.weight}
          </p>
          <p className="text-sm font-bold text-center mt-5 uppercase text-amber-800">
            Height : - {apiData.height}
          </p>
          <p className="text-sm font-bold text-center mt-5 uppercase text-amber-800">
            Speed : - {apiData.stats[5].base_stat}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FetchPocamonData;
