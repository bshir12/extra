import { Home, ProductCard, DetailProduct, Profile, 
  Login, Register, Payment, Transaction, Porto } from "@pages";
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import { Formulir } from "./pages";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/listproduct' element={<ProductCard />} />
        <Route path='/detailproduct' element={<DetailProduct />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/payment' element={<Payment />} />
        <Route path='/formulir' element={<Formulir />} />
        <Route path='/transaksi' element={<Transaction/>}/>
        <Route path="/porto" element={<Porto/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
