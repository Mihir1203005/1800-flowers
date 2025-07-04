import React, { useContext, useEffect, useState } from 'react';
import { CiUser } from "react-icons/ci";
import { BsCart2 } from "react-icons/bs";
import { RiMenuSearchLine } from "react-icons/ri";
import { IoIosArrowForward } from "react-icons/io";
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { flowersData } from '../Context';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, auth2 } from '../Services/firebase';
import { signOut } from 'firebase/auth';

const Navbar = () => {
  const { setSummer, totalCartProduct, search, setSearch, Summerr, Birthday, Flowers, Plants, Gift_Baskets, Sympathy, cartSdata, settotalCartProduct, showData } = useContext(flowersData);

  const [user] = useAuthState(auth);
  const [user2] = useAuthState(auth2)
  const navigate = useNavigate();
  let me = 0;

  // LogOut User
  const handleDelete = () => {
    // Logout User In Google Auth
    signOut(auth).then((res) => alert('Log-out successful')).catch((err) => console.log(err))

    // Logiut User In Email Password
    signOut(auth2).then((res) => alert('Log-out successful')).catch((err) => alert('Email Or Password Are Wrong!!'))
    navigate('/login')
  }

  useEffect(() => {
    showData()
  }, [cartSdata])

  // ### Count Total Cart Products ###
  cartSdata.map((e, i) => me = i + 1)
  settotalCartProduct(me)

  return (
    <div className="ps-lg-5 pe-lg-5 ps-sm-5 pe-sm-5 ps-md-5 pe-md-5 col-12 " style={{ backgroundColor: '#fff' }}>
      <nav>
        <div className="Nav-1 d-flex col-12 align-items-center justify-content-between ps-lg-5 pe-lg-5 ">
          <button class="btn d-lg-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasLeft" aria-controls="offcanvasLeft"><RiMenuSearchLine className='fs-3' /></button>
          <Link to={'/'}><img src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/bltce6d6c480577e10e/5d4866eff9ece57fa9a82245/flowers.png?quality=100&auto=webp" alt="" className='mt-1' style={{ height: '60px', width: '110px' }} /></Link>
          <div className="serach col-6 d-flex d-lg-block d-none ps-2">
            <input type="text" onKeyPress={(e) => {
              if (e.key === "Enter") {
                navigate('/summer');
              }
            }} onChange={(e) => setSearch(e.target.value)} value={search} style={{ outline: 'none' }} className='col-9 p-2' placeholder='What Are You Looking For?' />
            <Link to={search ? '/summer' : ''} onClick={() => search ? setSummer(Summerr) : ''}><button className='btn text-light' style={{ backgroundColor: '#522C73', height: '45px', marginTop: '-6px' }}>SEARCH</button></Link>
          </div>

          <div className="option d-lg-flex d-md-flex col-lg-3 col-md-4 gap-5 align-items-center pt-3 justify-content-end d-sm-none d-none">

            {/* Sign In Button */}
            <Link to={user || user2 ? '' : '/login'} className='d-flex flex-column align-items-center text-decoration-none text-dark'>{user ? <img src={user.photoURL} className='col-6' style={{ borderRadius: '50px' }} /> : user2 ? '' : <CiUser className='fs-2' />}{user ? user.displayName : user2 ? '' : 'Sign In'}</Link>

            {/* Cart Button */}
            <Link to={'/cart'} className='d-flex flex-column align-items-center text-decoration-none text-dark'><BsCart2 className='fs-2' />({totalCartProduct})Cart</Link>

            {/* Logout Button */}
            <Link className='d-flex flex-column align-items-center text-decoration-none text-light bg-danger'>{user || user2 ? <button className=' btn text-light' onClick={handleDelete}>Logout</button> : ''}</Link>
          </div>
        </div>

        <hr />
        <div className="Nav-2 d-lg-flex align-items-center justify-content-between col-12 d-md-none d-sm-none d-none container-lg">
          <Link to={'/summer'} onClick={() => setSummer(Summerr)} className='text-decoration-none text-dark'><h6 >Summer </h6></Link>
          <Link to={'/summer'} onClick={() => setSummer(Birthday)} className='text-decoration-none text-dark' style={{ cursor: 'pointer' }}><h6>Birthday</h6></Link>
          <Link to={'/summer'} className='text-decoration-none text-dark'><h6 onClick={() => setSummer(Sympathy)} style={{ cursor: 'pointer' }}>Sympathy</h6></Link>
          <Link to={'/summer'} className='text-decoration-none text-dark'><h6 onClick={() => setSummer(Flowers)} style={{ cursor: 'pointer' }}>Flowers</h6></Link>
          <Link to={'/summer'} className='text-decoration-none text-dark'><h6 onClick={() => setSummer(Plants)} style={{ cursor: 'pointer' }}>Plants</h6></Link>
          <Link to={'/summer'} className='text-decoration-none text-dark'><h6 onClick={() => setSummer(Gift_Baskets)} style={{ cursor: 'pointer' }}>Gift Baskets & Food</h6></Link>
          <Link to={'/summer'} className='text-decoration-none text-dark'><h6 onClick={() => setSummer(Birthday)} style={{ cursor: 'pointer' }}>Gifts & More</h6></Link>
          <Link to={'/summer'} className='text-decoration-none text-dark'><h6 onClick={() => setSummer(Summerr)} style={{ cursor: 'pointer' }}>Sale</h6></Link>
          <Link to={'/summer'} className='text-decoration-none text-dark'><h6 onClick={() => setSummer(Sympathy)} style={{ cursor: 'pointer' }}> Community</h6></Link>
        </div>
      </nav>

      {/* Off Canvas */}
      <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasLeft" aria-labelledby="offcanvasLeftLabel">
        <div class="offcanvas-header">
          <Link to={'/'}> <img id="offcanvasLeftLabel" src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/bltce6d6c480577e10e/5d4866eff9ece57fa9a82245/flowers.png?quality=100&auto=webp" alt="" className='mt-1' style={{ height: '60px', width: '110px' }} /></Link>
          <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
          <div className="serach col-12 text-end d-flex">
            <input type="text" onChange={(e) => setSearch(e.target.value)} value={search} className='col-9 p-2' placeholder='What Are You Looking For?' />

            <Link to={search ? '/summer' : ''} onClick={() => search ? setSummer(Summerr) : ''}> <button className='btn text-light' style={{ backgroundColor: '#522C73', height: '45px' }} data-bs-dismiss="offcanvas" aria-label="Close">SEARCH</button></Link>
          </div>

          <div className="option d-flex gap-5 align-items-center pt-3 col-12 justify-content-center">

            {/* Sign In Button */}
            <Link data-bs-dismiss="offcanvas" aria-label="Close" to={user || user2 ? '' : '/login'} className='d-flex flex-column align-items-center text-decoration-none text-dark'>{user ? <img src={user.photoURL} className='col-6' style={{ borderRadius: '50px' }} /> : user2 ? '' : <CiUser className='fs-2' />}{user ? user.displayName : user2 ? '' : 'Sign In'}</Link>

            {/* Cart Button */}
            <Link data-bs-dismiss="offcanvas" aria-label="Close" to={'/cart'} className='d-flex flex-column align-items-center text-decoration-none text-dark'><BsCart2 className='fs-2' />({totalCartProduct})Cart</Link>

            {/* Logout Button */}
            <Link data-bs-dismiss="offcanvas" aria-label="Close" className='d-flex flex-column align-items-center text-decoration-none text-light bg-danger'>{user || user2 ? <button className=' btn text-light' onClick={handleDelete}>Logout</button> : ''}</Link>

          </div>

          <div className="Links mt-3">

            <Link to={'/summer'} data-bs-dismiss="offcanvas" aria-label="Close" className='text-decoration-none text-dark' onClick={() => setSummer(Summerr)}><h5 className='d-flex justify-content-between ms-3 me-3 text-decoration-none text-dark' style={{ height: '40px' }}>Summer<IoIosArrowForward /></h5></Link>

            <Link to={'/summer'} data-bs-dismiss="offcanvas" aria-label="Close" className='text-decoration-none text-dark'><h5 onClick={() => setSummer(Birthday)} className='d-flex justify-content-between ms-3 me-3' style={{ height: '40px', cursor: 'pointer' }}>Birthday <IoIosArrowForward /> </h5></Link>

            <Link to={'/summer'} data-bs-dismiss="offcanvas" aria-label="Close" className='text-decoration-none text-dark' onClick={() => setSummer(Sympathy)}><h5 className='d-flex justify-content-between ms-3 me-3' style={{ height: '40px' }}>Sympathy <IoIosArrowForward /></h5></Link>

            <Link to={'/summer'} data-bs-dismiss="offcanvas" aria-label="Close" className='text-decoration-none text-dark' onClick={() => setSummer(Gift_Baskets)}><h5 className='d-flex justify-content-between ms-3 me-3' style={{ height: '40px' }}>Occasions <IoIosArrowForward /></h5></Link>

            <Link to={'/summer'} data-bs-dismiss="offcanvas" aria-label="Close" className='text-decoration-none text-dark' onClick={() => setSummer(Flowers)}><h5 className='d-flex justify-content-between ms-3 me-3' style={{ height: '40px' }}>Flowers <IoIosArrowForward /></h5></Link>

            <Link to={'/summer'} data-bs-dismiss="offcanvas" aria-label="Close" className='text-decoration-none text-dark' onClick={() => setSummer(Plants)}><h5 className='d-flex justify-content-between ms-3 me-3' style={{ height: '40px' }}>Plants <IoIosArrowForward /></h5></Link>

            <Link to={'/summer'} data-bs-dismiss="offcanvas" aria-label="Close" className='text-decoration-none text-dark'><h5 onClick={() => setSummer(Gift_Baskets)} className='d-flex justify-content-between ms-3 me-3' >Gift Baskets & Food <IoIosArrowForward /></h5></Link>

            <Link to={'/summer'} data-bs-dismiss="offcanvas" aria-label="Close" className='text-decoration-none text-dark'><h5 onClick={() => setSummer(Summerr)} className='d-flex justify-content-between m-3 ms-3 me-3'>Sale <IoIosArrowForward /></h5></Link>

            <Link to={'/summer'} data-bs-dismiss="offcanvas" aria-label="Close" className='text-decoration-none text-dark'><h5 onClick={() => setSummer(Sympathy)} className='d-flex justify-content-between ms-3 me-3'> Community <IoIosArrowForward /></h5></Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
