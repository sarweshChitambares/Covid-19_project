import React from 'react';
import { Link } from 'react-router-dom';
import corona from '../../img/corona.gif';
import dashboard from '../../css/dashboard.css';

const DashBoard = function({ name }) {
    return (
      <div className="dashboard">
      <ul className="menu">
        <li>
          <Link to="/notification">
            Notifications
          </Link>
        </li>
        <li>
          <Link to="/contact">
            Contact
          </Link>
        </li>
        <li>
          <Link to="/hospital">
            Hospitals details
          </Link>
        </li>
        <li>
          <Link to="/medical">
            medical college details
          </Link>
        </li>
        <li>
          <Link to="/daily">
            Daily test and confirmed cases
          </Link>
        </li>
      </ul>
      <h3>COVID-<b>19</b></h3>
      <p>Coronavirus disease (COVID-19) is an infectious disease caused by a newly discovered coronavirus.<br/>

Most people infected with the COVID-19 virus will experience mild to moderate respiratory illness and recover without requiring special treatment.  Older people, and those with underlying medical problems like cardiovascular disease, diabetes, chronic respiratory disease, and cancer are more likely to develop serious illness.

<br/><br/>The best way to prevent and slow down transmission is to be well informed about the COVID-19 virus, the disease it causes and how it spreads. Protect yourself and others from infection by washing your hands or using an alcohol based rub frequently and not touching your face. 

<br/><br/>The COVID-19 virus spreads primarily through droplets of saliva or discharge from the nose when an infected person coughs or sneezes, so it’s important that you also practice respiratory etiquette (for example, by coughing into a flexed elbow).</p>
      </div>
      
    );
};

export default DashBoard;