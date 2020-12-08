import React,{useState} from 'react';
import {booklahfirestore} from './firebase';
import './bookingModal.css';

function setinitialvalue(){
    return 1;
}

function BookingModal({selectedCourt,setSelectedCourt}) 
{
    const [hour,setHour] = useState(()=>setinitialvalue());

    function increaseHour(){
        if(hour>=1&&hour<4){
            setHour(prevHour=>prevHour+1);
        }
    }

    function decreaseHour(){
        if(hour>1&&hour<4){
            setHour(prevHour=>prevHour-1);
        }
    }
    const badmintoncourt = booklahfirestore.collection('badminton_court').doc(selectedCourt);
    /*badmintoncourt.get().then((doc)=>{
        if(doc.exists){
            console.log(doc.data());
            const courtData = doc.data();
            const court_name = courtData.court_name;  
        }
        else{
            console.log("Document is not exist!");
        }
    }).catch((error)=>{
        console.log(error);
    })*/
    
    //docs will store data from firestore
    const docs=[];
        badmintoncourt.collection('court').onSnapshot((snap)=>{
        let document=[];
        snap.forEach(doc=>{
            document.push({...doc.data(), id:doc.id})
        });
        document.forEach(doc=>{
            docs.push(doc);
        });
        //console.log(docs);
    });
    
    
    console.log(docs);
    
    
    //error: cannot idisplay data from firestore
    //const [selectedInCourt,setSelectedInCourt]=useState(null);

    /*function updateFirestore(e){
        badmintoncourt.update({
            booked_court:1
        });
        badmintoncourt.collection('court').doc(selectedInCourt).update({
            isbook:false
        });
        
    }*/
    
    function handleClick(e){
        setSelectedCourt(null);
    }
    return (
    <div className="backdrop">
        <div className="modal">
            <span className="close-btn"onClick={handleClick}>X</span>
            <h1>Booklah Court</h1>
            <div className="court-section">
                <div className="court">
                    <h2>Court A</h2>
                </div>
                <div className="court">
                    <h2>Court B</h2>
                </div>
            {/*{ docs && docs.map(doc=>(
                <Courtmodal
                    code={doc.code}
                    isbook={doc.isbook}
                    key={doc.id}
                    onClick={setSelectedInCourt(doc.id)}
                />
            ))}*/}
            </div>
            <div className="timeslot-section">
                <h3>Select hours.</h3>
                <div className="time-picker">
                    <button onClick={decreaseHour}>-</button>
                    <span>{hour}</span>
                    <button onClick={increaseHour}>+</button>
                </div>          
            </div>
            <div className="payment">
                {/*<button onClick={updateFirestore}>Pay</button>*/}
                <button onClick={handleClick}>Pay</button>
            </div>
        </div>
    </div>
    )
}

export default BookingModal
