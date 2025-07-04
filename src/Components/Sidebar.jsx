import React, { useContext, useEffect, useState } from 'react';
import { flowersData } from '../Context';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    const { setSummer, setCategory, pricess, setpricess } = useContext(flowersData);
    const [isChecked, setIsChecked] = useState({
        Flowers: false,
        Plants: false,
        Cake: false,
        BakedGoods: false,
        PlushToy: false,
        Apparel: false,
        ChocolateDippedStrawberry: false,
        Sweets: false,
        Home_and_Kitchenwares: false,
        Fresh_Fruit: false,
        Candles: false,
        Chocolate: false,
    });

    const handlePriceChange = (event) => {
        setpricess(event.target.checked);
    }

    const handleCheckboxChange = (event) => {
        setIsChecked(event.target.checked);
        setCategory(event.target.value);
    }
    useEffect(() => {
        isChecked ? handleCheckboxChange : setCategory(null);
    }, [isChecked, setSummer]);
    return (
        <>
            <div className='col-12'>
                <h4 className='d-lg-block d-md-none d-sm-none d-none'>Filters</h4>
                <hr />
                <h5>Price Range</h5>
                <p className='d-flex  align-items-center'><input type="checkbox" checked={pricess}
                    onChange={handlePriceChange} value={75} style={{ height: '20px', width: '20px' }} />&nbsp; Under $75</p>
                <p className='d-flex  align-items-center'><input type="checkbox" style={{ height: '20px', width: '20px' }} />&nbsp; 75 to $100</p>
                <p className='d-flex  align-items-center'><input type="checkbox" style={{ height: '20px', width: '20px' }} />&nbsp; To $200</p>
                <hr />
                <h4>Assortment Contains</h4>
                <p className='d-flex  align-items-center'><input type="checkbox" checked={isChecked.Flowers}
                    onChange={handleCheckboxChange} style={{ height: '20px', width: '20px' }} value={"Flowers" || ''} />&nbsp; Flowers</p>
                <p className='d-flex  align-items-center'><input type="checkbox" checked={isChecked.Plants}
                    onChange={handleCheckboxChange} style={{ height: '20px', width: '20px' }} value={"Plants" || ''} />&nbsp; Plants</p>
                <p className='d-flex  align-items-center'><input type="checkbox" checked={isChecked.ChocolateDippedStrawberry}
                    onChange={handleCheckboxChange} style={{ height: '20px', width: '20px' }} value="Chocolate Dipped Strawberry" />&nbsp; Chocolate Dipped Strawberry</p>
                <p className='d-flex  align-items-center'><input type="checkbox" checked={isChecked.Chocolate}
                    onChange={handleCheckboxChange} style={{ height: '20px', width: '20px' }} value="Chocolate" />&nbsp; Chocolate</p>
                <p className='d-flex  align-items-center'><input type="checkbox" checked={isChecked.Apparel}
                    onChange={handleCheckboxChange} style={{ height: '20px', width: '20px' }} value="Apparel" />&nbsp; Apparel</p>
                <p className='d-flex  align-items-center'><input type="checkbox" checked={isChecked.BakedGoods}
                    onChange={handleCheckboxChange} style={{ height: '20px', width: '20px' }} value="Baked Goods" />&nbsp; Baked Goods</p>

                <p className='d-flex  align-items-center'><input type="checkbox" checked={isChecked.Cake}
                    onChange={handleCheckboxChange} style={{ height: '20px', width: '20px' }} value="Cake" />&nbsp; Cake</p>

                <p className='d-flex  align-items-center'><input type="checkbox" checked={isChecked.Candles}
                    onChange={handleCheckboxChange} style={{ height: '20px', width: '20px' }} value="Candles" />&nbsp; Candles</p>

                <p className='d-flex  align-items-center'><input type="checkbox" checked={isChecked.Fresh_Fruit}
                    onChange={handleCheckboxChange} style={{ height: '20px', width: '20px' }} value="Fresh Fruit" />&nbsp; Fresh Fruit</p>
                <p className='d-flex  align-items-center'><input type="checkbox" checked={isChecked.Home_and_Kitchenwares}
                    onChange={handleCheckboxChange} style={{ height: '20px', width: '20px' }} value="Home and Kitchenware" />&nbsp; Home and Kitchenware</p>

                <p className='d-flex  align-items-center'><input type="checkbox" checked={isChecked.PlushToy}
                    onChange={handleCheckboxChange} style={{ height: '20px', width: '20px' }} value="Plush Toy" />&nbsp; Plush Toy</p>

                <p className='d-flex  align-items-center'><input type="checkbox" checked={isChecked.Sweets}
                    onChange={handleCheckboxChange} style={{ height: '20px', width: '20px' }} value="Sweets" />&nbsp; Sweets</p>
            </div>
        </>
    )
}

export default Sidebar