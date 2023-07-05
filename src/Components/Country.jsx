import { Link, useParams } from "react-router-dom";
import { useState,useEffect } from "react";
import BeatLoader from "react-spinners/BeatLoader";
import CountryDetails from "./CountryDetails";
// import '../Styles/CountryDetails.css'

const Country = () => {
   let {word}= useParams();
   let[country,setCountry]=useState(null);
  
   let [loading, setLoading] = useState(true);
   let [fetchdata, setFetch] = useState(false);

   
   useEffect(() => {
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
                  setLoading(false)
                   alert("404 Network issue...!!! please try agian later")
                  
                
            })  
    },1000)
      
  },[]);
  

    return ( 
        <div  className="search-count">
        {/* {loading  && 
        <BeatLoader 
        // id="loader"
        color="red"
        size={30}
        />} */}
        { country && <CountryDetails country={country}/>}
        { fetchdata==true && 
        <>
        <h2> No data for your search !!!</h2>
        <Link to ="/home"><button type="submit">Home</button></Link>
        </>
        }
        </div>
     );
}
 
export default Country;