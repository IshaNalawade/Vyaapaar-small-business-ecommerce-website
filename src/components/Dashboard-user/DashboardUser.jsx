import React from 'react';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import DashboardCardLeft from './DashboardCard/DashboardCardLeft';
import DashboardCardRight from './DashboardCardRight/DashboardCardRight';

export default function Landing() {
    return (
        <div>
             
              
              <DashboardCardLeft/>
             

        </div>
    )
}