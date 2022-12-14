import React from 'react'

const Transaksi = () => {
  return (
    <>
    <div className='bg-orange-500 py-6 px-16 m-32 rounded-lg text-white mx-14'>
        <h1 className='text-2xl font-sans text-white'>Transaksi</h1>
        <div className='font-sans m-3'>
        <table className="rounded-xl border-white w-full text-slate-600">
          <thead className='bg-slate-200 '>
            <tr className='border rounded-lg '>
              <th className=" py-2 px-2 ">No.</th>
              <th className=" py-2 px-2">Description</th>
              <th className=" py-2 px-2 ">Harga</th>
              <th className=" py-2 px-2  ">Bank</th>
              <th className=" py-2 px-2  "></th>
            </tr>
          </thead>
          
            <span className='m-2'></span>
            <tr className='border rounded-lg bg-white text-center hover:bg-gray-100'>
              <td className="  py-2 w-2 text-center">1</td>
              <td className="  py-2 ">Indianapolis</td>
              <td className="  py-2 ">15.000</td>
              <td className="  py-2 ">BCA</td>
              <td className="  py-2 ">***</td>
            </tr>
            <span className='m-2 '></span>
            <tr className='border rounded-lg bg-white text-center hover:bg-slate-100'>
              <td className="  py-2  w-2 text-center">2</td>
              <td className="  py-2 ">Columbus</td>
              <td className="  py-2 ">15.000</td>
              <td className="  py-2 ">BCA</td>
              <td className="  py-2 ">***</td>
            </tr>
            <span className='m-2'></span>
            <tr className='border rounded-lg bg-white text-center hover:bg-slate-100'>
              <td className="  py-2  w-2 text-center">3</td>
              <td className="  py-2 ">Detroit</td>
              <td className="  py-2 ">15.000</td>
              <td className="  py-2 ">BCA</td>
              <td className="  py-2 ">***</td>
            </tr>
          
        </table>
        </div>
      </div>
    </>
  )
}

export default Transaksi