import React, { useEffect, useState } from 'react';
import {StyledNotification} from './StyledNotification';
import {Container, Table, Col} from 'react-bootstrap';
import axios from 'axios';

const Notification = function({ name }) {

    const [notification, setNotification] = useState([])
    useEffect(() => {
        axios.get('https://api.rootnet.in/covid19-in/notifications')
        .then(({data : jsonData}) => {
            console.log(jsonData.data.notifications);
            setNotification(jsonData.data.notifications)
        })
        .catch((err) => {
            console.log(err);
        })
    },[]);

    return (
            <div lass="p-3 border bg-light">
            <center><h2>Notifications & Advisories:</h2></center>
            <Table striped bordered hover size='sm'>
                <thead>
                <th>
                    Date
                </th>
                <th>
                    Notification Title
                </th>
                <th>
                    Link
                </th>
                </thead>
                <tbody>
                    {notification.map(data => {
                        return(
                            <tr key={data.title.slice(0.10)} className="table-success">
                                <td >{data.title.substring(0,10)}</td>
                                <td >{data.title.slice(10)}</td>
                                <td ><a  href={data.link}>{data.link}</a></td>
                            </tr>
                        );
                    })}
                </tbody>
            </Table>
            </div>
    );
};

export default Notification;