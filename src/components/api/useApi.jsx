import React, { useState, useEffect } from 'react'
import axios from 'axios'

const API = 'https://api.currencyfreaks.com/latest?apikey=e33d94cb008c43208aa4ca9b092603c5'

function useApi() {
    const [data, setData] = useState([])
    
    useEffect(() => {
        const getCurrency = async () => {
            try {
                const res = await axios.get(API)
                setData(res.data)
            } catch (error) { }
        }
        getCurrency()
    }, [])

    return { data }
}

export default useApi