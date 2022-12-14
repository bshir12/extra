import React from 'react'
import { useNavigate } from "react-router-dom";

const CardProduk = () => {
    const navigate = useNavigate();
  return (
    <div>
        <section className="text-gray-600 body-font grid grid-cols-3">
            <div className="container px-4 py-20 mx-auto">
                <div className="flex m-4">
                    <div className="w-full">
                        <a className="block relative h-48 rounded overflow-hidden">
                        <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://dummyimage.com/420x260" />
                        </a>
                        <div className="mt-4">
                        <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Asuransi Kesehatan</h3>
                        <h2 className="text-gray-900 title-font text-lg font-medium">Bri Life</h2>
                        <p className="mt-1">Asuransai Kesehatan yang akan melindungi seluruh keluarga Anda dari berbagai macam penyakit dan memiliki lebih 100 kerjasama Rumah Sakit</p>
                        <div className="text-center mt-6">
                        <button
                            className="bg-orange-500 text-white font-[poppins] active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow w-full hover:text-white hover:bg-orange-700 hover:border"
                            type="button"
                            onClick={() => navigate(`/detailproduct`)}
                            >
                            Ingin tahu!!
                            </button>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container px-4 py-20 mx-auto">
                <div className="flex m-4">
                    <div className="w-full">
                        <a className="block relative h-48 rounded overflow-hidden">
                        <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://dummyimage.com/420x260" />
                        </a>
                        <div className="mt-4">
                        <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Mandiri Jiwa</h3>
                        <h2 className="text-gray-900 title-font text-lg font-medium">Axxa Mandiri</h2>
                        <p className="mt-1">Asuransai Jiwa yang akan akan memberikan kompensasi kepada keluarga Anda jika terjadi sesuatu yang tidak diinginkan terjadi pada Anda</p>
                        <div className="text-center mt-6">
                        <button
                            className="bg-orange-500 text-white font-[poppins] active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow w-full hover:text-white hover:bg-orange-700 hover:border"
                            type="button"
                            onClick={() => navigate(`/detailproduct`)}
                            >
                            Ingin tahu!!
                            </button>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container px-4 py-20 mx-auto">
                <div className="flex m-4">
                    <div className="w-full">
                        <a className="block relative h-48 rounded overflow-hidden">
                        <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://dummyimage.com/420x260" />
                        </a>
                        <div className="mt-4">
                        <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">BCA Pendidikan</h3>
                        <h2 className="text-gray-900 title-font text-lg font-medium">BCA Belajar</h2>
                        <p className="mt-1">Asuransi Pendidikan yang akan membantu Anda untuk membayar biaya sekolah, mulai dari Sekolah Dasar hingga Kuliah S1</p>
                        <div className="text-center mt-6">
                        <button
                            className="bg-orange-500 text-white font-[poppins] active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow w-full hover:text-white hover:bg-orange-700 hover:border"
                            type="button"
                            onClick={() => navigate(`/detailproduct`)}
                            >
                            Ingin tahu!!
                            </button>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
    
  )
}

export default CardProduk