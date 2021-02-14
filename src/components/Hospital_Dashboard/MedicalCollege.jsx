import React, { useEffect, useState } from 'react';
// import {StyledNotification} from './StyledNotification';
import {Container, Table, Col} from 'react-bootstrap';
import axios from 'axios';

const MedicalCollege = function({ name }) {

    const [medical, setMedical] = useState([]);
    useEffect(() => {
        axios.get('https://api.rootnet.in/covid19-in/hospitals/medical-colleges')
        .then(({data : jsonData}) => {
            setMedical(jsonData.data.medicalColleges)
            console.log(jsonData)
            console.log(medical);
        })
        .catch((err) => {
            console.log(err);
        });
    },[]);

    return (
            <div>
            <center><h2>Medical Colleges Information</h2></center>
            { medical!=null 
            ? <Table striped bordered hover size='sm'>
                <thead>
                <th>
                    State Name
                </th>
                <th>
                    College Name
                </th>
                <th>College City</th>
                <th>College Ownership</th>
                <th>Admission Capacity</th>
                <th>Hospital Beds</th>
                </thead>
                <tbody>
                    {medical.map(data => {
                        return(
                            <tr key={data.medicalColleges} className="table-success">
                                <td>{data.state}</td>
                                <td>{data.name}</td>
                                <td>{data.city}</td>
                                <td>{data.ownership}</td>
                                <td >{data.admissionCapacity}</td>
                                <td >{data.hospitalBeds}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </Table>
            : null}
            </div>
    );
};

export default MedicalCollege;