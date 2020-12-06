import React,{useState} from 'react';
import './Search.css';
import SearchIcon from '@material-ui/icons/Search';
import {useHistory} from 'react-router-dom';
import {useStateValue} from "./StateProvider";
import {actionTypes} from "./Reducer";


function Search({hideButtons=false}) {
    const [{},dispatch]=useStateValue();
    const [input,setInput]=useState("");
    const history = useHistory();

    const search = (e)=>{
        e.preventDefault();
        //console.log("Button hit");

        //put search term in data layer (whatever type in input field)
        dispatch({
            type:actionTypes.SET_SEARCH_TERM,
            term:input
        })
        history.push('/search');
    };

    return (
        <form className="search">
            <div className="search-input">
                <SearchIcon className="search_icon"/>
               <input value={input} onChange={e=>setInput(e.target.value)} placeholder="Location/Sport"/>
            </div>

            {!hideButtons?(
                <div className="search-btn">
                <button type="submit" onClick={search}>Search</button>
            </div>
            ):(
                <div className="search-btn-hidden">
                <button type="submit" onClick={search}>Search</button>
            </div>
            )}
            
        </form>
    )
}

export default Search
