import React, { useEffect, useState } from 'react';
// import {StyledNotification} from './StyledNotification';
import {Container, Table, Col} from 'react-bootstrap';
import axios from 'axios';

const Contact = function({ name }) {

    const [hospital, setHospital] = useState([]);
    useEffect(() => {
        axios.get('https://api.rootnet.in/covid19-in/hospitals/beds')
        .then(({data : jsonData}) => {
            setHospital(jsonData.data.regional);
            console.log(hospital);
        })
        .catch((err) => {
            console.log(err);
        });
    },[]);

    return (
            <div>
            <center><h2>Hospital & Beds information </h2></center>
          
            { hospital!=null 
            ? <Table striped bordered hover size='sm'>
                <thead>
                <th>
                    State Name
                </th>
                <th>
                    Rural Hospitals
                </th>
                <th>Rural beds</th>
                <th>Urban Hospitals</th>
                <th>Urban Beds</th>
                <th>
                    Total Hospitals 
                </th>
                <th>Total Beds</th>
                </thead>
                <tbody>
                    {hospital.map(data => {
                        return(
                            <tr key={data.regional} className="table-success">
                                <td >{data.state}</td>
                                <td >{data.ruralHospitals}</td>
                                <td>{data.ruralBeds}</td>
                                <td>{data.urbanHospitals}</td>
                                <td>{data.urbanBeds}</td>
                                <td>{data.totalHospitals}</td>
                                <td>{data.totalBeds}</td>
                                
                            </tr>
                            
                        );
                    })}
                     <tr>
                         <th></th>
                <th>ruralHospitals: 39620,</th>
                <th>ruralBeds: 559176,</th>
                <th>urbanHospitals: 7544,</th>
                <th>urbanBeds: 862346,</th>
                <th>totalHospitals: 47164,</th>
                <th>totalBeds: 1421522</th>
            </tr>
                </tbody>
            </Table>
            : null}
            </div>
    );
};

export default Contact;