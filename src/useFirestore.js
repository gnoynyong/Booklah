import React,{useState,useEffect} from 'react'
import {booklahfirestore} from './firebase';

function useFirestore(collection) {
    const [docs,setDocs] = useState([]);

    useEffect(()=>{
        const unsubcribe = booklahfirestore.collection(collection)
        .onSnapshot((snap)=>{
            let documents =[];
            snap.forEach(doc=>{
                documents.push({...doc.data(), id:doc.id})
            });
            setDocs(documents);
        });

        return ()=>unsubcribe();
    },[collection])

    return {docs};
}

export default useFirestore
