import React from 'react'
import { useNavigate } from "react-router-dom";

const TombolKembali = () => {
    const navigate = useNavigate(4);
  return (
    <div>
        <button
        className="bg-blue-400 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow w-full hover:bg-blue-500"
        type="button"
        onClick={() => navigate(-1)}
        >
        Kembali
        </button>
    </div>
  )
}

export default TombolKembali