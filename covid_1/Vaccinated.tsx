import React, {useEffect,useState} from 'react';
import {getVaccinatedData,VaccinatedResponse} from './VaccinatedService';

export const Vaccinated:React.FC=():JSX.Element=> {
    const [country,setCountry]=useState<string>('India');
    const [vaccinatedResponse,setVaccinatedResponse]=useState<VaccinatedResponse|null>(null);

    useEffect(() => {
        const fetchVaccinatedData=async()=>{
            const result=await getVaccinatedData(country);
            setVaccinatedResponse(result);
        };
        fetchVaccinatedData();
    },[country]);

    return (
    <div>
            
            
            <select value={country} onChange={(e) => setCountry(e.target.value)}>
                <option value="India">India</option>
                <option value="USA">USA</option>
                <option value="Brazil">Brazil</option>
                <option value="Russia">Russia</option>
                <option value="UK">UK</option>
            </select>


            <tr><td>Country:</td><td>{vaccinatedResponse?.country}</td></tr>
            <tr><td>Number of People Vaccinated:</td><td> {vaccinatedResponse?.vaccinated}</td></tr>
    </div>
    );
};
