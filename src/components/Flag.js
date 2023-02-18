import React, { useState, useEffect } from 'react';
import '../App.css';
const Flag = ({location}) => {
    
    const [flag, setFlag] = useState()

    useEffect(() => {
        fetch(`https://countryflagsapi.com/png/${location}`)
        .then(response => setFlag(response.url))
        .catch((err) => console.log(err))
}, [])

      console.log(flag, 'test')

  return (
    <div>
       <img crossOrigin="anonymous" src={flag} alt="" className='flag'/>
    </div>
  )
}

export default Flag;