import React, { Component } from "react";
import { Header, Footer } from "@components";
import axios from "axios";

export default class register extends Component {
  constructor(props) {
    super(props);

    this.state = { fullname: '', phonenum: '', password: '', username: '', email: '' }
  }
  handleChange = (ex) => {
    this.setState({ [ex.target.name]: ex.target.value })
  }
  addRegist = e => {
    e.preventDefault()
    console.log(this.state)
    axios.post("http://localhost:8080/api/v1/register", this.state)
      .then(response => {
        localStorage.setItem("fullname", this.state.fullname)
        localStorage.setItem("phonenum", this.state.phonenum)
        localStorage.setItem("password", this.state.password)
        localStorage.setItem("email", this.state.email)

        window.location.href = ('/login')
      })
      .catch(error => {
        console.log(error)
      })
  }
  render() {
    const {
      fullname,
      phonenum,
      password,
      email
    } = this.state
 
  return(
    <>
    <Header/>
  <div className="container mx-auto px-4 h-full shadow-2xl w-fit my-12">
    <div className="flex content-center items-center justify-center h-full">

          <div className="text-center">
            <h6 className=" text-lg font-bold">AYO GABUNG BERSAMA</h6>
            <h6 className=" text-lg font-bold text-orange-600">INDIVARA INVESTMENT</h6>
          </div>

      <div className="w-full lg:w-6/12 px-4">
        <div className="rounded-t mb-0 px-6 py-6">

         
          <div className='mx-32 my-5 justify-center'>
            {/* fullname */}
            <label className="form-label inline-block mb-2 text-gray-700">Full Name</label>
            <input type="text" name='fullname' value={fullname} className='block w-96 h-7 rounded-sm border-b-2' placeholder='Contoh : Portgas D Ace' onChange={this.handleChange} />

            {/* phonenum */}
            <label className="form-label inline-block mb-2 text-gray-700">Phone Number</label>
            <input type="text" name='phonenum' value={phonenum} className='block w-96 h-7 rounded-sm border-b-2' placeholder='Contoh : 62812848473 ' onChange={this.handleChange} />
            {/* email */}
            <label className="form-label inline-block mb-2 text-gray-700">email</label>
            <input type="text" name='phonenum' value={email} className='block w-96 h-7 rounded-sm border-b-2' placeholder='Contoh : portgasace@invest.com ' onChange={this.handleChange} />
            {/* password */}
            <label className="form-label inline-block mb-2 text-gray-700">password</label>
            <input type="text" name='phonenum' value={password} className='block w-96 h-7 rounded-sm border-b-2' placeholder='Contoh : ********* ' onChange={this.handleChange} />
            </div>
        </div>
        <div className="text-center mt-6">
          <button
            className="bg-orange-400 text-white hover:shadow-lg hover:bg-orange-800 w-60 transition-all duration-150 rounded-md ml-56 mb-5 h-8"
            type="button"
            onClick={this.addRegist}
          >Create Account
          </button>
        </div>
      </div>
    </div>
  </div>
  <Footer/>
    </>
  );
}
}
