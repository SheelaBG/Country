import { Link, useParams } from "react-router-dom";
import { useState,useEffect } from "react";
import BeatLoader from "react-spinners/BeatLoader";
import CountryDetails from "./CountryDetails";

const Country = () => {
   let {word}= useParams();
   let[country,setCountry]=useState(null);
   let[error,seterror]=useState(null);
   let [loading, setLoading] = useState(true);
   let [fetchdata, setFetch] = useState(false);

   
   useEffect(() => {

    setLoading(true);
    setTimeout(()=>{
      fetch(`https://restcountries.com/v3.1/name/${word}?fullText=true`)
        .then((res) => {
            if(res.status==404)
            {
                setFetch(true);
                setLoading(false)
            }
            else{
                return res.json()
            }
        })
              .then((data) => {
                // console.log(data[0]);
                 setCountry(data[0])
                 setLoading(false);
                })
                .catch((err)=>{
                    seterror("404 Network issue...!!! please try agian later")
                    setLoading(false)
                
            })  
    },1000)
      
  }, []);
  

    return ( 
        <div  className="search-count">
        {loading  && 
        <BeatLoader 
        id="loader" 
        color="red"
        size={30}
        />}
        { country && <CountryDetails country={country}/>}
        { fetchdata==true && <h2> No data for your search !!!</h2>} 
        { country==null && <Link to="/"><button>Home</button></Link>}
        </div>
     );
}
 
export default Country;