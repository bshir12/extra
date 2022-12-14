import React from "react";
import { Carousel } from "antd";

const Landing = () => {
  return (
    <>
      <div className="md:m-8 bg-orange-500 p-3 rounded-lg font-normal ">
        <div className=" text-2xl font-bold text-white my-5px">
          <div className=" m-2 md:w-auto grid grid-cols-2 mx-auto  ">
            <div className="#">
              <div className="md:py-4">
                <div className="p-4 font-semibold md:text-4xl">
                  <h5 className="py-2">
                    {" "}
                    Save Your Future <br />
                    Indivara Investment
                  </h5>
                  <hr className="max-w-lg" />
                </div>

                <div className="p-4">
                  <p className="">Join Us And Take Your Pasif Income</p>
                  <p className="my-2 w-full text-xs md:max-w-2xl md:text-base">
                    {" "}
                    Terpercaya menjaga dan memberikan pelayanan terbaik selama
                    ratusan tahun, jaga dirimu dan orang tercinta dengan menjadi
                    bagian Indivara Investment.
                  </p>
                </div>
              </div>
              <div className=" flex ">
                <a
                  className=" w-52"
                  href="https://play.google.com/store/games"
                >
                  <img
                    src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                    alt="playstore"
                  ></img>
                </a>
                <a
                  className="w-60"
                  href="https://www.apple.com/id/app-store/"
                >
                  <img
                    src="https://www.loxone.com/enus/wp-content/uploads/sites/13/2017/09/IC_button-app-store@2x-1.png-1.png"
                    alt="AppStore"
                  ></img>
                </a>
              </div>
            </div>
            <Carousel autoplay effect="fade" className="md:max-w-xl p-4 ">
              <div>
                <h3 className="md:h-auto md:w-auto  justify-center">
                  <img
                    src="https://www.qoala.app/id/blog/wp-content/uploads/2021/04/Mengenal-Macam-Macam-Asuransi-yang-Tersedia-di-Indonesia.jpg"
                    alt="iklan"
                    className="rounded-xl"
                  />
                </h3>
              </div>
              <div>
                <h3 className="md:h-auto md:w-auto justify-center">
                  <img
                    src="https://www.qoala.app/id/blog/wp-content/uploads/2021/04/Mengenal-Macam-Macam-Asuransi-yang-Tersedia-di-Indonesia.jpg"
                    alt="iklan"
                    className="rounded-xl"
                  />
                </h3>
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
