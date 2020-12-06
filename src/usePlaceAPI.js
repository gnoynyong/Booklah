import {useState,useEffect} from 'react';
import API_KEY from './APIkey';



const usePlaceAPI = (term)=>{
    const [data,setData]=useState(null);
   /* const [lat,setLat]=useState(null);
    const [lng,setLng]=useState(null);

    const setPosition = (position)=>{
        setLat(position.coords.latitude);
        setLng(position.coords.longitude);
    }

    const getLocation=()=>{
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(setPosition);
            console.log(`Latitude =${lat},longitude=${lng}`);
        }
        else{
            console.log('Error');
        }
    }
     */

    useEffect(()=>{
        const fetchData = async()=>{
            fetch(
                `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${term}&location=3.127887,101.59449&radius=5000&key=${API_KEY}`
            )
            .then(response=>response.json())
            .then(results=>{
                setData(results);
            })
        }
        fetchData();
    },[term])

    return {data}
};

export default usePlaceAPI;