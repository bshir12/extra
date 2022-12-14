import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import api from "../../services/api";


export default function Login() {
  const navigate = useNavigate();

  const [values, setValues] = useState({
    username: "",
    password: "",
    showPassword: false,
  })

  const getLogin = async (e) => {
    try {
      const url = (`/api/v1/user/`);
      const response = await api.get(url);
      console.log(response.data);
      setValues(response.data)
    } catch {
      console.log("error");
    }
  }
  useEffect(() => {
    getLogin();
    //handleSubmit();
  }, [])
/*
    const handleSubmit = (e) => {
      e.preventDefault();
      axios.post("/api/v1/user/", {
          email: values.email,
          password: values.pass,
        })
        .then((res) => {
          localStorage.setItem("token", res.data.token);
          navigate("/dashboard");
        })
        .catch((err) => console.error(err));
    };*/


  return (
    <>
            <div className="mx-auto mt-14 lg:w-4/12 px-4 relative flex flex-col w-full mb-6 shadow-xl shadow-gray-500 rounded-lg bg-slate-100 ">
              <div className="rounded-t mb-0 px-6 py-6">
                <div className="text-center mb-3">
                  <h3 className="text-blueGray-500 text-sm font-bold">
                    Log In
                  </h3>
                </div>
                
                <hr className="mt-6 border-b-1 border-blueGray-300" />
              </div>
              <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                <form>
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Username
                    </label>
                    <input
                      type="email"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="bashir"
                      required
                      onChange={(e)=> setValues({...values, username: e.target.value})}
                    />
                  </div>

                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Password"
                      required
                      onChange={(e) => setValues({ ...values, password: e.target.value })}
                      //value={password}
                      //onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <div>
                  </div>
                  <div className="text-center mt-6">
                    <button
                      className="bg-orange-500 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow w-full hover:bg-orange-700"
                      type="button"
                      onClick={() => navigate(`/profile`)}
                    >
                      Sign In
                    </button>
                  </div>
                  <div className="text-center mt-6">
                    <button
                      className="bg-orange-500 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow w-full hover:bg-orange-700"
                      type="button"
                      onClick={() => navigate(`/register`)}
                    >
                      Register
                    </button>
                  </div>
                </form>
              </div>
          </div>
    </>
  );
}
