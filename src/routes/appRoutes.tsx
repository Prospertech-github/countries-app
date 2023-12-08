import { useState } from "react";

import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/homePage";
import DetailContainer from "../components/detailContainer/detailContainer";
import NoMatchPage from "../pages/noMatchPage";

import data from "../data.json";
import { CountryType } from "../utils";

const AppRoutes = () => {
  const [countriesData, setCountriesData] = useState<CountryType[]>(data);
  const [detail, setDetail] = useState<string>("");

  //Function for handling the search functionality
  const handleSearch = (query: string) => {
    const lowerCaseQuery = query.toLowerCase();
    const filteredResults = countriesData.filter((country) => {
      return country.name.toLowerCase().includes(lowerCaseQuery);
    });
    setCountriesData(filteredResults);
  };

  const handleDetail = (country: any) => {
    setDetail(country)
    console.log(country);
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage data={countriesData} handleSearch={handleSearch} handleDetail={handleDetail}/>}>
          <Route path="/:slug" element={<DetailContainer country={detail} />} />
        </Route>

        <Route path="*" element={<NoMatchPage />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
