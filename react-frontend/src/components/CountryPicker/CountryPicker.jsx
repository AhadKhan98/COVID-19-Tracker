import React, {useState, useEffect} from 'react';
import {NativeSelect, FormControl} from '@material-ui/core';

import styles from './CountryPicker.module.css';

import {fetchCountries} from '../../api';

const CountryPicker = () => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        const fetchCountriesAsync = async () => {
            const fetchedCountries = await fetchCountries();
            setCountries(fetchedCountries);
        }
        fetchCountriesAsync();
    }, [])


    return (
        <FormControl className={styles.formControl}>
            <NativeSelect>
                <option value="global">Global</option>
                {countries ? countries.map(country => <option key={country} value={country}>{country}</option>) : null}
            </NativeSelect>
        </FormControl>
    )
}

export default CountryPicker;