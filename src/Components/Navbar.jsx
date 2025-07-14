import React, { useContext, useEffect } from 'react';
import { CiUser } from "react-icons/ci";
import { BsCart2 } from "react-icons/bs";
import { RiMenuSearchLine } from "react-icons/ri";
import { IoIosArrowForward } from "react-icons/io";
import { Link, useNavigate } from 'react-router-dom';
import { flowersData } from '../Context';

const Navbar = () => {
  const {
    setSummer, totalCartProduct, search, setSearch,
    Summerr, Birthday, Flowers, Plants, Gift_Baskets, Sympathy,
    cartSdata, settotalCartProduct, showData
  } = useContext(flowersData);

  const navigate = useNavigate();

  useEffect(() => {
    showData();
  }, [cartSdata]);

  useEffect(() => {
    settotalCartProduct(cartSdata.length);
  }, [cartSdata]);

  return (
    <div className="ps-lg-5 pe-lg-5 ps-sm-5 pe-sm-5 ps-md-5 pe-md-5 col-12" style={{ backgroundColor: '#fff' }}>
      <nav>
        <div className="Nav-1 d-flex col-12 align-items-center justify-content-between ps-lg-5 pe-lg-5">
          <button className="btn d-lg-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasLeft">
            <RiMenuSearchLine className='fs-3' />
          </button>

          <Link to={'/'}>
            <img src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/bltce6d6c480577e10e/5d4866eff9ece57fa9a82245/flowers.png?quality=100&auto=webp"
              alt="" style={{ height: '60px', width: '110px' }} className='mt-1' />
          </Link>

          <div className="serach col-6 d-flex d-lg-block d-none ps-2">
            <input type="text" onKeyPress={(e) => {
              if (e.key === "Enter") {
                navigate('/summer');
              }
            }} onChange={(e) => setSearch(e.target.value)} value={search} className='col-9 p-2' placeholder='What Are You Looking For?' />
            <Link to={search ? '/summer' : ''} onClick={() => search && setSummer(Summerr)}>
              <button className='btn text-light' style={{ backgroundColor: '#522C73', height: '45px', marginTop: '-6px' }}>SEARCH</button>
            </Link>
          </div>

          <div className="option d-lg-flex d-md-flex col-lg-3 col-md-4 gap-5 align-items-center pt-3 justify-content-end d-sm-none d-none">
            <Link to={'/login'} className='d-flex flex-column align-items-center text-decoration-none text-dark'>
              <CiUser className='fs-2' />
              Sign In
            </Link>

            <Link to={'/cart'} className='d-flex flex-column align-items-center text-decoration-none text-dark'>
              <BsCart2 className='fs-2' />({totalCartProduct})Cart
            </Link>
          </div>
        </div>

        <hr />

        <div className="Nav-2 d-lg-flex align-items-center justify-content-between col-12 d-md-none d-sm-none d-none container-lg">
          {[
            ["Summer", Summerr],
            ["Birthday", Birthday],
            ["Sympathy", Sympathy],
            ["Flowers", Flowers],
            ["Plants", Plants],
            ["Gift Baskets & Food", Gift_Baskets],
            ["Gifts & More", Birthday],
            ["Sale", Summerr],
            ["Community", Sympathy]
          ].map(([name, category], idx) => (
            <Link key={idx} to="/summer" onClick={() => setSummer(category)} className='text-decoration-none text-dark'>
              <h6>{name}</h6>
            </Link>
          ))}
        </div>
      </nav>

      {/* Off Canvas */}
      <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasLeft">
        <div className="offcanvas-header">
          <Link to={'/'}>
            <img src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/bltce6d6c480577e10e/5d4866eff9ece57fa9a82245/flowers.png?quality=100&auto=webp"
              alt="" style={{ height: '60px', width: '110px' }} />
          </Link>
          <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" />
        </div>

        <div className="offcanvas-body">
          <div className="serach col-12 text-end d-flex">
            <input type="text" onChange={(e) => setSearch(e.target.value)} value={search} className='col-9 p-2' placeholder='What Are You Looking For?' />
            <Link to={search ? '/summer' : ''} onClick={() => search && setSummer(Summerr)}>
              <button className='btn text-light' style={{ backgroundColor: '#522C73', height: '45px' }} data-bs-dismiss="offcanvas">SEARCH</button>
            </Link>
          </div>

          <div className="option d-flex gap-5 align-items-center pt-3 col-12 justify-content-center">
            <Link to={'/login'} data-bs-dismiss="offcanvas" className='d-flex flex-column align-items-center text-decoration-none text-dark'>
              <CiUser className='fs-2' />
              Sign In
            </Link>
            <Link to={'/cart'} data-bs-dismiss="offcanvas" className='d-flex flex-column align-items-center text-decoration-none text-dark'>
              <BsCart2 className='fs-2' />({totalCartProduct})Cart
            </Link>
          </div>

          <div className="Links mt-3">
            {[
              ["Summer", Summerr],
              ["Birthday", Birthday],
              ["Sympathy", Sympathy],
              ["Occasions", Gift_Baskets],
              ["Flowers", Flowers],
              ["Plants", Plants],
              ["Gift Baskets & Food", Gift_Baskets],
              ["Sale", Summerr],
              ["Community", Sympathy]
            ].map(([name, category], idx) => (
              <Link key={idx} to="/summer" data-bs-dismiss="offcanvas" className='text-decoration-none text-dark' onClick={() => setSummer(category)}>
                <h5 className='d-flex justify-content-between ms-3 me-3' style={{ height: '40px' }}>
                  {name} <IoIosArrowForward />
                </h5>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
