
import axios from 'axios';

export interface AffectedResponse {
    country: string;
    cases: number;
    deaths: number;
    recovered: number;
}

export const getCovidData = async (country: string): Promise<AffectedResponse> => {
    const results = await axios.get(`https://disease.sh/v3/covid-19/countries/${country}`,{
        params:{
            country
        }
    });
    return {
        country: results.data.country,
        cases: results.data.cases,
        deaths: results.data.deaths,
        recovered: results.data.recovered,
    };
}
