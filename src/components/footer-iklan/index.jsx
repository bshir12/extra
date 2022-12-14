import React from 'react'
import { Carousel } from 'antd'

const FooterIklan = () => {
    return (

        <>

            <Carousel autoplay className='m-8'>
                <div>
                    <img src={require("./img/iklan1.png")} alt='logo'className='rounded-xl'></img>
                </div>
                <div>
                    <img src={require("./img/iklan2.png")} alt='logo'className='rounded-xl'></img>
                </div>
                <div>
                    <img src={require("./img/iklan3.png")} alt='logo'className='rounded-xl'></img>
                </div>
            </Carousel>

        </>
    )
}

export default FooterIklan