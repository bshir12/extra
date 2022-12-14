import React from 'react'

const Portrans = () => {
  return (
    <div className='block ml-9 mt-4 w-40 h-50 rounded-lg'>
      <div className='flex justify-left'>
        <img src={require('./img/porto.png')} className='w-10 ml-14' alt='child'></img>
        <p>Porto Anda</p>
      </div>
{/*      <div className='flex justify-left'>
        <img src={require('./img/transaksi.png')} className='w-10 ml-14' alt='child'></img>
        <p>Transaction</p>
      </div>*/}
    </div>
  )
}

export default Portrans