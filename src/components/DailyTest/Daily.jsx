import React, { useEffect, useState } from 'react';
// import {StyledNotification} from './StyledNotification';
import {Container, Table, Col} from 'react-bootstrap';
import axios from 'axios';

const Daily = function({ name }) {

    const [daily, setDaily] = useState([]);
   
    useEffect(() => {
        axios.get('https://api.rootnet.in/covid19-in/stats/history')
        .then(({data : jsonData}) => {
            setDaily(jsonData.data)
            //console.log(jsonData)
            console.log(daily);
            
        })
        .catch((err) => {
            console.log(err);
        });
    },[]);

    return (
            <div>
            <center><h2>Contact & helpline information</h2></center>
            { daily!=null 
            ? <Table striped bordered hover size='sm'>
                <thead>
                <th>
                    Date
                </th>
                <th>
                Confirmed CasesIndian
                </th>

                <th>
                Confirmed CasesForeign
                </th>

                <th>
                Discharged
                </th>
                <th>
                    Deaths
                </th>
                <th>
                    Confirmed unkown
                </th>
                </thead>
                <tbody>
                     {daily.map(data => {
                        return(
                            <tr key={data} className="table-success">
                                <td >{data.day}</td>
                                <td >{data.summary.total}</td>
                                <td >{data.summary.confirmedCasesIndian}</td>
                                <td >{data.summary.confirmedCasesForeign}</td>
                                <td >{data.summary.discharged}</td>
                                <td >{data.summary.deaths}</td>
                                
                               
                            </tr>
                            
                       
                        );
                    })}
                 
                    
                </tbody>
            </Table>
            : null}
            </div>
           
    );
};

export default Daily;