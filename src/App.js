import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { MapContainer, TileLayer, Marker } from 'react-leaflet'
// import RestInfo from './RestInfo';
import "./App.css";
import Flag from './components/Flag';
import Header from './components/Header';
import SeasonDisplay from './components/sesoneDisplay';
import moment from 'moment';



const App = () => {
  const [ip, setIp] = useState('');
  const [location, setLocation] = useState({});
  const [time, setTime] = useState('');
  const [mapCenter, setMapCenter] = useState([0, 0]);
  const [month, setMonth]= useState('');

  

  useEffect(() => {
    // Get the user's IP address
    fetch('https://api.ipify.org?format=json')
      .then(res => res.json())
      .then(data => setIp(data.ip));


    // Get the user's location and time information
    fetch('https://ipapi.co/json/')
      .then(res => res.json())
      .then(data => {
        setLocation({
          city: data.city,
          region: data.region,
          country: data.country_name,
          lat:data.latitude,
          long:data.longitude,
          
        })
        setTime(new Date().toLocaleString());
        setMapCenter([data.latitude, data.longitude]);
        setMonth(moment().month()+1);
        // setMonth(new Date().getMonth);
      })
      .catch((err) => console.log(err));
  }, []);
  
console.log(location.country)
  return (
     <>
     <Header/>
     <br />
     <Container className='containere' >
      <Row xs={2} md={4} lg={6}>
         <Col><h5>Your IP Address</h5></Col>
         <Col><h4>{ip}</h4></Col>
      </Row>
      <Row xs={1} md={2}>
        <Col>
         <Card  className='cart text-bg-primary' >
           <ListGroup>
             <ListGroup.Item><h3>Location Info</h3></ListGroup.Item>
             <ListGroup.Item>City: {location.city}</ListGroup.Item>
             <ListGroup.Item>Region: {location.region}</ListGroup.Item>
             <ListGroup.Item>Country: {location.country}</ListGroup.Item>
           </ListGroup>
         </Card>
         <SeasonDisplay lat={location.lat}
            month={month}/>
        </Col>
        <Col> 
            <MapContainer center={mapCenter} zoom={13} scrollWheelZoom={true} className="leaflet" key={mapCenter}>
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={mapCenter}/>   
            </MapContainer>
         </Col>
      </Row>
     <Row xs="auto">
     </Row>
      <Row xs="auto">
        {location.country ? (<Col><Flag  location={location.country} key={location.country}/></Col>) : null}
        <Col><h5>Time Information:</h5></Col>
        <Col><p>{time}</p></Col>
      </Row>
     </Container>
     </>
   
  );
};

export default App;
