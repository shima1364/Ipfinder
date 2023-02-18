import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';



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
    // const icon = season === 'Winter' ? <AcUnit/> : 'sun'

    return(
        <div>
           {season === 'Winter' ? <AcUnitIcon style={{fontSize:100}}/> : <WbSunnyIcon style={{fontSize:100}}/>}
        </div>
    )
};

export default SeasonDisplay;