import { NavbarDua, Footer, CardProduk, } from "@components";
import React from "react";
import CardKesehatan from "../../components/tablist/card-kesehatan";
import CardPendidikan from "../../components/tablist/card-pendidikan";


const Porto = () => {
  return (
    <div>
        <NavbarDua/>
        <div>
        <div className="shadow-2xl border-b-2 m-5 rounded-lg text-center font-bold text-2xl">
            Produk Asuransi Anda
        </div>
            <CardProduk />
            <CardKesehatan/>
            <CardPendidikan/>
        </div>
      <Footer/>
    </div>
  )
}

export default Porto