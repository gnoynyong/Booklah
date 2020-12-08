import React from 'react'
import './SearchResult.css'

function SearchResult({
        img,
        name,
        address,
        openNow,
        price,
        courtID,
        setSelectedCourt
    }) {
        function openModal(courtID){

        }
        return (
            <div className="result">
                <img src={img} alt="court"/>
                <div className="result-info">
                    <h6>{name}</h6>
                    <h7>{address}</h7>
                    <ul className="opening_hour">
                        {openNow ?
                            <li className="open">Open</li>
                            :
                            <li className="close">Close</li>
                        }
                    </ul>
                </div>
                <div className="result-bottom">
                    <h8>{price}</h8>
                    <button className="btn-book" onClick={()=> setSelectedCourt(courtID)}>Book!</button>
                </div>
            </div>
        )
    }

export default SearchResult
