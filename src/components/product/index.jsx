import React from 'react'
import { useNavigate } from "react-router-dom";

const Product = () => {
    const navigate = useNavigate();
    return (
        <>
            <div className=' justify-center m-1 md:m-8'>
                <div className='text-xl text-center font-bold md:text-3xl shadow-md'>
                    <h2>Pilih Produk Sesuai Kebutuhan Kamu</h2>
                </div>
                <div className='flex row list-none justify-center bg-orange-500 rounded-xl'>
                    <div className='p1'>
                        <li className='bg-white box-decoration-clone md:w-44 md:h-48 md:m-5 w-20 h-32 rounded-xl shadow-2xl' onClick={() => navigate(`/listproduct`)}>
                            <div className='w-14 h-8 md:ml-16 ml-3 my-8'>
                                <img src={require('./img/school.png')} alt="3" />
                            </div>
                            <p className='text-center font-semibold text-base'>Asuransi Pendidikan</p>
                            <p className='text-center my-4 text-sm md:visible invisible'>Berikan Yang Terbaik Untuk Buah Hati Anda</p>
                        </li>
                    </div>
                    <div className='p1'>
                        <li className='bg-white box-decoration-clone md:w-44 md:h-48 md:m-5 w-20 h-32 rounded-xl shadow-2xl ml-2'>
                            <div className='w-14 h-8 md:ml-16 ml-3 my-8'>
                                <img src={require('./img/couple.png')} alt="3" />
                            </div>
                            <p className='text-center font-semibold text-base'>Asuransi Jiwa</p>
                            <p className='text-center my-4 text-sm md:visible invisible'> Untuk Yang Anda Tinggalkan</p>
                        </li>
                    </div>
                    <div className='p1'>
                        <li className='bg-white box-decoration-clone md:w-44 md:h-48 md:m-5 w-20 h-32 rounded-xl shadow-2xl ml-2'>
                            <div className='w-14 h-8 md:ml-16 ml-3 my-8'>
                                <img src={require('./img/medical-history.png')} alt="3" />
                            </div>
                            <p className='text-center font-semibold text-base'>Asuransi Kesehatan</p>
                            <p className='text-center my-4 text-sm md:visible invisible'>Jamin Seluruh Biaya Kesehatan Anda</p>
                        </li>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Product