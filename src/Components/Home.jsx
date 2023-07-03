import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Home.css';

const Home = () => {
let[loc ,setloc]=useState("");

// search list

// let[list ,setlist]=useState("");
// let[error ,seterror]=useState("");

// useEffect(() => {
//     setTimeout(()=>{
//       fetch("https://restcountries.com/v3.1/all")
//         .then((res) => {
//             console.log(res);
//                 return res.json()
//         })
//               .then((data) => {
//                 let coun= data.filter((d,i)=>{ return d[i].name.common.includes("India")})
//                 console.log(data);
//                 })
//                 .catch((err)=>{
//                     seterror("404 Network issue...!!! please try agian later") 
//             })  
//     },500)
      
//   },[]);
  

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
        {/* {list!="" && <div className="suggestion-div">
           
           <ul>
                {list.map((d)=>{
                    return (
                        <Link to={`/country/${loc}`}>
                            <li onClick={()=>{(setloc(""))}}>{list}</li>
                        </Link>
                    )
                }) }
            </ul>
        </div>} */}

        </>
     );
}
 
export default Home;