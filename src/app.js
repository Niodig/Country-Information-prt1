import axios from "axios";

console.log('Hallo daar!');

//asynchrone functie schrijven
//try - catch blok maken om fouten af te vangen
//in het try blok gaan we eem response afvangen

async function fetchCountryInformation() {
    const BASE_URI = 'https://restcountries.com/'
    const ENDPOINT = 'v2/all'
    try {
        const response = await axios.get(BASE_URI + ENDPOINT);
        const { data: countries } = response
        console.log(response.data[0].name);
        // referentie maken naar ul in html
        const countryList = document.getElementById('countries');
        // aanmaken van li item in onze ul
        // via string interpolation data injecteren in elk li item
        // via string interpolation de populatie injecteren
        // mappen door de data en de html per country weergeven
        countries.map(( country )=>{
            countryList.innerHTML += `
            <li>
                <h3 class="countries-${ country.region }">${ country.name }</h3>
                <p class="population">Has a population of ${ country.population } people</p>
                <img class="flags" src="${ country.flags.png }" alt="${ countries[0].name}"/>
            </li>
        `
        })

    } catch ( error ) {
        console.error( error )
    }
}
fetchCountryInformation()


