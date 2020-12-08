import React,{useState} from 'react'
import SearchResult from './SearchResult'
import './SearchPage.css'
import {useStateValue} from './StateProvider';
import usePlaceAPI from './usePlaceAPI';
import API_KEY from './APIkey';
import useFirestore from './useFirestore';
import BookingModal from './BookingModal';

function SearchPage() {
    const [{term},dispatch] = useStateValue();
    const {data} = usePlaceAPI(term);
    const {docs} = useFirestore('badminton_court');
    const [selectedCourt,setSelectedCourt] = useState(null);
    //temporary img source to replace actual photo
    const img_src='https://sc02.alicdn.com/kf/HTB107TfX5nrK1RjSsziq6xptpXaM.jpg';

    //console.log(term);
    console.log(data);
    return (
        <div className="search">
            <h1>Booklah!</h1>
            <h2>Court Nearby</h2>
            <div className="result"> 
            {docs && docs.map(doc=>(  //hardcoded firestore data
                <SearchResult
                img={img_src}
                //img={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${result.photo.photo_reference}&key=${API_KEY}`}
                 name={doc.court_name}
                 address={doc.address}
                 openNow={doc.isOpen}
                 price= "RM6.00 per hour"
                 courtID={doc.id}
                 setSelectedCourt={setSelectedCourt}
                />   
            ))}
            {data?.results.map( result =>(   //          
                    <SearchResult
                        img={img_src}
                        //img={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${result.photo.photo_reference}&key=${API_KEY}`}
                         name={result.name}
                         address={result.formatted_address}
                         openNow={true}
                         price="RM5.00 per hour"
                         setSelectedCourt={setSelectedCourt}
                    />   
            ))}
            </div>
            
            {selectedCourt && <BookingModal selectedCourt={selectedCourt} setSelectedCourt={setSelectedCourt}/>}
        </div>
    )
}

export default SearchPage
