import { MapContainer, TileLayer, Marker } from 'react-leaflet'


const Map = (location) => {
    const position = [(location.lat), (location.long)];

    return(
        <div>
         <MapContainer center={position} zoom={13} scrollWheelZoom={false} >
             <TileLayer
               attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
               url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={position}/>   
            </MapContainer>
        </div>
    )
};

export default Map;
