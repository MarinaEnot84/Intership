import React from "react";
import Header from "./header";

const PersonDetails = ({ selectedPerson }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="p-4 border-2  m-2 mt-4 w-full md:w-3/4 lg:w-1/2">
        <h3 className="font-bold text-lg mb-2 md:text-xl">{<Header />}</h3>
        <p className="text-sm md:text-xl">Person: {selectedPerson.name}</p>
        <p className="text-sm md:text-xl">Person age: {selectedPerson.age}</p>
        </div>
    </div>
  )
}

export default PersonDetails
