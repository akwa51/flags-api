import React, { useState, useEffect } from 'react'
const url='https://restcountries.com/v3.1/all';

// const url2='https://restcountries.com/v3.1/name/peru';

const Countries = () => {

    const [countries,setCountries]= useState([]);

    useEffect (()=>{
        const fetchCountry= async() => {
            const response = await fetch(url);
            const mcountries= await response.json();
            setCountries(mcountries);
            // console.log(mcountries);
        }
        fetchCountry();
    },[]);

    return (   
        <>
            <section className='grid'>
                {countries.map((country,index)=>{
                    const name=country.name.common;
                    const flag=country.flags.svg;
                    const {population,region,capital}=country;
                    
                    let keyd= String(country.idd.root||0).slice(1)+String(country.idd.suffixes||0).slice(0,3);
                        return (
                        <article key={keyd+index}>
                        <img className='cflag' src={flag.toString()} alt={name.toString()}/>
                            <div className='countryInfo'>
                                <h3>{name}</h3>
                                <h4>Population: <span>{population}</span></h4>
                                <h4>Region: <span>{region}</span> </h4>
                                <h4>Capital:<span>{capital}</span></h4>
                            </div>
                        </article>
                        )
                    })
                }
            </section> 
        </>
    )
       
}

export default Countries
