import React from 'react';

const SearchForm = ({ searchName, handleNameChange, gender, setGender, country, setCountry, handleSearchClick, searchAge, handleAgeChange }) => {
    return (
        <div className='container mx-auto px-4'>
            <form>
                <label htmlFor="name" className='block text-sm font-medium mb-2'>Name: </label>
                <input
                  id="name"
                  type="text"
                  value={searchName}
                  onChange={handleNameChange}
                  className="w-full p-2 border rounded shadow mb-4 mt-2 text-black"
                  placeholder="Enter name..."
                />
                <label htmlFor="age" className='block text-sm font-medium mb-2'>Age: </label>
                <input
                  id="age"
                  type="number"
                  value={searchAge}
                  onChange={handleAgeChange}
                  className="w-full p-2 border rounded shadow mb-4 mt-2 text-black"
                  placeholder="Enter age..."
                />
                <div className="md:flex md:flex-row md:space-x-8">
                  <div className="md:flex md:flex-col md:w-1/2">
                    <label
                      htmlFor="gender"
                      className="block text-sm font-medium mb-2"
                    >
                      Choose gender:{" "}
                    </label>
                    <select
                      value={gender}
                      onChange={(e) => setGender(e.target.value)}
                      id="gender"
                      className="block w-full bg-white text-black p-2 border rounded shadow mb-4 mt-2 sm:text-sm"
                    >
                      <option value="" selected disabled>
                        Choose gender
                      </option>
                      <option>Male</option>
                      <option>Female</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div className="md:flex md:flex-col md:w-1/2">
                    <label
                      for="country"
                      className="block text-sm font-medium mb-2"
                    >
                      Country:{" "}
                    </label>
                    <select
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                      id="country"
                      className="block w-full bg-white text-black p-2 border rounded shadow mb-4 mt-2 sm:text-sm"
                    >
                      <option value="" selected disabled>
                        Choose country
                      </option>
                      <option>Russia</option>
                      <option>Italy</option>
                      <option>Belgium</option>
                      <option>Poland</option>
                      <option>France</option>
                    </select>
                  </div>
                </div>
                <div className="flex justify-end">
                  <button
                    type="button"
                    onClick={handleSearchClick}
                    className="mt-2 bg-blue-500 text-white p-2 rounded shadow"
                  >
                    Search
                  </button>
                </div>
              </form>
        </div>
    )
}

export default SearchForm;