//make functions to fetch data 

import axios from 'axios'; //used to make api requests

const url= "https://covid19.mathdro.id/api"

export const fetchData = async (country) => {
    //asyncronous fnc 
    //for choosing country and changing chart
    let changeableUrl = url;
    //if there is a country, we change url, else just global
    if(country){
        changeableUrl = `${url}/countries/${country}`
    }


    try { //if fetch successful
        const {data: {confirmed,recovered,deaths,lastUpdate}} = await axios.get(changeableUrl);
        
        // const modifiedData ={
        //     confirmed,
        //     recovered,
        //     deaths,
        //     lastUpdate,
        // }

        return {
            confirmed,
            recovered,
            deaths,
            lastUpdate,
        };

    } catch (error) {
        console.log(error);

    }
}

export const fetchDailyData = async () =>{
    try {
        const { data } = await axios.get(`${url}/daily`);
        //data is array so loop 
        const modifiedData = data.map((dailyData) => ({
            confirmed: dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            date: dailyData.reportDate,

         } ));

         return modifiedData;
    } catch (error) {
        console.log(error);

    }
}

export const fetchCountries = async() => {
    try {
        const {data:{ countries}} = await axios.get(`${url}/countries`);

        return countries.map((country)=> country.name);
    } catch (error) {
        console.log(error);
    }

}