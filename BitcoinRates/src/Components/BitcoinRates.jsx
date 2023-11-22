import { useState } from "react";
import { useData } from "../Hooks/useData";

const currencies = ['USD', 'AUD', 'NZD', 'GBP', 'EUR', 'SGD'];
function BitcoinRates() {
    const [currency, setCurrency] = useState(currencies[0]);
    // const [result, setResult] = useState(null);
    // const [url]
    const data = useData(`https:api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}`)
    // useEffect(() => {
    //     console.log('running effect');
    //     let ignore = false; // flag to allow ignoring of the fetch result
    //     fetch(`https:api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}`)
    //         .then(response => response.json())
    //         .then(json => {
    //             if (!ignore) {
    //                 setResult(json.bitcoin[currency.toLowerCase()])
    //                 console.log(json.bitcoin[currency.toLowerCase()]);
    //             }
    //         });
    //     // cleanup function - runs when unmounted or dependencies change
    //     return () => {
    //         ignore = true; // ignore now invalid fetch results
    //         console.log('cleanup effect');
    //     };
    // }, [currency]); // effect dependencies

    // fetch URL: https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}
    const options = currencies.map(curr => <option value={curr} key={curr}>{curr}</option>);
    return (
        <div className="BitcoinRates componentBox">
            <h3>Bitcoin Exchange Rate</h3>
            <label>Choose currency:
                <select value={currency} onChange={e => setCurrency(e.target.value)}>
                    {options}
                </select>
            </label>
            {data ? <p>One Bitcoin is worth: $ {data.bitcoin[currency.toLowerCase()] + currency} </p> : null}
        </div>
    )
}
export default BitcoinRates