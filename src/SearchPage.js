import React from 'react'
import SearchResult from './SearchResult'
import './SearchPage.css'
import {useStateValue} from './StateProvider';
import usePlaceAPI from './usePlaceAPI';
import API_KEY from './APIkey';

function SearchPage() {
    const [{term},dispatch] = useStateValue();
    const {data} = usePlaceAPI(term);
    //temporary img source to replace actual photo
    const img_src='https://sc02.alicdn.com/kf/HTB107TfX5nrK1RjSsziq6xptpXaM.jpg';

    //console.log(term);
    console.log(data);
    return (
        <div className="search">
            <h1>Booklah!</h1>
            <h2>Court Nearby</h2>
            <div className="result">
            {data?.results.map( result =>(                   
                    <SearchResult
                        img={img_src}
                        //img={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${result.photo.photo_reference}&key=${API_KEY}`}
                         name={result.name}
                         address={result.formatted_address}
                         openNow={true}
                         price="RM5.00 per hour"
                    />   
            ))}
            </div>
            
    
        </div>
    )
}

export default SearchPage
