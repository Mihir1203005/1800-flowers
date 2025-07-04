import React, { useContext, useEffect, useState } from 'react'
import logo2 from '../assets/logo2.png'
import { flowersData } from '../Context.jsx'
import img1 from '../assets/img1.png'
import img2 from '../assets/img2.png'
import img3 from '../assets/img3.png'
import img4 from '../assets/img4.png'
import img5 from '../assets/img5.png'
import img6 from '../assets/img6.png'
import img7 from '../assets/img7.png'
import img8 from '../assets/img8.jpg'
import img9 from '../assets/img9.jpg'
import img10 from '../assets/img10.jpg'
import img11 from '../assets/img11.jpg'
import img12 from '../assets/img12.jpg'

import axios from 'axios'
import { Link } from 'react-router-dom'

const Home = () => {
    const { setSummer,Summerr, Birthday, Flowers, Sympathy, } = useContext(flowersData)
    let Description = 'https://1800flowers.netlify.app/description'

    const [FlowersList1, setFlowersList1] = useState([])
    const [FlowersList2, setFlowersList2] = useState([])
    const [FlowersList3, setFlowersList3] = useState([])
    const [FlowersList4, setFlowersList4] = useState([])

    let FlowersListAPI = {
        API1: 'https://flowers1800-db-2.onrender.com/FlowersList1',
        API2: 'https://flowers1800-db-2.onrender.com/FlowersList2',
        API3: 'https://flowers1800-db-2.onrender.com/FlowersList2',
        API4: 'https://flowers1800-db-2.onrender.com/FlowersList2',
    }

    useEffect(() => {
        axios.get(FlowersListAPI.API1).then((res) => setFlowersList1(res.data))
        axios.get(FlowersListAPI.API3).then((res) => setFlowersList2(res.data))
        axios.get(FlowersListAPI.API3).then((res) => setFlowersList3(res.data))
        axios.get(FlowersListAPI.API4).then((res) => setFlowersList4(res.data))
    }, [])

    return (
        <>
            <div className='HomePage' style={{ fontFamily: "'Poppins', sans-serif" }}>
                {/* Promo Banner */}
                <header className='col-12'>
                    <div className='bg-success text-white p-3 text-center col-12'>
                        <h5 className='mb-0'>Passport to Summer Deals! Members Save 30%</h5>
                    </div>
                    <div className='hero-banner position-relative'>
                        <Link to={'/summer'} onClick={() => setSummer(Birthday)}>
                            <img 
                                className='w-100' 
                                style={{ height: '350px', objectFit: 'cover' }} 
                                src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt4324f2c5cb150cf4/668ed38642bfac6ad686cd0a/send-birthday-flowers-hero-fy25-summer-newcta.jpg?auto=webp" 
                                alt="Summer flowers" 
                            />
                        </Link>
                    </div>
                </header>

                {/* Flower Categories Section */}
                <section className='container-lg py-5'>
                    <h2 className='text-center mb-4 fw-bold' style={{ color: '#379B79' }}>Send Flowers & Exclusive Gifts</h2>
                    <div className="row g-3">
                        {FlowersList1.map((e) => (
                            <div className='col-lg-2 col-md-4 col-sm-6 col-6' key={e.id}>
                                <Link 
                                    to={'/summer'} 
                                    onClick={() => setSummer(Summerr)} 
                                    className='text-decoration-none text-dark d-block h-100'
                                >
                                    <div className='card h-100 border-0 shadow-sm hover-effect'>
                                        <img 
                                            src={e.image} 
                                            alt={e.title} 
                                            className='card-img-top img-fluid' 
                                            style={{ height: '150px', objectFit: 'cover' }}
                                        />
                                        <div className='card-body text-center p-2'>
                                            <p className='card-text fw-semibold'>{e.title}</p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Featured Banner */}
                <div className='container-lg my-4 position-relative d-none d-sm-block' style={{ height: '400px', overflow: 'hidden' }}>
                    <img 
                        className='w-100 h-100' 
                        src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/bltc4d490e96bce8487/66a7d6fb7cd4c92b2c394c24/love-shack-fancy-zone-10-banner-fy25-summer.jpg?auto=webp" 
                        alt="Featured collection" 
                        style={{ objectFit: 'cover' }}
                    />
                    <div className='position-absolute top-50 start-50 translate-middle text-center w-75'>
                        <div className='mx-auto' style={{ maxWidth: '200px' }}>
                            <img className='img-fluid' src={logo2} alt="Brand logo" />
                        </div>
                        <p className='text-white mt-3 mb-4' style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.5)' }}>
                            We're sorry to interrupt this daydream, but these limited-edition (and oh-so-dreamy) pieces won't be here for long.
                        </p>
                        <Link to={'/summer'}>
                            <button 
                                onClick={() => setSummer(Birthday)} 
                                className='btn btn-light text-dark fw-bold px-4 py-2 rounded-pill shadow-sm'
                                style={{ backgroundColor: 'rgba(255,255,255,0.9)' }}
                            >
                                Shop The Collection
                            </button>
                        </Link>
                    </div>
                </div>

                {/* Sweet & Savory Section */}
                <section className='container-lg py-5'>
                    <h2 className='text-center mb-4 fw-bold' style={{ color: '#379B79' }}>Sweet & Savory Surprises</h2>
                    <div className="row g-3">
                        {FlowersList2.map((e) => (
                            <div className='col-lg-2 col-md-4 col-sm-6 col-6' key={e.id}>
                                <Link 
                                    to={'/summer'} 
                                    onClick={() => setSummer(Sympathy)} 
                                    className='text-decoration-none text-dark d-block h-100'
                                >
                                    <div className='card h-100 border-0 shadow-sm hover-effect'>
                                        <img 
                                            src={e.image} 
                                            alt={e.title} 
                                            className='card-img-top img-fluid' 
                                            style={{ height: '150px', objectFit: 'cover' }}
                                        />
                                        <div className='card-body text-center p-2'>
                                            <p className='card-text fw-semibold'>{e.title}</p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Image Grid Section */}
                <div className='container-lg'>
                    <div className='row'>
                        <div className='col-12 mb-3'>
                            <Link to={'/summer'} onClick={() => setSummer(Summerr)}>
                                <img className='img-fluid rounded shadow-sm w-100' src={img1} alt="Promotional banner" />
                            </Link>
                        </div>
                        <div className='col-md-6 col-12 mb-3'>
                            <Link to={'/summer'} onClick={() => setSummer(Summerr)}>
                                <img src={img2} alt="Flower arrangement" className='img-fluid rounded shadow-sm w-100' />
                            </Link>
                        </div>
                        <div className='col-md-6 col-12 mb-3'>
                            <Link to={'/summer'} onClick={() => setSummer(Summerr)}>
                                <img src={img3} alt="Flower bouquet" className='img-fluid rounded shadow-sm w-100' />
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Full Width Banner */}
                <div className='container-lg my-4'>
                    <Link to={'/summer'} onClick={() => setSummer(Sympathy)}>
                        <img src={img4} alt="Sympathy flowers" className='img-fluid rounded shadow-sm w-100' />
                    </Link>
                </div>

                {/* Split Banner */}
                <div className='container-lg my-4'>
                    <div className='row'>
                        <div className='col-md-6 col-12 mb-3'>
                            <Link to={'/summer'} onClick={() => setSummer(Birthday)}>
                                <img src={img5} alt="Birthday flowers" className='img-fluid rounded shadow-sm w-100' />
                            </Link>
                        </div>
                        <div className='col-md-6 col-12 mb-3'>
                            <Link to={'/summer'} onClick={() => setSummer(Birthday)}>
                                <img src={img6} alt="Birthday bouquet" className='img-fluid rounded shadow-sm w-100' />
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Trending Section */}
                <div className='container-lg py-4'>
                    <h2 className='text-center mb-4 fw-bold' style={{ color: '#379B79' }}>Trending Flowers & Gifts</h2>
                    <div className='d-flex overflow-auto pb-3' style={{ scrollbarWidth: 'none' }}>
                        <div className='d-flex flex-nowrap'>
                            {FlowersList4.map((e) => (
                                <div className='flex-shrink-0 me-3' style={{ width: '200px' }} key={e.id}>
                                    <Link to={'/summer'} onClick={() => setSummer(Flowers)} className='text-decoration-none text-dark'>
                                        <div className='card border-0 shadow-sm h-100'>
                                            <img 
                                                src={e.image} 
                                                alt={e.title} 
                                                className='card-img-top' 
                                                style={{ height: '150px', objectFit: 'cover' }}
                                            />
                                            <div className='card-body p-2'>
                                                <p className='card-text fw-semibold text-center'>{e.title}</p>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Image Grid */}
                <div className="container-lg my-5">
                    <Link to={'/summer'} onClick={() => setSummer(Birthday)} className="row g-3">
                        <div className="col-6 col-md-3">
                            <img src={img8} alt="Flower arrangement 1" className="img-fluid rounded shadow-sm" />
                        </div>
                        <div className="col-6 col-md-3">
                            <img src={img9} alt="Flower arrangement 2" className="img-fluid rounded shadow-sm" />
                        </div>
                        <div className="col-6 col-md-3">
                            <img src={img10} alt="Flower arrangement 3" className="img-fluid rounded shadow-sm" />
                        </div> 
                        <div className="col-6 col-md-3">
                            <img src={img11} alt="Flower arrangement 4" className="img-fluid rounded shadow-sm" />
                        </div>
                    </Link>
                </div>

                {/* Final Banner */}
                <div className='container-lg my-4'>
                    <Link to={'/summer'} onClick={() => setSummer(Summerr)}>
                        <img src={img7} alt="Final promotion" className='img-fluid rounded shadow-sm w-100' />
                    </Link>
                </div>

                {/* Testimonials */}
                <div className='container-lg my-5 py-4 rounded' style={{ backgroundColor: '#f8f9fa' }}>
                    <h3 className='text-center mb-4 fw-bold' style={{ color: '#379B79' }}>What Our Customers Say About Us</h3>
                    <div className='row'>
                        <div className='col-lg-3 col-md-6 mb-4'>
                            <Link to={`${Description}/18`} className='card h-100 border-0 bg-transparent text-decoration-none text-dark'>
                                <div className='card-body text-center'>
                                    <div className='mx-auto' style={{ width: '80px' }}>
                                        <img className='img-fluid rounded-circle' src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt4c9be4e2d955776a/602a81580aba282006983f75/hp-reviews-final-167891.png?quality=100&auto=webp" alt="Reviewer" />
                                    </div>
                                    <div className='my-2 text-warning'>★★★★★</div>
                                    <h5 className='fw-bold'>Beautiful</h5>
                                    <p className='mb-1'>"I bought these for my Nana's birthday she said they were amazingly beautiful!"</p>
                                    <p className='text-muted'>– Pamela</p>
                                </div>
                            </Link>
                        </div>

                        <div className='col-lg-3 col-md-6 mb-4'>
                            <Link to={`${Description}/27`} className='card h-100 border-0 bg-transparent text-decoration-none text-dark'>
                                <div className='card-body text-center'>
                                    <div className='mx-auto' style={{ width: '80px' }}>
                                        <img className='img-fluid rounded-circle' src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt2b874f93791fce4a/62b09064482ba357e65ddbe8/web_icons_125x125_ocean_breeze_orchids.png?quality=100&auto=webp" alt="Reviewer" />
                                    </div>
                                    <div className='my-2 text-warning'>★★★★★</div>
                                    <h5 className='fw-bold'>Best Flowers</h5>
                                    <p className='mb-1'>"These flowers are beautiful and just as vibrant as the picture. One of the most beautiful bouquets I have ever seen!"</p>
                                    <p className='text-muted'>– Michelle</p>
                                </div>
                            </Link>
                        </div>

                        <div className='col-lg-3 col-md-6 mb-4'>
                            <Link to={`${Description}/50`} className='card h-100 border-0 bg-transparent text-decoration-none text-dark'>
                                <div className='card-body text-center'>
                                    <div className='mx-auto' style={{ width: '80px' }}>
                                        <img className='img-fluid rounded-circle' src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blte0c04d8be69858b7/6259b075b9aa584a4e32649f/web_icons_125x125_classic_budding_rose.png?quality=100&auto=webp" alt="Reviewer" />
                                    </div>
                                    <div className='my-2 text-warning'>★★★★★</div>
                                    <h5 className='fw-bold'>Very Happy!</h5>
                                    <p className='mb-1'>"I love how the recipient can plant the roses and enjoy them for a long time. The plant is healthy and the candle I ordered with it smells great!"</p>
                                    <p className='text-muted'>– Betty</p>
                                </div>
                            </Link>
                        </div>

                        <div className='col-lg-3 col-md-6 mb-4'>
                            <Link to={`${Description}/2`} className='card h-100 border-0 bg-transparent text-decoration-none text-dark'>
                                <div className='card-body text-center'>
                                    <div className='mx-auto' style={{ width: '80px' }}>
                                        <img className='img-fluid rounded-circle' src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt345841a83a3efa97/6238bb5a8ee56a1b0ac2fa6d/web_icons_125x125_Gourmet_Drizzled_Berries-v2.webp?quality=100&auto=webp" alt="Reviewer" />
                                    </div>
                                    <div className='my-2 text-warning'>★★★★★</div>
                                    <h5 className='fw-bold'>Sweet Anniversary</h5>
                                    <p className='mb-1'>"The strawberries arrived on time and were fantastic as always. Definitely made my anniversary a lot sweeter!"</p>
                                    <p className='text-muted'>– Brian</p>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Footer Image */}
                <div className='container-lg mb-5'>
                    <img src={img12} className='img-fluid w-100 rounded shadow-sm' alt="Footer banner" />
                </div>
            </div>

            {/* Inline Styles */}
            <style>
                {`
                    .hover-effect:hover {
                        transform: translateY(-5px);
                        transition: all 0.3s ease;
                        box-shadow: 0 10px 20px rgba(0,0,0,0.1) !important;
                    }
                    .card {
                        transition: all 0.3s ease;
                    }
                    .hero-banner::after {
                        content: '';
                        position: absolute;
                        top: 0;
                        left: 0;
                        right: 0;
                        bottom: 0;
                        background: rgba(0,0,0,0.1);
                    }
                    ::-webkit-scrollbar {
                        display: none;
                    }
                `}
            </style>
        </>
    )
}

export default Home
