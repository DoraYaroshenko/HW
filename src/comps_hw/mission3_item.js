import React, { useState } from 'react'

export default function Mission3_item(props) {
    let item = props.item;
    const [desc, setDesc] = useState("");
    const showDesc = () => {
        if (desc == "") {
            setDesc(item.overview);
        }
        else{
            setDesc("");
        }
    }

    return (
        <div className='col-md-6 border p-2' onClick={showDesc}>
            <img src={`https://image.tmdb.org/t/p/w200${item.poster_path}`} className="float-start me-2 w-25" />
            <h2>{item.original_title}</h2>
            <div>Release date: {item.release_date}</div>
            <div>Rating: {item.vote_average}</div>
            <div>Overview: {desc}</div>
        </div>
    )
}
