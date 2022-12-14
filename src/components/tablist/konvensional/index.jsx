import React, { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import api from "../../../services/api";

const CardKonvensional = () => {
  const [users, setUsers] = useState([])

  const navigate = useNavigate();
  const getKonvensional = async () => {
    try {
      const url = (`/api/v1/produk/list/503`);
      const response = await api.get(url);
      console.log(response.data);
      setUsers(response.data)
    } catch {
      console.log("error");
    }
  }
  useEffect(() => {
    getKonvensional();
  }, [])
  return (
    <>
      <div className=' grid grid-rows-auto grid-cols-3 gap-4'>
        {users.map(produk => (
          <div key={produk.id}>
            <div onClick={() => navigate(`/detailproduct/`+produk.id)}>
            <div className='w-72 h-80 rounded-lg border shadow-xl bg-sky-400 border-slate-500 '>
              <img src={require('./sick.png')} className='w-40 ml-14' alt='sick'></img>
              <div className=' w-full h-32'>
                <a className='text-lg'>{produk.namaProduk}</a>
                <p className='text-xs'>{produk.deskripsi}</p>
                <p className='mt-2 font-semibold'>Rp.{produk.harga}</p>
              </div>
            </div>
          </div>
          </div>
        ))}
      </div>
    </>
  )
}


export default CardKonvensional