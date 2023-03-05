import React, { useEffect, useState } from 'react'
import Mission3_item from './mission3_item';

export default function Mission3() {

    const [ar, setAr] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(()=>{
        doApi();
    }, []);

    const doApi= async() => {
        setIsLoading(true);
        const url = "https://api.themoviedb.org/3/list/5?api_key=d4bc3c640586e7f90dc68d8b300247ff&language=en-US";
        const resp = await fetch(url);
        const data = await resp.json();
        setAr(data.items);
        setIsLoading(false);
    }
    return (
        <div className='container'>
            <h2>List of movies:</h2>
            {isLoading&&<h2>loading...</h2>}
            <div className='row'>
                {ar.map(item => {
                    return (
                        <Mission3_item item={item} key={item.id}/>
                    )
                })}
            </div>
        </div>
    )
}
