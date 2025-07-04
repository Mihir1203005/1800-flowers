import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { flowersData } from '../Context'

const Cart = () => {

    const { cartSdata, showData } = useContext(flowersData)

    // ### Delete Product From Cart
    const delteProduct = (id) => {
        axios.delete(`https://flowers1800-db-2.onrender.com/Cart/${id}`).then((res) => alert('Product Deleted From Cart'))
        showData()
    }

    return (    
        <>
            <div className="main col-12 d-flex flex-wrap container-lg">
                {
                    cartSdata == '' ? <div className=' col-12 text-center'>
                        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-yrKy00koNPRSg-MAE5rkMmy2HiIAE4U_HQ&s' className='col-3 mt-5' />
                    </div> : cartSdata.map((e) => (
                        <div className='col-lg-3 p-2 col-md-4 col-sm-6 col-12 '>
                            <img src={e.image} alt="" className=' col-12' />
                            <h5 className='text-dark'>{e.title}</h5>
                            <p className=' text-dark'>${e.price}</p>
                            <button className=' btn bg-danger text-light' onClick={() => delteProduct(e.id)}>Delete From Cart</button>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default Cart