import React from 'react'
import { useNavigate } from "react-router-dom";


const TombolPenjelasan = () => {
    const navigate = useNavigate();
  return (
    <div className="text-center mt-6">
      <button
        className="bg-blue-400 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow w-full hover:bg-blue-500"
        type="button"
        onClick={() => navigate(`/detailproduct`)}
        >
        Ingin tahu!!!!
      </button>
    </div>
  )
}

export default TombolPenjelasan