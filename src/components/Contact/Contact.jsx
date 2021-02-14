import React, { useEffect, useState } from 'react';
// import {StyledNotification} from './StyledNotification';
import {Container, Table, Col} from 'react-bootstrap';
import axios from 'axios';

const Contact = function({ name }) {

    const [contact, setContact] = useState([]);
    useEffect(() => {
        axios.get('https://api.rootnet.in/covid19-in/contacts')
        .then(({data : jsonData}) => {
            setContact(jsonData.data.contacts.regional);
            console.log(contact);
        })
        .catch((err) => {
            console.log(err);
        });
    },[]);

    return (
            <div>
            <center><h2>Contact & helpline information</h2></center>
            <tr>
                <th>Phone Number :+91-11-23978046</th>
                <th>  number-tollfree: 1075  </th>
                <th><a href="ncov2019@gov.in">email: ncov2019@gov.in </a> </th>
                <th><a href="https://twitter.com/MoHFW_INDIA">twitter: https://twitter.com/MoHFW_INDIA</a></th>
                <th><a href="https://www.facebook.com/MoHFWIndia">facebook: https://www.facebook.com/MoHFWIndia</a></th>
                <th><a href="hhttps://pib.gov.in/newsite/pmreleases.aspx?mincode=31">media: https://pib.gov.in/newsite/pmreleases.aspx?mincode=31</a></th>
            </tr>
            { contact!=null 
            ? <Table striped bordered hover size='sm'>
                <thead>

                <th>
                    State Name
                </th>
                <th>
                    Helpline Number
                </th>

               
                </thead>

                <tbody>

                    {contact.map(data => {
                        return(
                            <tr key={data.loc} className="table-success">
                                <td >{data.loc}</td>
                                <td >{data.number}</td>
                            
                            </tr>
                        );
                    })}
                    
                </tbody>
            </Table>
            : null}
            </div>
    );
};

export default Contact;