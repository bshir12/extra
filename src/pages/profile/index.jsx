import { NavbarDua, Footer, Transaksi, CardProduk, } from "@components";
import React from "react";
import CardJiwa from "../../components/tablist/card-jiwa";
import CardKesehatan from "../../components/tablist/card-kesehatan";
import CardPendidikan from "../../components/tablist/card-pendidikan";

const Profile = () => {
  return (
    <>
      <NavbarDua />
      <div className="bg-orange-500 m-6 rounded-lg h-60">
        <div className="flex justify-left">
          <img
            className=" w-48 h-48 ml-12 mt-5 rounded-full border "
            src="http://placeimg.com/640/360/any"
            alt="#"
          />

          <div className="block ml-9 mt-4">
            {/* Full Name */}
            <div>
              <label className="form-label inline-block mb-2 text-white">
                Nama Lengkap
              </label>
            </div>
            <div className="flex">
              <input
                className=" border border-solid border-gray-300 rounded-md"
                placeholder="  Anak Ilang"
              />
            </div>
            {/* Phone Number */}
            <div>
              <label className="form-label inline-block mb-2 text-white">
                Phone Number (+62)
              </label>
            </div>
            <div className="flex">
              <input
                className=" border border-solid border-gray-300 rounded-md"
                placeholder="  081213141516"
              />
            </div>
            {/* Alamat */}
            <div>
              <label className="form-label inline-block mb-2 text-white">
                Alamat
              </label>
            </div>
            <div className="flex">
              <input
                className="border border-solid border-gray-300 rounded-md w-60"
                placeholder="  jalan kembang tulip no3"
              />
            </div>
          </div>
        </div>
      </div>
      
      <div>
        <div className="shadow-2xl border-b-2 m-5 rounded-lg text-center font-bold text-2xl">
        Produk Asuransi Anda
        </div>
        <CardProduk />
        <CardKesehatan/>
        <CardPendidikan/>
      </div>
      <div>
        <div className="shadow-2xl border-b-2 m-5 rounded-lg text-center font-bold text-2xl">
        Wishlist Produk
        </div>
        <CardProduk />
        
        <CardKesehatan/>
        <CardPendidikan/>
      </div>
      <Transaksi />
      <Footer />
    </>
  );
};

export default Profile;