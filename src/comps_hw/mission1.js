import React from 'react'

export default function Mission1() {
    const cars_ar = ["BMW", "Ford", "Suzuki", "MG Hector", "Jaguar"];
    const colors_ar = ["blue", "yellow", "silver", "red", "green"];
    const final_ar = cars_ar.map((item,i) => <li style={{color:colors_ar[i]}}>{item} ({colors_ar[i]})</li>);
    return (
        <div className='container'>
            <ul className='list-unstyled'>
                {final_ar}
            </ul>
        </div>
    )
}
