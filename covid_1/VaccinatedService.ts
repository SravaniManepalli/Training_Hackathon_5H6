import axios from 'axios';

export interface VaccinatedResponse {
    country:string;
    vaccinated:number;
}



export const getVaccinatedData=async (country:string):Promise<VaccinatedResponse> =>{
    const results=await axios.get(`https://disease.sh/v3/covid-19/vaccine/coverage/countries/${country}`);
    return {
        country:results.data.country,
        vaccinated:results.data.timeline[Object.keys(results.data.timeline)[0]], 
    };
};
