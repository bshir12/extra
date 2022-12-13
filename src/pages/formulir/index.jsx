import React from 'react'
import { Header, Footer, TombolKembali, NavbarDua } from '@components'
import axios from 'axios';
import { Component } from 'react';
import { Carousel } from 'antd';
import { Link } from "react-router-dom";


export default class Formulir extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      fullname: '',
      tanggallahir: '',
      phonenum: '',
      email: '',
      address: '',
      norek: '',
      jenisasuransi: '',
      nik: '',
      asuransibank: ''
    }
  }
  handleChange = (ex) => {
    this.setState({ [ex.target.name]: ex.target.value });
  }

  addForm = e => {
    e.preventDefault()
    console.log(this.state);
    axios.post("http://localhost:8080/api/v1/formulir", this.state)
      .then(response => {
        localStorage.setItem("fullname", this.state.fullname)
        localStorage.setItem("tanggallahir", this.state.tanggallahir)
        localStorage.setItem("phonenum", this.state.phonenum)
        localStorage.setItem("email", this.state.email)
        localStorage.setItem("address", this.state.address)
        localStorage.setItem("norek", this.state.norek)
        localStorage.setItem("jenisasuransi", this.state.jenisasuransi)
        localStorage.setItem("nik", this.state.nik)
        localStorage.setItem("asuransibank", this.state.asuransibank)

        window.location.href=('/profile');
      })
      .catch(error => {
        console.log(error);
      })
  }
  render() {

    
    const {
      fullname,
      tanggallahir,
      phonenum,
      email,
      address,
      norek,
      jenisasuransi,
      nik,
      asuransibank
    } = this.state;
    return (
      <>

        <NavbarDua />
        <div className='h-auto flex justify-center mt-20 rounded-lg border-b-2 shadow-xl mx-32'>
          <div className='w-5/12'>
            <p className=''>Layanan Nasabah</p>
            <h3 className='font-semibold text-2xl'>Formulir</h3>
            <p>Silahkan isi formulir secara benar dan jelas untuk kemudahan verifikasi berkas anda.</p>
          </div>
          <img src={require('./img/layanan-img.png')} className='w-72' alt=""></img>
        </div>
        <div className='flex'>

        <div className='bg-blue-500 block h-auto m-28 w-2/4 rounded-lg'>
          <p className='font-semibold text-2xl shadow-xl text-white text-center'>Formulir Pembukaan Asuransi </p>
          <div className='mx-32 my-5 justify-center'>
            {/* fullname */}
            <label className="form-label inline-block mb-2 text-gray-700">Full Name</label>
            <input type="text" name='fullname' value={fullname} className='block w-96 h-7 rounded-sm' placeholder='Full Name' onChange={this.handleChange} />

            {/* tanggallahir */}
            <label className="form-label inline-block mb-2 text-gray-700">Date Of Birth</label>
            <input type="text" name='tanggallahir' value={tanggallahir} className='block w-96 h-7 rounded-sm' placeholder='Date Of Birth' onChange={this.handleChange} />

            {/* phonenum */}
            <label className="form-label inline-block mb-2 text-gray-700">Phone Number</label>
            <input type="text" name='phonenum' value={phonenum} className='block w-96 h-7 rounded-sm' placeholder='Phone Number' onChange={this.handleChange} />

            {/* email */}
            <label className="form-label inline-block mb-2 text-gray-700">Email Address</label>
            <input type="text" name='email' value={email} className='block w-96 h-7 rounded-sm' placeholder='Email Address' onChange={this.handleChange} />

            {/* address */}
            <label className="form-label inline-block mb-2 text-gray-700">Address</label>
            <input type="text" name='address' value={address} className='block w-96 h-7 rounded-sm' placeholder='Address' onChange={this.handleChange} />

            {/* norek */}
            <label className="form-label inline-block mb-2 text-gray-700">Rekening Number</label>
            <input type="text" name='norek' value={norek} className='block w-96 h-7 rounded-sm' placeholder='Rekening Number' onChange={this.handleChange} />

            {/* jenisasuransi */}
            <label className="form-label inline-block mb-2 text-gray-700">Insurance Type</label>
            <input type="text" name='jenisasuransi' value={jenisasuransi} className='block w-96 h-7 rounded-sm' placeholder='Insurance Type' onChange={this.handleChange} />

            {/* nik */}
            <label className="form-label inline-block mb-2 text-gray-700"> National Identity Number (NIK)</label>
            <input type="text" name='nik' value={nik} className='block w-96 h-7 rounded-sm' placeholder='National Identity Number (NIK)' onChange={this.handleChange} />

            {/* asuransibank */}
            <label className="form-label inline-block mb-2 text-gray-700">Bank Insurance</label>
            <input type="text" name='asuransibank' value={asuransibank} className='block w-96 h-7 rounded-sm' placeholder='Bank Insurance' onChange={this.handleChange} />
          </div>
          <div className='text-center'>
            <button
              className=" mb-6 w-44 bg-blue-400 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:bg-blue-700"
              type="button" onClick={this.addForm}>Send Data
            </button>
          </div>
        </div>
        <Carousel autoplay className=' w-96 mt-44 mr-12'>
          <div>
          <img className='rounded-md' src={require('./img/gambariklan1.webp')} alt=""></img>
          </div>
          <div>
          <img className='rounded-md' src={require('./img/gambariklan1.webp')} alt=""></img>
          </div>
        </Carousel>
        </div>
        <TombolKembali/>
        <br />
      <div>
      </div>
        <Footer/>
      </>
      
    )
  }
}