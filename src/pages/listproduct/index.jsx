import React from 'react'
import { NavbarDua, Footer, TabList,} from '@components'
import { Carousel } from 'antd'


const ListProduct = () => {
  return (
    <> 
          <NavbarDua/>
          <Carousel autoplay className='m-8'>
            <div>
              <img src={require("./img/iklan1.png")} alt='logo' className='rounded-xl'></img>
            </div>
            <div>
              <img src={require("./img/iklan2.png")} alt='logo' className='rounded-xl'></img>
            </div>
            <div>
              <img src={require("./img/iklan3.png")} alt='logo' className='rounded-xl'></img>
            </div>
          </Carousel>
          <h2 className='text-center font-semibold text-2xl shadow-lg m-8'>Pilih Berdasarkan Kategori</h2>
          <TabList />
          <Footer />

    </>
  )
}

export default ListProduct