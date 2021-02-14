import React from 'react';
import  {BrowserRouter as Router,
    Switch,
    Route,
    Link} from 'react-router-dom'
import Notification from './Notification/Notification'
import Dashboard from './Dashboard/DashBoard'
import Contact from './Contact/Contact'
import Hospital from './Hospital_Dashboard/Hospital';
import Medical from './Hospital_Dashboard/MedicalCollege';
import Daily from './DailyTest/Daily'
const App = function({ name }) {
    return (
        <Router>
            <div>
        <Switch>
        <Route path="/" exact component={Dashboard} />

        <Route path="/notification"  component={Notification} /> 
        <Route path="/contact" exact component={Contact} />
        <Route path = "/hospital" exact component = {Hospital} />
        <Route path = "/medical" exact component = {Medical} />
        <Route path = "/daily" exact component = {Daily} />

      </Switch>
    </div>
  </Router>
    );
};

export default App;