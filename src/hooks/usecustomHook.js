import {useEffect, useState } from "react";

function useCurrency(currency){
    const [rate, setRate] = useState({});
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency.toLowerCase()}.json`)
        .then(res => res.json())
        .then((res)=> {
            setRate(res[currency.toLowerCase()]);
        })
     console.log(rate);
     
    }, [currency]);
    console.log(rate);
    
    return rate;
}

export default useCurrency;