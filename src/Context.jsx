import axios from 'axios';
import React, { createContext, useState } from 'react';

export const flowersData = createContext();

export const FlowersProvider = ({ children }) => {
    const [summerData, setSummerData] = useState([])
    const [category, setCategory] = useState(null)
    const [Summer, setSummer] = useState(``)
    const [pricess, setpricess] = useState(false)
    const [page, setpage] = useState(1)
    const [totalCartProduct, settotalCartProduct] = useState(0)
    const [isLog, setisLog] = useState(false)
    const [search, setSearch] = useState('');
    const [LogSuccess, setLogSuccess] = useState(false)
    const [cartSdata, setcartSdata] = useState([])
    const showData = () => {
        axios.get('https://flowers1800-db-2.onrender.com/Cart').then((res) => setcartSdata(res.data))
    }
    let Summerr = 'https://flowers1800-db-2.onrender.com/Summer';
    let Birthday = 'https://flowers1800-db-2.onrender.com/Birthday';
    let Sympathy = 'https://flowers1800-db-2.onrender.com/Sympathy';
    let Flowers = 'https://flowers1800-db-2.onrender.com/Flowers';
    let Plants = 'https://flowers1800-db-2.onrender.com/Plants';
    let Gift_Baskets = 'https://flowers1800-db-2.onrender.com/Gift-Baskets';


    return (
        <flowersData.Provider value={{
            summerData, setSummerData,
            Summer, setSummer,
            category, setCategory,
            pricess, setpricess,
            page, setpage,
            totalCartProduct, settotalCartProduct,
            isLog, setisLog,
            search, setSearch,
            LogSuccess, setLogSuccess, Summerr, Birthday, Flowers, Plants, Gift_Baskets, Sympathy,
            cartSdata, setcartSdata, showData
        }}>
            {children}
        </flowersData.Provider>
    );
};
