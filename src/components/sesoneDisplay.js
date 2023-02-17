import React from "react";



const SeasonDisplay = (props) => {
    console.log(props);
    const findSeason =(lat, month) => {
        if (month > 2 && month < 9){
            return lat > 0 ? 'Summer' : 'Winter';
        } else {
            return lat > 0 ? 'Winter' : 'Summer';
        }
    };

    const season = findSeason(props.lat, props.month);
    const icon = season === 'Winter' ? 'snowflake' : 'sun'

    return(
        <div>
            {season}
         <i className='big{icon}icon'></i>
        </div>
    )
};

export default SeasonDisplay;