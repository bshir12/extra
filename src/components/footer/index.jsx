import React from "react";
const Footer = () => {
  return (
    <>
      <div className="bg-orange-500">
        <hr className="h-2" />
      </div>

      <div className="pl-8 block md:flex drop-shadow-lg bg-gradient-to-b rounded-t-xl">
        <div className="my-14 max-w-4xl">
          <h2 className="text-2xl text-black">Layanan Nasabah</h2>
          <h6 className="text-sm text-black">
            Indivara Investment Tower Ground Floor
          </h6>
          <p className="text-sm text-black">
            Jl.Orange Jeruk Kav.18 Mampang Prapatan Jakarta Selatan, 14499
          </p>
          <div className="my-5">
            <h4 className="text-xl text-black">Contact Center</h4>
            <h6 className="text-black">Senin-Jumat</h6>
            <p className="text-black">Pukul 08.00-16.00 WIB</p>
            <p className="text-black">pusatlayanan@indivara.co.id</p>
          </div>
          <div className="flex ">
            <h3 className="w-14 md:w-24">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/8/83/OJK_Logo.png"
                alt="#"
              />
            </h3>
            <h3 className="w-14 md:w-28 mt-1 ml-5">
              <img
                src="https://seeklogo.com/images/K/kominfo-logo-DC4C2D403E-seeklogo.com.png"
                alt="#"
              />
            </h3>
            <h3 className="w-14 md:w-28 md:my-1 ml-5">
              <img
                src="https://pontas.id/wp-content/uploads/2018/09/unnamed-1084x542.png"
                alt="#"
              />
            </h3>
          </div>
        </div>
        <div className=" ml-0 md:ml-20 md:my-14 w-96">
          <h2 className="text-2xl text-black">About Us</h2>
          <p className="text-sm text-justify text-black">
            Indivara Investment adalah perusahaan yang bergerak di bidang
            Asuransi dan Deposito perusahaan ini dikembangkan secara digital
            sejak tahun 2022 dibawah naungan Indivara Group.
          </p>
          <h2 className="text-2xl my-5 text-black">Visi & Misi Perusahaan</h2>
          <h6 className="text-lg text-black">Visi Perusahaan</h6>
          <p className="text-sm text-justify text-black">
            Visi kami adalah menjadi perusahaan investasi deposito dan asuransi
            terkemuka dan terpercaya di ASIA.
          </p>
          <h6 className="text-lg text-black">Misi Perusahaan</h6>
          <p className="text-sm text-justify text-black">
            Menjadi platform terpercaya dan terbaik dalam hal deposito dan
            asuransi hingga Tahun 3020.
          </p>
        </div>

        <img
          src={require("./img/logo-indivara.png")}
          alt="logo"
          className="w-60 h-28 ml-9 md:ml-24 my-14"
        ></img>
      </div>

      <div className="text-center bg-slate-300">
        <p>©2022 Hak Cipta Dilindungi.</p>
      </div>
    </>
  );
};

export default Footer;
