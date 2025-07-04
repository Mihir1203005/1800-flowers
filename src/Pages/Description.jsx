import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { flowersData } from '../Context'

const Description = () => {
    const [getData, setgetData] = useState({})
    const { Summer, setSummer,Summerr } = useContext(flowersData)
    const [FlowersList4, setFlowersList4] = useState([])
    const { id } = useParams()

    useEffect(() => {
        axios.get('https://flowers1800-db-2.onrender.com/Flowers').then((res) => setFlowersList4(res.data))
        axios.get(`${Summer}/${id}`).then((res) => setgetData(res.data)).catch((err) => console.log(err))
    }, [id])

    const postToCart = () => {
        const productData = {
            title: getData.title,
            price: getData.price,
            image: getData.image
        };
        axios.post(`https://flowers1800-db-2.onrender.com/Cart`, productData).then((res) => alert('Product Added To Cart')).catch((err) => console.log(err))
    }
    return (
        <>
            <div className=' container-lg col-12 d-flex flex-wrap mt-4 d-flex justify-content-center'>

                <div className='col-lg-5 col-md-7 col-12'>
                    <img src={getData.image} alt="" className='col-12 m-auto' />
                </div>
                <div className='col-lg-7 p-3 col-md-12 col-12'>
                    <h2>{getData.title}</h2>
                    <p>Passport Eligible</p>
                    <h5 style={{ fontWeight: '500' }}>Price: ${getData.price}</h5>
                    <h6>Category: {getData.category}</h6>
                    <hr />
                    <p className='d-flex lh-sm mt-4 align-items-center col-12'><input type="checkbox" style={{ height: '20px', width: '20px' }} /><span className='ms-3'>Subscribe and save 15% Set your frequency and duration. Skip, pause, or cancel anytime.</span> </p>
                    <hr />
                    <p className='d-flex lh-sm mt-4 align-items-center col-12'><input type="checkbox" style={{ height: '20px', width: '20px' }} /><span className='ms-3'>Free Shipping/No Service Charge on Eligible Items for One Full Year for Only In $99.</span></p>
                    <Link><button onClick={postToCart} className='btn col-12 bg-success text-light mt-5 fs-5' style={{ height: '50px', fontWeight: '700' }}>Add To Cart</button></Link>
                </div>
            </div>

            <h2 className=' text-center mt-5'>Trending Flowers & Gifts</h2>
            <div className='col-12 container-lg d-flex' style={{ overflow: 'scroll', overflowY: 'hidden' }}>
                {
                    FlowersList4.map((e) => (
                        <div className='col-lg-2 p-1 col-md-2 col-sm-3 col-5' style={{ cursor: 'pointer' }}>
                            <Link to={'/summer'} onClick={() => setSummer(Summerr)} className=' text-decoration-none text-dark'>
                                <img src={e.image} alt="" className='col-12' />
                                <div className='col-12 p-1' >
                                    <p>{e.title}</p>
                                </div>
                            </Link>
                        </div>
                    ))
                }
            </div>

        </>
    )
}

export default Description