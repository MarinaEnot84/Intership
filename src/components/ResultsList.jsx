import React from "react";

const ResultsList = ({ results, showPerson }) => {
  return (
    <div className="flex flex-col items-center">
      {results.length > 0 ? (
                  <p className="text-lg md:text-xl">Found: {results.length}</p>
                ) : (
                  <p className="text-lg md:text-xl">No matches!</p>
                )}
                {results.length > 0 &&
                  results.map((person, index) => (
                    <div
                      key={index}
                      className="p-4 m-2 border-2 rounded cursor-pointer hover:bg-gray-600 w-full md:w-3/4 lg:w-1/2"
                      onClick={() => showPerson(person)}
                    >
                      {person.name}
                    </div>
                  ))}
    </div>
  )
}

export default ResultsList
