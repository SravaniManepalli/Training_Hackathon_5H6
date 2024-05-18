
import {useEffect,useState } from "react";
import {getCovidData,AffectedResponse } from './AffectedService';



export const Affected: React.FC=():JSX.Element=>{

    const [country,setCountry]=useState<string>("India");
    const [covidResponse,setCovidResponse]=useState<AffectedResponse>();

    useEffect(() => {
        const fetchCovidData=async() => {
            const result=await getCovidData(country);
            setCovidResponse(result);
        };
        

        fetchCovidData();
    }, [country]);


    return (
    <div>

            <select value={country} onChange={(e) => { setCountry(e.target.value) }}>


                <option value="India">India</option>
                <option value="Algeria">Algeria</option>
                <option value="Angola">Angola</option>
                <option value="Benin">Benin</option>
                <option value="Russia">Russia</option>
                <option value="UK">UK</option>
            </select>
        <br></br><br></br>
        <table>
            <tr><td>Country:</td> <td> {covidResponse?.country}</td></tr>
            <tr><td>Cases: </td><td>{covidResponse?.cases}</td></tr>
            <tr><td>Deaths:</td><td> {covidResponse?.deaths}</td></tr>
            <tr><td>Recovered:</td><td> {covidResponse?.recovered}</td></tr>
        </table>
    </div>
    );
}
