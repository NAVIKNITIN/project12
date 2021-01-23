import {useState,useEffect} from "react";
const Fetchpost =(d,n)=>{
    const [data,setdata]=useState([]);
    const fetchdata=()=>{
        fetch(d) 
        .then(res=>res.json()) 
        .then(item=>{setdata(item);
        }
        );
    
};
useEffect(()=>{
    fetchdata();

},[n]);
return data;
};
export default Fetchpost;