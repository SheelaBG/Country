import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Home.css';


const Home = () => {
let[loc ,setloc]=useState("");

let[list ,setlist]=useState([])

useEffect(() => {
   
    setTimeout(()=>{
      fetch("https://restcountries.com/v3.1/all")
        .then((res) => {
                return res.json()
        })
              .then((data) => {
                let names=data.map((v)=>{
                    return v.name.common;
                })
                let name=names.filter((n)=>{return n.toLowerCase().startsWith(loc.toLowerCase())})
                console.log(name);
                setlist(name);
                
                })
                .catch((err)=>{
                    alert("Network Error or 404 NOT FOUND...");
            })  
    },500)
      
  },[loc]);
  

    return ( 
        <>
         <h1 >Explore Countries </h1>
         <img src="https://images.unsplash.com/photo-1521295121783-8a321d551ad2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d29ybGQlMjBnbG9iZXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80" alt="Img not found"></img>
         <div id="search">
         <div className='SearchDiv'>
         <input type="text" placeholder=" Enter Country Name " value={loc} onChange={(e)=>{setloc(e.target.value)}} />
         <Link to={`/country/${loc}`}><button> Search </button></Link>
       
         </div>
         </div>
        {loc!="" && <div className="suggestion-div">
           
           <ul>
                {list.map((d)=>{
                    return (
                        <Link to={`/country/${d}`}>
                            <li onClick={()=>{(setloc(""))}}>{d}</li>
                        </Link>
                    )
                }) }
            </ul>
        </div>}

        </>
     );
}
 
export default Home;