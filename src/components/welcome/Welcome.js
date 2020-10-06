import React from 'react';
import Clock from '../clock/Clock'

function Welcome(props) {
    return (
        <div>
        <h1 className="Welcome">
            Welcome, {props.name}!
            
        </h1>
        <div className="WelcomeClockText"> The Current Time is </div>
            <Clock/>
        </div>
    );
}

export default Welcome;