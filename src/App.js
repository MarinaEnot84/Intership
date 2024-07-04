import React, { useState, useEffect, useCallback, useMemo } from "react";
import "./App.css";
import Header from "./components/header";
import { people } from "./people";
import SearchForm from "./components/SearchForm";
import ResultsList from "./components/ResultsList";
import PersonDetails from "./components/PersonDetails";

function App() {
  const [results, setResults] = useState([]);
  const [searchName, setSearchName] = useState(
    localStorage.getItem("searchName") || ""
  );
  const [gender, setGender] = useState(localStorage.getItem("gender") || "");
  const [country, setCountry] = useState(localStorage.getItem("country") || "");
  const [selectedPerson, setSelectedPerson] = useState(null);
  const [searchAge, setSearchAge] = useState(
    localStorage.getItem("searchAge") || ""
  );

  useEffect(() => {
    localStorage.setItem("searchName", searchName);
    localStorage.setItem("gender", gender);
    localStorage.setItem("country", country);
    localStorage.setItem("searchAge", searchAge);
  }, [searchName, gender, country, searchAge]);

  const handleNameChange = useCallback((event) => {
    setSearchName(event.target.value);
  }, []);

  const handleAgeChange = useCallback((event) => {
    setSearchAge(event.target.value);
  }, []);

  const filteredResults = useMemo(() => {
    const nameTerm = searchName.trim().toLowerCase();
    const ageTerm = searchAge.trim();
    return people.filter((person) => {
      const matchesName = person.name.toLowerCase().includes(nameTerm);
      const matchAge = ageTerm ? person.age.toString() === ageTerm : true;
      return matchesName && matchAge;
    });
  }, [searchName, searchAge]);

  const handleSearchClick = useCallback(
    (event) => {
      event.preventDefault();
      if (searchName.trim() || searchAge.trim()) {
        setResults(filteredResults);
      } else {
        setResults([]);
      }
    },
    [searchName, searchAge, filteredResults]
  );

  const showPerson = useCallback((person) => {
    setSelectedPerson(person);
  }, []);

  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div className="border-2 rounded p-4 m-6 md:w-3/4 lg:w-2/3 xl:w-1/2">
          <div className="flex flex-col items-center text-4xl">
            <Header />
          </div>
          <div className="flex flex-col items-center">
            <div className="mt-6 mb-4 w-full px-4 sm:px-6 md:px-8 lg:px-10">
              <SearchForm
                searchName={searchName}
                searchAge={searchAge}
                handleNameChange={handleNameChange}
                handleAgeChange={handleAgeChange}
                gender={gender}
                setGender={setGender}
                country={country}
                setCountry={setCountry}
                handleSearchClick={handleSearchClick}
              />
              <div className="w-full mt-4">
                <ResultsList results={results} showPerson={showPerson} />
                {selectedPerson && (
                  <PersonDetails selectedPerson={selectedPerson} />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
