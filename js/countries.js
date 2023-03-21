const loadAllCountries =()=>{
    const url =`https://restcountries.com/v3.1/all`
    fetch(url)
    .then(res => res.json())
    .then(data => showAllCountries(data))
}

const showAllCountries = countries =>{
      console.log(countries);
    const countriesHTML = countries.map(country => getCountryHTML(country))   
    // console.log(countriesHTML[0]);
    const container = document.getElementById('countries');
    container.innerHTML=countriesHTML.join(' ');
    
}
const getCountryHTML =( {name , flags , capital,region} ) =>{
    
    return ` 
        <div class="country">
            <h2> ${name.common}</h2>
            <h2 id="capital" > Capital : ${capital}</h2>
            <h2 id="capital" > Continent : ${region}</h2>
            <img src="${flags.png}" alt="">
        </div>
    `
}
// const getCountryHTML =( country ) =>{
    // original 
//     return ` 
//         <div class="country">
//             <h2> ${country.name.common}</h2>
//             <img src="${country.flags.png}" alt="">
//         </div>
//     `
// }
// const getCountryHTML =( country ) =>{
//     // option-1
//     const {name , flags} = country;
//     return ` 
//         <div class="country">
//             <h2> ${name.common}</h2>
//             <img src="${flags.png}" alt="">
//         </div>
//     `
// }

loadAllCountries()