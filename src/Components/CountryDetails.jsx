import '../Styles/CountryDetails.css';
import { Link } from 'react-router-dom';
const CountryDetails = ({country}) => {

    return ( 
        <div>
            <div className="images">
                <div>
                <img src={country.flags.svg} alt="img not found"/>
                </div>
                <div>
                <img src={country.coatOfArms.svg} alt="img not found"/>
                </div>
            </div>
            <div>
            <h2>{country.name.common}</h2>
            </div>
        <div className='cdetails'>
            
            <h3><b>Official Name :</b> {country.name.official}</h3>
            <h3><b>Capital : </b>{country.capital}</h3>
            <h3><b>Region : </b>{country.region}</h3>
            {/* <h3><b>Currency : </b>{country.currencies} {country.currencies}</h3> */}
            <h3><b>SubRegion : </b>{country.subregion}</h3>
            <h3><b>TimeZones : </b>{country.timezones}</h3>
            <h3><b>Population : </b>{country.population}</h3>
            <h3><b>About Flag : </b>{country.flags.alt}</h3>
            <h3><b>Flag : </b><a href={country.flags.svg} target="blank">{country.flags.svg}</a></h3>
            <h3><b>GoogleMap : </b><a href={country.maps.googleMaps} target="blank">{country.maps.googleMaps}</a></h3>
            {/* <p>Languages : {lang}</p> */}
            <h3><b>Symbol : </b><a href={country.coatOfArms.svg} target="blank">{country.coatOfArms.svg}</a></h3>
             <Link to="/"><button>Home</button></Link>
            </div>
        </div>
     );
}
 
export default CountryDetails;