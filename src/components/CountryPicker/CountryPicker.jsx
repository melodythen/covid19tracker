import React, {useState, useEffect} from 'react';
import {NativeSelect, FormControl} from '@material-ui/core' //to select country

import styles from './CountryPicker.module.css';
import { fetchCountries } from '../../api';

const CountryPicker = ({handleCountryChange}) => {

    const [fetchedCountries, setFetchedCountries] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => { 
            setFetchedCountries(await fetchCountries());
        }

        fetchAPI();
    }, [setFetchedCountries]); //only change if setFetchedCountries Changes

    console.log(fetchedCountries);
    return(
        <FormControl className={styles.formControl}>
            <NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
                <option value= "">Global</option> {/*empty value so that when click back to global, it wont error*/}
                {fetchedCountries.map((country, i) => <option key={i} value={country}> {country}</option>)}
                {/* above populates the drop down with all the countries */}
            </NativeSelect>

        </FormControl>
    )
}

export default CountryPicker;